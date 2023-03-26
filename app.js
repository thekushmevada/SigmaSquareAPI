const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const port = process.env.PORT || 5000;

const mongoURL =
  "mongodb+srv://kushmevada:sigmasquare@cluster0.sffios3.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});

//userdetails
require("./models/userDetails");
const User = mongoose.model("UserDetails");
app.post("/register", async (req, res) => {
  const { name, email, mobileNo } = req.body;
  try {
    await User.create({
      name,
      email,
      mobileNo,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
