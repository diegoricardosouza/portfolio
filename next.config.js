/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  images: {
    domains: ['media.graphassets.com']
  }
})
