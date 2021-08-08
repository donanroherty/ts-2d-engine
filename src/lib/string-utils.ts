function hyphenateCamelCase(val: string) {
  return hyphenate(splitCaps(val)).toLowerCase()
}

/** Converts an array of words to to a hyphenated string */
function hyphenate(words: string[]) {
  return words.reduce((acc, word) => {
    return acc.length > 0 ? `${acc}-${word}` : word
  }, "")
}

/** Splits a camel-case string into an array of lower case words */
function splitCaps(str: string) {
  const words = Array.from(str).reduce(
    (acc: string[], letter, i, arr) => {
      if (isUpper(letter)) {
        return [...acc, letter]
      }
      const last = `${acc[acc.length - 1]}${letter}`
      acc[acc.length - 1] = last
      return acc
    },
    [""]
  )

  return words
}

/** Returns true if a character is uppercase */
function isUpper(char: string) {
  return char >= "A" && char <= "Z"
}

export { hyphenate, splitCaps, isUpper, hyphenateCamelCase }
