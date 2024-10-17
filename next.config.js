module.exports = {
    async headers() {
      return [
        {
          // Support for wildcard subdomains
          source: '/:path*',
          headers: [
            {
              key: 'x-nextjs-cache',
              value: 'true',
            },
          ],
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/src/app/index',
        },
        {
          source: '/:slug*',
          destination: '/src/app/[[...slug]]',
        },
      ];
    },
  };
  