import Auction from '../models/auction.model'

export default (server) => {
    const io = require('socket.io').listen(server)
    io.on('connection', function(socket){
        console.log(socket.id);
        socket.on('join_auction_room', data => {
            console.log('join!!')
            socket.join(data.room)
        })
        socket.on('leave auction room', data => {
            console.log('out!!')
            socket.leave(data.room)
        })
        socket.on('new bid', data => {
            console.log('bid!!')
            console.log(data);
            // bid(data.bidInfo, data.room)
        })
    })
    const bid = async (bid, auction) => {
        try {
          let result = await Auction.findOneAndUpdate({_id:auction, $or: [{'bids.0.bid':{$lt:bid.bid}},{bids:{$eq:[]}} ]}, {$push: {bids: {$each:[bid], $position: 0}}}, {new: true})
                                  .populate('bids.bidder', '_id name')
                                  .populate('seller', '_id name')
                                  .exec()
                                  console.log(result);
            io
            .to(auction)
            .emit('new bid', result)
        } catch(err) {
          console.log(err)
        }
    }
}

