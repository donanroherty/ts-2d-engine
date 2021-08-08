import { createBallActor } from "./ballActor"
import { createScene } from "./scene"

interface Engine {}

function createEngine(stageEl: SVGSVGElement) {
  const engine: Engine = {}
  const scene = createScene(stageEl)

  scene.addActor(createBallActor(scene))

  return engine
}

export { createEngine }
