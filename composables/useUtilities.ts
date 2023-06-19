const getEnv = () => {
  return process.env.NODE_ENV
}

const isDevelopment = () => {
  return getEnv() === 'development'
}

const isProduction = () => {
  return getEnv() === 'production'
}

export const useUtilities = () => ({
  isProduction,
  isDevelopment,
  getEnv,
})
