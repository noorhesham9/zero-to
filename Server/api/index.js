const app = require("../app");
const mongoose = require("mongoose");

let cachedConn = null;

module.exports = async (req, res) => {
  try {
    if (!cachedConn) {
      await mongoose.connect(process.env.CONN_STR, {
        dbName:
          process.env.NODE_ENV === "production"
            ? "CircleEye_Production"
            : "CircleEye_Dev",
      });
      console.log("MongoDB connected in serverless");
      cachedConn = mongoose.connection;
    }

    app(req, res);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
