const multer = require("multer");
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const email = require("./routes/email.cjs");
const connectDB = require("./todo/connectDB.cjs");
const todo = require("./todo/route.cjs");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow only requests from this origin
  methods: "GET,POST", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};
app.use(express.json());
app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname);
  },
});

const uploadpath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadpath));

app.get("/file", async (req, res) => {
  try {
    const file = await fs.promises.readdir(uploadpath);
    const imageUrls = file.map((f) => `http://localhost:3000/uploads/${f}`);
    res.json(imageUrls);
  } catch (error) {
    console.log(error);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkfileType(file, cb);
  },
}).single("file");
function checkfileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error:Images only!");
  }
}
app.get("/", (req, res) => {
  res.send("Hello from karthik!");
});

app.post("/uploads", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }
    console.log(req.file);
    console.log("file uploaded");
    res.send("File uploaded!");
  });
});

app.use("/email", email);
app.use("/todo", todo);
connectDB();
app.listen(3000, () => console.log("server started on port 3000"));
