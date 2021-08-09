import { Actor } from "./actor"

interface Scene {
  addActor(actor: Actor): void
  getStage(): SVGSVGElement
  tick?(deltaTime: number): void
}

function createScene(stageEl: SVGSVGElement): Scene {
  const stage = stageEl
  const actors = new Set<Actor>()

  function addActor(actor: Actor) {
    actors.add(actor)
    stageEl.appendChild(actor.getSVG())
  }

  function getStage() {
    return stage
  }

  function tick(deltaTime: number) {
    actors.forEach((actor) => {
      if (actor.tick) actor.tick(deltaTime)
    })
  }

  return {
    addActor,
    getStage,
    tick,
  }
}

export { createScene, Scene }
