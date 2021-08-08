import { SVGAttributes } from "react"
import { hyphenateCamelCase } from "./string-utils"

const ns = "http://www.w3.org/2000/svg"

/**
 * Utility function for creating a SVG element.
 * @param name {string} SVG element tag name as string
 * @param attrs {Object} Element attributes object
 * @returns SVG elementas  typeof name
 */
function makeSVGElement<K extends keyof SVGElementTagNameMap>(
  name: K,
  attrs?: SVGAttributes<SVGElementTagNameMap[K]>
): SVGElementTagNameMap[K] {
  const el = document.createElementNS<K>(ns, name)
  for (const key in attrs) {
    el.setAttribute(hyphenateCamelCase(key), (attrs as any)[key])
  }
  return el
}

export { makeSVGElement }
