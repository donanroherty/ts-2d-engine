import { Actor, createActor } from "./actor"
import { makeSVGElement } from "./lib/svg"
import { Scene } from "./scene"

function createBallActor(scene: Scene): Actor {
  const self: Actor = {
    ...createActor(scene),
  }

  self.setPosition({ x: 0, y: 0 })
  self.draw(makeBallSVG())

  function makeBallSVG() {
    const c = makeSVGElement("circle", { fill: "lightblue", stroke: "blue", r: 30 })
    return [c]
  }

  return self
}

export { createBallActor }
