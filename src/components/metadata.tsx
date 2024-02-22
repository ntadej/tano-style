import { Metadata } from 'next'

export const siteName = process.env.SITE_NAME ? process.env.SITE_NAME : 'Tano.si'
export const siteColor = process.env.SITE_COLOR ? process.env.SITE_COLOR : '#DE2A4A'

export const rootMetadata: Metadata = {
  title: siteName,
  manifest: '/manifest.json',
  icons: [
    {
      url: '/favicon/apple_76.png',
      rel: 'apple-touch-icon',
      sizes: '76x76',
    },
    {
      url: '/favicon/apple_60@2x.png',
      rel: 'apple-touch-icon',
      sizes: '120x120',
    },
    {
      url: '/favicon/apple_76@2x.png',
      rel: 'apple-touch-icon',
      sizes: '152x152',
    },
    {
      url: '/favicon/apple_83.5@2x.png',
      rel: 'apple-touch-icon',
      sizes: '167x167',
    },
    {
      url: '/favicon/apple_60@3x.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
    {
      url: '/favicon/32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/favicon/192.png',
      rel: 'shortcut icon',
      sizes: '192x192',
    },
    {
      url: '/favicon/16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      url: '/favicon/apple.svg',
      rel: 'mask-icon',
      // @ts-ignore
      color: siteColor,
    },
  ],
}
