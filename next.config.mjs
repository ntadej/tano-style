export const reactStrictMode = true
export const trailingSlash = false
export const env = {
  SITE_NAME: process.env.SITE_NAME,
  SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
}
export const sassOptions = {
  additionalData: `$brand-primary: ${process.env.SITE_COLOR_PRIMARY}\n$brand-secondary: ${process.env.SITE_COLOR_SECONDARY}`,
}
