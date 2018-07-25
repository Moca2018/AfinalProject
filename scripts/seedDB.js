const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roommatequest",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    name: "Musa - I created a lot of Monsters!",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
      "gym"
    ],
    accountType: "has",
    profileImage: "https://media.licdn.com/dms/image/C4E03AQG9rIpR5UTkjQ/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=LIk7Q-Ct42ai2xkMOQEXQzuuwt-8E0DgM6KVwcRB0tk"
  },
  {
    name: "Shirlette Chambers",
    gender: "female",
    age: 25,
    preferences: [
      "internet",
      "parking"
    ],
    accountType: "need",
    profileImage: "https://media.licdn.com/dms/image/C4D03AQEaCerGu9_cLg/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=xPNIUVAIkky4Q3X_NPehwwLD-TtlGzMYJ_T-joCZWTI"
  },
  {
    name: "Shahein Moussavi-I DO LIKE CATS!    ",
    gender: "male",
    age: 25,
    preferences: [
      "internet",
      "gym",
      "pool"
    ],
    accountType: "has",
    profileImage: "https://media.licdn.com/dms/image/C4E03AQH276WUMpOTzg/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=7q6QslHBNwiSb1z5rwraRzyc7D0YD3irFeNUUettvRM"
  },
  {
    name: "Meguel Chavez",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
      "gym",
      "internet"
    ],
    accountType: "need",
    profileImage: "https://media.licdn.com/dms/image/C4D03AQH-XoHO0ne-lw/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=O84avzqSJibojmFsdcvvwST-xA9vWNeImcBeCxqvqF8"
  },
  {
    name: "Valarie Regas - I miss you guys!",
    gender: "female",
    age: 25,
    preferences: [
      "parking",
      "gym",
    ],
    accountType: "has",
    profileImage: "https://media.licdn.com/dms/image/C4D03AQHYZQ3fHvikuA/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=uR-D_JlPCNpyzqpQQymN73Cgjn9WSuUmhvSst7x5U5I"
  },
  {
    name: "Nelson Quinones - I still don't know her name!",
    gender: "male",
    age: 25,
    preferences: [
      "internet",
      "pool",
    ],
    accountType: "need",
    profileImage: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/10399858_123048726514_4036857_n.jpg?_nc_cat=0&oh=c2bd9c17654ea918d0ea1cca9d0a5829&oe=5BCD40C1"
  },
  {
    name: "Malcolm Strong - I was a football player!",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
      "parking",
      "gym"
    ],
    accountType: "has",
    profileImage: "https://media.licdn.com/dms/image/C5603AQHM_xIH81rzGg/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=ewRmiXRyVC1ge2tTCVwAdZFVJ5SgCw9HEmDtsNdIXZw"
  },
  {
    name: "Michael Daye",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
      "parking",
      "internet"
    ],
    accountType: "need",
    profileImage: "https://media.licdn.com/dms/image/C5603AQEeZM0NuMGbpQ/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=euOllnt1VU1XSQDZDaoEFKRP28SzEps1BOHLgizxJxw"
  },
  {
    name: "Leaveil Armstrong -I'm cool!",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
    ],
    accountType: "has",
    profileImage: "https://media.licdn.com/dms/image/C4D03AQE3DBf_teRaPw/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=2P0dg1ZAzVW9klMvYBasisriN1qXftFlScQAepYajM0"
  },
  {
    name: "Gene Williams",
    gender: "male",
    age: 25,
    preferences: [
      "pool",
      "internet",
      "gym"
    ],
    accountType: "need",
    profileImage: "https://media.licdn.com/dms/image/C4E03AQHgtSrU-UGQvQ/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=ulSv0ueED_81rxStH-AVGujHeagKcOK1TWL7KxysYXU"
  }
];

  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
    })
    .catch(err => {
      console.error(err);
    });
