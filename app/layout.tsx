import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import PageThemeWrapper from "@/components/PageThemeWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://erosinc.in'),
  title: {
    default: "Eros Inc. | Building Buzz. Scaling Brands. Compete With Compassion",
    template: "%s | Eros Inc."
  },
  description: "Eros Inc. creates visibility, builds buzz, and scales enterprise brands across Film Promotions, Celebrity PR, Google 360° VR, Financial Services & B2B Commercial Sales.",
  keywords: [
    "Eros Inc",
    "Building Buzz Scaling Brands",
    "Film Promotion & Celebrity PR",
    "Celebrity PR Agency India",
    "Movie Launch Campaigns",
    "Bollywood PR Agency",
    "Press & Media Relations",
    "Google 360 Publishing",
    "Financial Services Distribution",
    "B2B Commercial Sales",
    "Omnichannel Sales Execution",
    "Thane West Marketing Agency",
    "Eros Inc Thane"
  ],
  authors: [{ name: "Eros Inc.", url: "https://erosinc.in" }],
  creator: "Eros Inc.",
  publisher: "Eros Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://erosinc.in',
    languages: {
      'en-IN': 'https://erosinc.in',
      'en-US': 'https://erosinc.in',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-token',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://erosinc.in',
    siteName: 'Eros Inc.',
    title: 'Eros Inc. | Building Buzz. Scaling Brands. Compete With Compassion',
    description: 'Creating high-impact visibility and scaling brand partnerships across Film Promotions, Celebrity PR, Google 360°, Banking & B2B Sales.',
    images: [
      {
        url: '/film/celeb_11.jpg',
        width: 1200,
        height: 630,
        alt: 'Eros Inc - Building Buzz. Scaling Brands. Bollywood & Enterprise PR.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eros Inc. | Building Buzz. Scaling Brands. Compete With Compassion',
    description: 'Creating high-impact visibility and scaling brand partnerships across Film Promotions, Celebrity PR, Google 360°, Banking & B2B Sales.',
    images: ['/film/celeb_11.jpg'],
    creator: '@erosinc_in',
    site: '@erosinc_in',
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/apple-icon.png"
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://erosinc.in/#organization',
      name: 'Eros Inc.',
      url: 'https://erosinc.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://erosinc.in/logo.png',
        caption: 'Eros Inc. Logo'
      },
      image: 'https://erosinc.in/film/celeb_11.jpg',
      description: 'Eros Inc. creates visibility, builds buzz, and scales brands across Film Promotion & Celebrity PR, Google 360° Publishing, Financial Services Distribution, and B2B Commercial Sales.',
      email: 'contact@erosinc.in',
      telephone: '+91 93244 83283',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, 227-228, Wardhaman Industrial Estate, Gokul Nagar',
        addressLocality: 'Thane West',
        addressRegion: 'Maharashtra',
        postalCode: '400601',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/erosinc_in/',
        'https://www.linkedin.com/company/erosinc/',
        'https://www.facebook.com/share/gBQTSder7UXx9oec/',
        'https://x.com/erosinc_in',
        'https://wa.me/9324483283',
        'https://github.com/erosinc-dev/erosinc-dev'
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://erosinc.in/#localbusiness',
      name: 'Eros Inc.',
      url: 'https://erosinc.in',
      telephone: '+91 93244 83283',
      email: 'contact@erosinc.in',
      priceRange: '₹₹₹',
      image: 'https://erosinc.in/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, 227-228, Wardhaman Industrial Estate, Gokul Nagar',
        addressLocality: 'Thane West',
        addressRegion: 'Maharashtra',
        postalCode: '400601',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.2015,
        longitude: 72.9781,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '18:30'
        }
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'Film Promotion & Celebrity PR' },
        { '@type': 'Offer', name: 'Google 360° VR Property Publishing' },
        { '@type': 'Offer', name: 'Financial Services Distribution' },
        { '@type': 'Offer', name: 'B2B Commercial Sales Acceleration' },
        { '@type': 'Offer', name: 'Practical Management Programme' }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://erosinc.in/#website',
      url: 'https://erosinc.in',
      name: 'Eros Inc.',
      description: 'Building Buzz. Scaling Brands. Compete With Compassion.',
      publisher: {
        '@id': 'https://erosinc.in/#organization'
      },
      inLanguage: 'en-US'
    }
  ]
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
        
        {/* Google SiteKit / Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}

        {/* Google Analytics 4 (GA4) if Measurement ID is set */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Structured Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-eros-bg text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-eros-cyan selection:text-white pt-28 md:pt-32 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <PageThemeWrapper>
            <Header />
            {children}
            <Footer />
            <CookieConsent />
          </PageThemeWrapper>
          
          {/* WhatsApp Floater */}
          <a
            href="https://api.whatsapp.com/send/?phone=+919324483283&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
