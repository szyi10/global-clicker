const counterElement = document.getElementById("counter")
const button = document.getElementById("button")

const socket = io()

// const name = prompt("What's your name?")
const name = "xd"
let localCounter

button.addEventListener("click", () => {
  socket.emit("button-click")
})

socket.on("connect", () => {
  socket.emit("new-user", name)
  socket.emit("join-game")
})

socket.on("current-state", (counter) => {
  counterElement.textContent = counter
})

socket.on("update-counter", (counter) => {
  console.log(counter)
  counterElement.textContent = counter
})
