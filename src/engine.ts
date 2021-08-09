import { createBallActor } from "./ballActor"
import { createScene } from "./scene"
import { createTick } from "./tick"

interface Engine {}

function createEngine(stageEl: SVGSVGElement) {
  const engine: Engine = {}
  const scene = createScene(stageEl)
  const tick = createTick()

  tick.start((dt) => {
    if (scene.tick) scene.tick(dt)
  })

  scene.addActor(createBallActor(scene))

  return engine
}

export { createEngine }
