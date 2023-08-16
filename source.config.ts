import { resolve } from 'path'

const genSource = (dirName = 'content', driver = 'fs') => {
  return {
    base: resolve(__dirname, dirName),
    driver,
  }
}

const devSrc = genSource('_write/content-dev')
const pagesSrc = genSource('_write/content')
const gardenSrc = genSource('_write/content-garden')
const legacySrc = genSource('_write/content-legacy')

const sources: any = {}
sources.garden = gardenSrc // basic content
sources.pages = pagesSrc // page's content

// To experience
if (process.env.NODE_ENV === 'development') {
  sources.zDev = devSrc
}

// Increase dev performance to avoid load lots of content
if (process.env.NODE_ENV === 'production') {
  sources.legacies = legacySrc
}

export default sources
