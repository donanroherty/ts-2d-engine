import { createEngine } from "./engine"

const stageEl = document.getElementById("stage") as unknown as SVGSVGElement

const engine = createEngine(stageEl)
