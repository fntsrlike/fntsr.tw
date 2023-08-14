import { resolve } from 'path'

const genSource = (dirName = 'content', driver = 'fs') => {
  return {
    base: resolve(__dirname, dirName),
    driver,
  }
}

const gardenSrc = genSource('_write/content')

const sources: any = {}
sources.garden = gardenSrc

export default sources
