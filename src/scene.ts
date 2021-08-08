import { Actor } from "./actor"

interface Scene {
  addActor(actor: Actor): void
  getStage(): SVGSVGElement
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

  return {
    addActor,
    getStage,
  }
}

export { createScene, Scene }
