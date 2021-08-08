import { Scene } from "./scene"
import { Vec2 } from "./types"

interface Actor {
  getName(): string
  setName(val: string): void
  getPosition(): Vec2
  setPosition(pos: Vec2): void
  getSVG(): SVGElement
  draw(elements: SVGElement[]): void
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

  function setPosition(pos: Vec2) {
    position = pos
    svgRoot.setAttribute("transform", `translate(${position.x} ${position.y})`)
  }

  function draw(elements: SVGElement[]) {
    while (svgRoot.firstChild) {
      svgRoot.firstChild.remove()
    }
    elements.forEach((el) => svgRoot.appendChild(el))
  }

  return {
    getName,
    setName,
    getPosition,
    setPosition,
    getSVG,
    draw,
  }
}

export { createActor, Actor }
