const { createServer } = require("http");
const app = require("../app");

module.exports = (req, res) => {
  const server = createServer(app);
  server.emit("request", req, res);
};
