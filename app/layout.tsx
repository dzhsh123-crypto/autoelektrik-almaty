import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://avtoelektrik-almaty.kz'
const PHONE = '+77771234567'
const WHATSAPP = '77771234567'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Автоэлектрик Алматы — Выезд 24/7 | Диагностика и ремонт',
    template: '%s | Автоэлектрик Алматы',
  },
  description:
    'Профессиональный автоэлектрик с выездом по Алматы. Компьютерная диагностика, ремонт стартера и генератора, замена аккумулятора, прикурить авто. Выезд за 30 минут, работа с гарантией.',
  keywords: [
    'автоэлектрик алматы',
    'автоэлектрик на выезд алматы',
    'компьютерная диагностика алматы',
    'ремонт генератора алматы',
    'ремонт стартера алматы',
    'прикурить авто алматы',
    'замена аккумулятора алматы',
    'не заводится авто алматы',
    'диагностика авто алматы',
    'выездной автоэлектрик',
  ],
  authors: [{ name: 'Автоэлектрик Алматы' }],
  creator: 'Автоэлектрик Алматы',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: SITE_URL,
    siteName: 'Автоэлектрик Алматы',
    title: 'Автоэлектрик Алматы — Выезд 24/7 | Диагностика и ремонт',
    description:
      'Профессиональный автоэлектрик с выездом по Алматы. Компьютерная диагностика, ремонт стартера и генератора. Выезд за 30 минут.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Автоэлектрик Алматы с выездом',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Автоэлектрик Алматы — Выезд 24/7',
    description: 'Профессиональный автоэлектрик с выездом. Диагностика, ремонт стартера, генератора.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Автоэлектрик Алматы',
      description:
        'Профессиональный выездной автоэлектрик в Алматы. Компьютерная диагностика, ремонт стартера и генератора, замена аккумулятора, электропроводка.',
      url: SITE_URL,
      telephone: PHONE,
      priceRange: '₸₸',
      image: `${SITE_URL}/og-image.jpg`,
      areaServed: {
        '@type': 'City',
        name: 'Алматы',
        '@id': 'https://www.wikidata.org/wiki/Q3826',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Алматы',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.238949,
        longitude: 76.889709,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [`https://wa.me/${WHATSAPP}`],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '184',
        bestRating: '5',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Автоэлектрик Алматы',
      inLanguage: 'ru',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
