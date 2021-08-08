import { createActor } from "./actor"
import { createScene } from "./scene"

interface Engine {}

function createEngine(stageEl: SVGSVGElement) {
  const engine: Engine = {}
  const scene = createScene(stageEl)

  scene.addActor(createActor(scene))

  return engine
}

export { createEngine }
