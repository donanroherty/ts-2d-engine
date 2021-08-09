import { Actor, createActor } from "./actor"
import { makeSVGElement } from "./lib/svg"
import { add, mul, norm, scale, sub, vec2 } from "./lib/vec2"
import { Scene } from "./scene"
import { Vec2 } from "./types"

interface BallActor extends Actor {
  getVelocity(): Vec2
  setVelocity(val: Vec2): void
}

const GRAVITY: Vec2 = { x: 0, y: -9.8 }
const AIR_FRICTION = 0.003

function createBallActor(scene: Scene): BallActor {
  const radius = 30
  const speed = 1000
  const dir = norm(vec2(Math.random() - 0.5, Math.random() - 0.5))
  let velocity: Vec2 = scale(dir, speed)

  const self: BallActor = {
    ...createActor(scene),
    tick,
    getVelocity,
    setVelocity,
  }

  self.draw(makeBallSVG())

  function tick(deltaTime: number) {
    let newVel = getVelocity()
    newVel = add(newVel, GRAVITY)
    newVel = sub(newVel, scale(newVel, AIR_FRICTION))

    let newPos = add(self.getPosition(), scale(newVel, deltaTime))

    const bb = {
      left: newPos.x - radius,
      top: newPos.y + radius,
      right: newPos.x + radius,
      bottom: newPos.y - radius,
    }

    const { x, y, width, height } = scene.getStage().viewBox.baseVal
    const vbBB = { left: x, top: y + height, right: x + width, bottom: y }

    // handle collisions with sides of viewbox
    if (bb.left < vbBB.left) {
      newPos = vec2(vbBB.left + radius, newPos.y)
      newVel = mul(newVel, vec2(-1, 1))
    }
    if (bb.top > vbBB.top) {
      newPos = vec2(newPos.x, vbBB.top - radius)
      newVel = mul(newVel, vec2(1, -1))
    }
    if (bb.right > vbBB.right) {
      newPos = vec2(vbBB.right - radius, newPos.y)
      newVel = mul(newVel, vec2(-1, 1))
    }
    if (bb.bottom < vbBB.bottom) {
      newPos = vec2(newPos.x, vbBB.bottom + radius)
      newVel = mul(newVel, vec2(1, -1))
    }

    velocity = newVel
    self.setPosition(newPos)
  }

  function makeBallSVG() {
    const c = makeSVGElement("circle", { fill: "lightblue", stroke: "blue", r: radius })
    return [c]
  }

  function setVelocity(val: Vec2) {
    velocity = val
  }

  function getVelocity() {
    return velocity
  }

  return self
}

export { createBallActor }
