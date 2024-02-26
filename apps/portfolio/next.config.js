//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {  withNx } = require('@nx/next')
const { createContentlayerPlugin } = require('next-contentlayer');
const { Config } = require('next-recompose-plugins');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },

  webpack: (config) => {
    // Add a new rule for SVG files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

const withContentlayer = createContentlayerPlugin({
  configPath: "apps/portfolio/contentlayer.config.ts"
})

module.exports = new Config(withNx(nextConfig))
  .applyPlugin((_phase, _args, config) => {
    return withContentlayer(config);
  })
  .build()
