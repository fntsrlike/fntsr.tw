const getEnviroment = () => {
  return process.env.NODE_ENV
}

const isDevelopment = () => {
  return getEnviroment() === 'development'
}

const isProduction = () => {
  return getEnviroment() === 'production'
}

export {
  isProduction,
  isDevelopment,
  getEnviroment,
}
