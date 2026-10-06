const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app =express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({
        message: "portfolio Backend is running"
    });
});

app.use("/api/contact",contactRoutes);

module.exports = app;