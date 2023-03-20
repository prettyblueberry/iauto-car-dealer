import Auction from '../models/auction.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../assets/images/default.png'

const create = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      })
    }
    let auction = new Auction(fields)
    auction.seller= req.profile
    console.log(files);
    let type = [];
    let imageData = [];
    Object.keys(files).forEach(key => {
      type.push(files[key].type);
      imageData.push(fs.readFileSync(files[key].path));
    });
    auction.image.data = imageData;
    auction.image.contentType = type;
    try {
      let result = await auction.save()
      res.status(200).json(result)
    }catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const auctionByID = async (req, res, next, id) => {
  try {
    let auction = await Auction.findById(id).populate('seller', '_id name').populate('bids.bidder', '_id name').exec()
    if (!auction)
      return res.status('400').json({
        error: "Auction not found"
      })
    req.auction = auction
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve auction"
    })
  }
}

const photo = (req, res, next) => {
  if(req.auction.image.data){
    res.set("Content-Type", req.auction.image.contentType[0])
    return res.send(req.auction.image.data[0])
  }
  next()
}
const defaultPhoto = (req, res) => {
  return res.sendFile(process.cwd()+defaultImage)
}

const read = (req, res) => {
  // req.auction.image = undefined
  return res.json(req.auction)
}

const update = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Photo could not be uploaded"
      })
    }
    let auction = req.auction
    auction = extend(auction, fields)
    auction.updated = Date.now()
    if(files.image){
      auction.image.data = fs.readFileSync(files.image.path)
      auction.image.contentType = files.image.type
    }
    try {
      let result = await auction.save()
      res.json(result)
    }catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const remove = async (req, res) => {
  try {
    let auction = req.auction
    let deletedAuction = auction.remove()
    res.json(deletedAuction)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }  
}

const listOpen = async (req, res) => {
  try {
    let auctions = await Auction.find({}).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name')
    res.json(auctions)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const summaryCounts = async (req, res) => {
  try {
    let countAuctionsOpen = await Auction.find({'bidStart' : { $lt: Date.now() } , 'bidEnd': { $gt: Date.now() }}).count({})
    let countMyBids = await Auction.find({}).elemMatch('bids', { 'bidder': req.params.userId}).count({})
    let countMyWinnings = await Auction.find({});

    res.json({countAuctionsOpen, countMyBids})
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listBySeller = async (req, res) => {
  try {
    let auctions = await Auction.find({seller: req.profile._id}).populate('seller', '_id name').populate('bids.bidder', '_id name')
    res.json(auctions)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const list = async (req, res) => {
  try {
    const userId = req.params.userId;
    const filter = req.params.filter;
    console.log("userId, filter", userId, filter);
    let auctions;
    switch(filter){
      case "active":
        auctions = await Auction.find({'bidStart' : { $lt: Date.now() } , 'bidEnd': { $gt: Date.now() }}).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name');
        break;
      case "my-bids":
        auctions = await Auction.find({}).elemMatch('bids', { 'bidder': userId}).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name')
        break;
      case "my-winnings":
        auctions = await Auction.find({}).elemMatch('bids', { 'bidder': userId}).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name')
        break;
      case "my-actives":
        auctions = await Auction.find({
          "seller": userId,
          'bidStart' : { $lt: Date.now() },
          'bidEnd': { $gt: Date.now() }
        }).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name')
        break;
      case "my-auctions":
        auctions = await Auction.find({
          "seller": userId
        }).sort('bidStart').populate('seller', '_id name').populate('bids.bidder', '_id name')
        break;
    }
    res.json(auctions)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const listByBidder = async (req, res) => {
  try {
    let auctions = await Auction.find({'bids.bidder': req.profile._id}).populate('seller', '_id name').populate('bids.bidder', '_id name')
    res.json(auctions)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const isSeller = (req, res, next) => {
  const isSeller = req.auction && req.auth && req.auction.seller._id == req.auth._id
  if(!isSeller){
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

export default {
  create,
  auctionByID,
  photo,
  defaultPhoto,
  listOpen,
  listBySeller,
  listByBidder,
  read,
  update,
  isSeller,
  remove,
  summaryCounts,
  list
}
