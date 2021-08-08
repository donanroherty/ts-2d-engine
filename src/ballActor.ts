import { Actor, createActor } from "./actor"
import { Scene } from "./scene"

function createBallActor(scene: Scene): Actor {
  const self: Actor = {
    ...createActor(scene),
  }

  self.setPosition({ x: 0, y: 0 })
  self.draw(makeBallSVG())

  function makeBallSVG() {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("fill", "lightblue")
    circle.setAttribute("stroke", "blue")
    circle.setAttribute("r", "30")
    return [circle]
  }

  return self
}

export { createBallActor }
