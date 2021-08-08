import { Scene } from "./scene"
import { Vec2 } from "./types"

interface Actor {
  getName(): string
  setName(val: string): void
  getPosition(): Vec2
  setPosition(pos: Vec2): void
  getSVG(): SVGElement
}

function createActor(scene: Scene): Actor {
  let name: string = "actor"
  let position: Vec2 = { x: 0, y: 0 }

  const svgRoot = document.createElementNS("http://www.w3.org/2000/svg", "g")
  svgRoot.setAttribute("name", name)
  svgRoot.setAttribute("transform", `translate(${position.x} ${position.y})`)

  function getSVG() {
    return svgRoot
  }

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
    svgRoot.setAttribute("transform", `translate(${position.x} ${position.y})`)
  }

  return {
    getName,
    setName,
    getPosition,
    setPosition,
    getSVG,
  }
}

export { createActor, Actor }
