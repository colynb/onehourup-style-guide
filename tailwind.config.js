const plugin = require('tailwindcss/plugin')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Nunito']
      },
      colors: {
        primary: {
          default: '#009b72',
          alt: 'rgba(0,155,114,.1)',
          dark: '#046865',
          darker: '#192d35',
          'dark-alt': 'rgba(4,104,101,.1)',
          'darker-alt': 'rgba(25,45,53,.1)'
        },
        success: {
          default: '#009b2a',
          alt: 'rgba(0,155,16,.1)',
          dark: '#009b32',
          darker: '#026322'
        },
        warning: {
          default: '#ffc107',
          alt: 'rgba(255,193,7,.1)',
          dark: '#d09e08',
          darker: '#926f04'
        },
        danger: {
          default: '#dc3545',
          alt: 'rgba(220,53,69,.1)',
          dark: '#b62735',
          darker: '#430f14'
        },
        info: {
          default: '#17a2b8',
          alt: 'rgba(23,162,184,.1)',
          dark: '#17a2b8',
          darker: '#0f6978'
        }
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled']
  },
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        code: { color: '#e83e8c' }
      })
    })
  ]
}
