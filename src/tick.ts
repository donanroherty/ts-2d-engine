interface Tick {
  start(cb: (deltaTime: number) => void): void
}

function createTick(): Tick {
  function start(cb: (deltaTime: number) => void) {
    window.requestAnimationFrame(doTick)

    let lastT = 0

    function doTick(t: number) {
      const dt = (t - lastT) * 0.001
      cb(dt)
      lastT = t
      window.requestAnimationFrame(doTick)
    }
  }

  return { start }
}

export { createTick, Tick }
