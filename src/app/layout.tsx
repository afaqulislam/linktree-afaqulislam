import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'

import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import { env } from '@/env'

import grid from './grid.svg'

type LayoutProps = {
  children: React.ReactNode
}

const MY_NAME = 'Afaq Ul Islam'
const SITE_URL = env.NEXT_PUBLIC_SITE_URL
const SITE_TITLE = `Linktree | ${MY_NAME}`
const SITE_DESCRIPTION =
  'Full-Stack & AI Engineer | Co-Founder & COO, Neofyx | Building SaaS Products with Next.js, React, TypeScript & FastAPI'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  creator: 'afaqulislam',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  authors: {
    name: MY_NAME,
    url: 'https://afaqulislam.vercel.app'
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    type: 'website',
    locale: 'en-US',
    images: [
      {
        url: '/afaqulislam.png',
        width: 600,
        height: 600,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@afaqulislam708'
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/afaqulislam.png',
        sizes: 'any'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/afaqulislam.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/afaqulislam.png',
        sizes: '16x16'
      }
    ],
    apple: [
      {
        type: 'image/png',
        url: '/afaqulislam.png',
        sizes: '180x180'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={GeistSans.className}>
      <body className='relative bg-[#020202] text-white'>
        <div
          className='absolute inset-0 -z-20 size-full'
          style={{
            backgroundImage: `url(${grid.src})`
          }}
        />
        <div
          className='absolute inset-0 -z-10 size-full'
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className='relative min-h-screen overflow-x-hidden'>
          <main className='relative mx-auto max-w-lg px-4'>{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
