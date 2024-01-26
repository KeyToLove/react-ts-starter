export const getBaseUrl = (): string => {
  const envPrefix = process.env.BASE_ENV ? `${process.env.BASE_ENV}-` : ''
  return `https://${envPrefix}example.com`
}
