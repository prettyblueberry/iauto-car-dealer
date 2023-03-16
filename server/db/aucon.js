/*
 Navicat Premium Data Transfer

 Source Server         : Auction
 Source Server Type    : MongoDB
 Source Server Version : 60003 (6.0.3)
 Source Host           : localhost:27017
 Source Schema         : aucon

 Target Server Type    : MongoDB
 Target Server Version : 60003 (6.0.3)
 File Encoding         : 65001

 Date: 16/03/2023 13:24:15
*/


// ----------------------------
// Collection structure for auctions
// ----------------------------
db.getCollection("auctions").drop();
db.createCollection("auctions");

// ----------------------------
// Documents of auctions
// ----------------------------
db.getCollection("auctions").insert([ {
    _id: ObjectId("6411f28b94f72e436c988256"),
    image: {
        data: [ ],
        contentType: [ ]
    },
    vehicleInfo: {
        fuel: {
            isDiesel: false,
            isPetrol: true,
            isElectric: false
        }
    },
    startingBid: NumberInt("111"),
    status: "Prepare",
    timeDuration: NumberInt("0"),
    itemName: "111",
    description: "111",
    bidStart: ISODate("2023-03-15T16:29:00.000Z"),
    bidEnd: ISODate("2023-03-15T17:29:00.000Z"),
    created: ISODate("2023-03-15T16:30:03.452Z"),
    bids: [ ],
    seller: ObjectId("6411f26f94f72e436c988255"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6411f26f94f72e436c988255"),
    seller: true,
    role: "customer",
    name: "111",
    email: "111@gmail.com",
    salt: "1129658663623",
    hashed_password: "5c4205a02d37d63f39d93ef78617dae3a5d85b14",
    created: ISODate("2023-03-15T16:29:35.383Z"),
    __v: NumberInt("0")
} ]);
