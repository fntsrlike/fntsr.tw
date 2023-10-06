import { kebabCase as lodashKebabCase} from 'lodash-es'

const kebabCase = (str: string) => lodashKebabCase(str)

export {
  kebabCase
}
