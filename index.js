const express = require("express");
const port = 8000;
const app = express();
const path = require("path")
const db = require("./config/db")
const cookieParser = require('cookie-parser');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded());


app.use(cookieParser());
app.use("/", require("./routes/Auth"))


app.listen(port, (err) => {
    if (err) {
        console.log("something is wrong", err)
    }
    console.log(`Server running at http://localhost:${port}`);
})