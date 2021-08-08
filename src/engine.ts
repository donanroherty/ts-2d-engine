import { createScene } from "./scene"

interface Engine {}

function createEngine(stageEl: SVGSVGElement) {
  const engine: Engine = {}
  const scene = createScene(stageEl)

  return engine
}

export { createEngine }
