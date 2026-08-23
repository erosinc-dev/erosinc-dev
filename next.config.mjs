/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // 1. Home / Legacy Root Aliases
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },

      // 2. Legacy Google Sites Subpaths (/view/eros-inc/*)
      {
        source: '/view/eros-inc',
        destination: '/',
        permanent: true,
      },
      {
        source: '/view/eros-inc/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/view/eros-inc/about-us',
        destination: '/philosophy',
        permanent: true,
      },
      {
        source: '/view/eros-inc/what-we-offer',
        destination: '/capabilities',
        permanent: true,
      },
      {
        source: '/view/eros-inc/career',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/view/eros-inc/careers',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/view/eros-inc/gallery',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/view/eros-inc/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/view/eros-inc/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/view/eros-inc/:path*',
        destination: '/',
        permanent: true,
      },

      // 3. About & Philosophy Aliases
      {
        source: '/about-us',
        destination: '/philosophy',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/philosophy',
        permanent: true,
      },
      {
        source: '/who-we-are',
        destination: '/philosophy',
        permanent: true,
      },

      // 4. Services / Capabilities Aliases
      {
        source: '/what-we-offer',
        destination: '/capabilities',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/capabilities',
        permanent: true,
      },
      {
        source: '/businesses',
        destination: '/capabilities',
        permanent: true,
      },

      // 5. Careers & Team Aliases
      {
        source: '/career',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/jobs',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/leadership',
        permanent: true,
      },
      {
        source: '/leadership-lab',
        destination: '/leadership',
        permanent: true,
      },

      // 6. Management Programme Aliases
      {
        source: '/management',
        destination: '/management-programme',
        permanent: true,
      },
      {
        source: '/program',
        destination: '/management-programme',
        permanent: true,
      },
      {
        source: '/programme',
        destination: '/management-programme',
        permanent: true,
      },
      {
        source: '/training',
        destination: '/management-programme',
        permanent: true,
      },

      // 7. Contact Aliases
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
