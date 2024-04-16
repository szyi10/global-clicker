const express = require("express")
const app = express()

const PORT = process.env.PORT || 5500
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

let counter = 0

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    console.log("helo", name)
  })

  socket.on("join-game", () => {
    socket.emit("current-state", counter)
  })

  socket.on("button-click", () => {
    counter++

    io.emit("update-counter", counter)
  })
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
