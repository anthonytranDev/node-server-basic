const http = require("http")

const port = 3000
const payload = { message: "Hello World" }

const server = http
  .createServer((_, res) => {
    const { statusCode } = res

    res.writeHead(statusCode, {
      "Content-Type": "application/json; charset=utf-8",
    })
    res.end(JSON.stringify(payload))
  })
  .listen(port, "localhost", 0, console.log(`Listening on port ${port}`))

server
