import { Vec2 } from "./types"

interface Actor {
  getName(): string
  setName(val: string): void
  getPosition(): Vec2
  setPosition(pos: Vec2): void
}

function createActor(): Actor {
  let name: string = "actor"
  let position: Vec2 = { x: 0, y: 0 }

  function getName() {
    return name
  }

  function setName(val: string) {
    name = val
  }

  function getPosition() {
    return position
  }

  function setPosition(val: Vec2) {
    position = val
  }

  return {
    getName,
    setName,
    getPosition,
    setPosition,
  }
}

export { createActor, Actor }
