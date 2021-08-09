import { Vec2 as V2 } from "../types"

function vec2(x: number = 0, y: number = 0): V2 {
  return { x, y }
}

function add(...args: V2[]) {
  return args.reduce((acc, v, i) => {
    if (i === 0) return v
    return vec2(acc.x + v.x, acc.y + v.y)
  }, vec2())
}

function sub(...args: V2[]) {
  return args.reduce((acc, v, i) => {
    if (i === 0) return v
    return vec2(acc.x - v.x, acc.y - v.y)
  }, vec2())
}

function mul(...args: V2[]) {
  return args.reduce((acc, v, i) => {
    if (i === 0) return v
    return vec2(acc.x * v.x, acc.y * v.y)
  }, vec2())
}

function div(...args: V2[]) {
  return args.reduce((acc, v, i) => {
    if (i === 0) return v
    return vec2(acc.x / v.x, acc.y / v.y)
  }, vec2())
}

function scale(vec: V2, scalar: number) {
  return vec2(vec.x * scalar, vec.y * scalar)
}

function isEqual(a: V2, b: V2, tol = 0.000001) {
  return Math.abs(a.x - b.x) < tol && Math.abs(a.y - b.y) < tol
}

function dot(v1: V2, v2: V2) {
  return v1.x * v2.x + v1.y * v2.y
}

function cross(v1: V2, v2: V2) {
  return v1.x * v2.y - v1.y * v2.x
}

function perpCW(v: V2) {
  return vec2(v.y, -v.x)
}

function perpCCW(v: V2) {
  return vec2(-v.y, v.x)
}

function mag(v: V2) {
  return v.x * v.x + v.y * v.y
}

function len(v: V2) {
  return Math.sqrt(mag(v))
}

function norm(v: V2, tol = 1e-8) {
  const l = len(v)
  if (l > tol) {
    return vec2(v.x / l, v.y / l)
  }
  return vec2()
}

function angle(v: V2) {
  const dir = norm(v)
  const ang = Math.atan2(dir.x, dir.y)
  const adj = ang < 0 ? ang + Math.PI * 2 : ang
  return adj
}

function reflect(v: V2, refN: V2) {
  return sub(v, scale(refN, dot(refN, v) * 2))
}

function lerp(v: V2, to: V2, t: number) {
  const diff = sub(to, v)
  return add(v, scale(diff, t))
}

export {
  vec2,
  add,
  sub,
  mul,
  div,
  scale,
  isEqual,
  dot,
  cross,
  perpCCW,
  perpCW,
  mag,
  len,
  norm,
  angle,
  reflect,
  lerp,
}
