const express = require("express");

const authRoute = express.Router();

authRoute.get("/", (req, res) => {
    res.send("Hello, this is auth endpoint")
})

// export default router;
module.exports = { authRoute };