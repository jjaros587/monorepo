//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { createContentlayerPlugin } = require('next-contentlayer');
const { Config } = require('next-recompose-plugins');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  // reactStrictMode: true,
  // swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

const withContentlayer = createContentlayerPlugin({
  configPath: "apps/travel-blog-frontend/contentlayer.config.ts"
})

module.exports = new Config(nextConfig)
  .applyPlugin((_phase, _args, config) => {
    return withNx(config);
  })
  .applyPlugin((_phase, _args, config) => {
    return withContentlayer(config);
  })
  .build()

// module.exports = withNx(withContentlayer({
//   ...nextConfig,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: [
//         {
//           loader: '@svgr/webpack',
//         },
//       ],
//     });

//     return config;
//   },
// }));
