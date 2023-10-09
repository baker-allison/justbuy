
require("dotenv").config();
const express = require("express");
const passport = require("passport")

const cors = require("cors");
const connectDB = require("./models/connectDB.js");
const bodyParser = require("body-parser");
const session = require("express-session");
const helmet = require("helmet")
const multer = require("multer")
const {post_item} = require("./controllers/itemControllers.js")
const morgan = require("morgan")
const path = require("path")
const cookieParser = require("cookie-parser");


const authRoutes = require("./routes/Auth.js")
const cartRoutes = require("./routes/Cart.js")
const itemRoutes = require("./routes/Item.js")
const orderRoutes = require("./routes/Order.js")

const app = express();




  

app.use(bodyParser.json())


app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.static('assets'));
app.use(express.json());
app.use(cookieParser());
 app.use(morgan("common"));
 app.use(bodyParser.json({ limit: "100mb", extended: true }));
 app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
 app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

 
//   app.use('/items', express.static('assets'));
  app.use('/items', express.static(path.join(__dirname, 'assets')));
  app.use('/search', express.static(path.join(__dirname, 'assets')));
  app.use('/category/:item', express.static(path.join(__dirname, 'assets')));
 
 
 

 


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "assets");
    },
    filename: function(req, file, cb) {
         cb(null, file.originalname)
    //     cb(null, uuidv4 + '-' + Date.now() + path.extname(file.originalname));
     }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/png"]
    if (allowedFileTypes.includes(file.mimetype) ){
   cb(null, true)
    }else {
        cb(null, false)
    }
}

let upload = multer({storage, fileFilter})



//  const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });


 app.use(session({
  secret: "Our little secret",
  resave: false,
  saveUninitialized: false
}));

const User = require("./models/User.js");




app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.post("/items", upload.single("image"));




app.use("/", authRoutes );
app.use("/", cartRoutes)
app.use("/", itemRoutes)
app.use("/", orderRoutes)
















const startServer  = async () => {
    try{
  // eslint-disable-next-line no-undef
  connectDB(process.env.MONGO_URL);
  app.listen(3000, console.log("Server is active on  port 3000"))
}catch (err){
    console.log(err)
}


}

startServer();