import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Anna Caroline - Frontend Developer',
  description: 'Portfolio of Anna Caroline A. Banga - Frontend Developer, UI/UX Designer, and Data Analyst with expertise in React, Next.js, and modern web technologies',
  keywords: [     //seo keywords
    'frontend', 
    'developer', 
    'react', 
    'nextjs', 
    'typescript', 
    'portfolio', 
    'UI/UX', 
    'data analyst',
    'anna caroline',
    'web developer',
    'javascript',
    'teal design',
    'liquid glass',
    'GSAP animation',
    'spline 3D',
    'modern web design'
  ],
  authors: [{ name: 'Anna Caroline A. Banga' }],
  creator: 'Anna Caroline A. Banga',
  publisher: 'Anna Caroline A. Banga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {    //Social media preview
    title: 'Anna Caroline - Frontend Developer & UI/UX Designer',
    description: 'Discover my portfolio showcasing innovative web solutions, modern UI/UX designs, and data-driven applications. Specialized in React, Next.js, and contemporary web technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://anna-caroline.vercel.app',
    siteName: 'Anna Caroline Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anna Caroline - Frontend Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Caroline - Frontend Developer',
    description: 'Portfolio showcasing my work as a Frontend Developer and UI/UX Designer with modern web technologies',
    images: ['/og-image.jpg'],
    // creator: '@anna_caroline_dev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#335959',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Portfolio Website',
  verification: {
    google: 'your-google-site-verification-code',
    // Add other verification codes as needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#335959" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Anna Caroline" />
        <meta name="application-name" content="Anna Caroline Portfolio" />
        <meta name="msapplication-TileColor" content="#335959" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//unpkg.com" />
        <link rel="dns-prefetch" href="//prod.spline.design" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://anna-caroline.vercel.app" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en" href="https://anna-caroline.vercel.app" />
        <link rel="alternate" hrefLang="id" href="https://anna-caroline.vercel.app/id" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anna Caroline A. Banga",
              "alternateName": "Anna Caroline",
              "jobTitle": "Frontend Developer",
              "description": "Frontend Developer and UI/UX Designer specializing in React, Next.js, and modern web technologies",
              "url": "https://anna-caroline.vercel.app",
              "image": "https://anna-caroline.vercel.app/og-image.jpg",
              "sameAs": [
                "https://linkedin.com/in/anna-caroline",
                "https://github.com/anna-caroline",
                "https://instagram.com/anna_caroline_dev",
                "https://twitter.com/anna_caroline_dev"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "UI/UX Design",
                "Frontend Development",
                "Data Analysis",
                "GSAP Animation",
                "Tailwind CSS",
                "Node.js",
                "PostgreSQL"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Universitas AMIKOM Yogyakarta",
                "sameAs": "https://amikom.ac.id"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
              }
            })
          }}
        />

        {/* Additional structured data for portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Anna Caroline Portfolio",
              "description": "Professional portfolio showcasing frontend development and UI/UX design work",
              "url": "https://anna-caroline.vercel.app",
              "author": {
                "@type": "Person",
                "name": "Anna Caroline A. Banga"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://anna-caroline.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-dark text-white px-4 py-2 rounded-md z-50 focus-ring"
        >
          Skip to main content
        </a>

        {/* Spline Viewer Script with optimized loading */}
        <Script
          id="spline-viewer"
          src="https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js"
          strategy="beforeInteractive"
          type="module"
        />

        <div id="root" className="min-h-screen">
          <main id="main-content">
            {children}
          </main>
        </div>

        {/* Loading overlay for better UX */}
        <div id="loading-overlay" className="fixed inset-0 bg-slate-dark z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
          <div className="glass-card-teal p-8 rounded-2xl">
            <div className="animate-spin w-8 h-8 border-2 border-teal-light border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-teal-light text-center">Loading...</p>
          </div>
        </div>

        {/* Performance monitoring and error handling */}
        <Script id="performance-monitor" strategy="afterInteractive">
          {`
            // Performance monitoring and error handling
            if (typeof window !== 'undefined') {
              // Page load performance
              window.addEventListener('load', () => {
                // Hide loading overlay
                const loadingOverlay = document.getElementById('loading-overlay');
                if (loadingOverlay) {
                  loadingOverlay.style.opacity = '0';
                  setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                  }, 500);
                }

                // Performance metrics
                if ('performance' in window) {
                  // Navigation timing
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
                    const totalTime = perfData.loadEventEnd - perfData.fetchStart;
                    
                    console.log('Performance Metrics:', {
                      'Page Load Time': loadTime + 'ms',
                      'DOM Content Loaded': domContentLoaded + 'ms', 
                      'Total Load Time': totalTime + 'ms'
                    });
                  }

                  // Core Web Vitals
                  if ('PerformanceObserver' in window) {
                    // Largest Contentful Paint (LCP)
                    new PerformanceObserver((entryList) => {
                      const entries = entryList.getEntries();
                      const lastEntry = entries[entries.length - 1];
                      console.log('LCP:', lastEntry.startTime + 'ms');
                    }).observe({ entryTypes: ['largest-contentful-paint'] });

                    // First Input Delay (FID)
                    new PerformanceObserver((entryList) => {
                      for (const entry of entryList.getEntries()) {
                        console.log('FID:', entry.processingStart - entry.startTime + 'ms');
                      }
                    }).observe({ entryTypes: ['first-input'] });

                    // Cumulative Layout Shift (CLS)
                    let clsValue = 0;
                    new PerformanceObserver((entryList) => {
                      for (const entry of entryList.getEntries()) {
                        if (!entry.hadRecentInput) {
                          clsValue += entry.value;
                        }
                      }
                      console.log('CLS:', clsValue);
                    }).observe({ entryTypes: ['layout-shift'] });
                  }
                }
              });

              // Global error handling
              window.addEventListener('error', (e) => {
                console.error('Global error caught:', {
                  message: e.message,
                  filename: e.filename,
                  lineno: e.lineno,
                  colno: e.colno,
                  error: e.error
                });
              });

              // Unhandled promise rejections
              window.addEventListener('unhandledrejection', (e) => {
                console.error('Unhandled promise rejection:', e.reason);
              });

              // Resource loading errors
              window.addEventListener('error', (e) => {
                if (e.target !== window) {
                  console.error('Resource loading error:', {
                    element: e.target.tagName,
                    source: e.target.src || e.target.href,
                    message: 'Failed to load resource'
                  });
                }
              }, true);

              // Network connection monitoring
              if ('navigator' in window && 'connection' in navigator) {
                const connection = navigator.connection;
                console.log('Network info:', {
                  effectiveType: connection.effectiveType,
                  downlink: connection.downlink,
                  rtt: connection.rtt
                });

                connection.addEventListener('change', () => {
                  console.log('Network changed:', {
                    effectiveType: connection.effectiveType,
                    downlink: connection.downlink,
                    rtt: connection.rtt
                  });
                });
              }

              // Memory usage monitoring (if available)
              if ('memory' in performance) {
                const memory = performance.memory;
                console.log('Memory usage:', {
                  used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
                  total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
                  limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
                });
              }

              // Service Worker registration (if needed)
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  // Uncomment to register service worker
                  // navigator.serviceWorker.register('/sw.js');
                });
              }
            }
          `}
        </Script>

        {/* Analytics (add your tracking code here) */}
        <Script id="analytics" strategy="afterInteractive">
          {`
            // Add your analytics code here
            // Example: Google Analytics, Vercel Analytics, etc.
          `}
        </Script>
      </body>
    </html>
  )
}