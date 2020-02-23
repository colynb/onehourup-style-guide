const plugin = require('tailwindcss/plugin')
const Color = require('color')

// const COLOR_PRIMARY = '#41AA8B'
const COLOR_PRIMARY = '#48BB78'
const COLOR_SUCCESS = '#21CA21'
const COLOR_DANGER = '#dc3545'
const COLOR_WARNING = '#ffc107'
const COLOR_INFO = '#17a2b8'

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
          default: COLOR_PRIMARY,
          light: Color(COLOR_PRIMARY)
            .lighten(0.75)
            .hex(),
          dark: Color(COLOR_PRIMARY)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_PRIMARY)
            .darken(0.65)
            .desaturate(0.5)
            .hex()
        },
        success: {
          default: COLOR_SUCCESS,
          light: Color(COLOR_SUCCESS)
            .lighten(0.75)
            .hex(),
          dark: Color(COLOR_SUCCESS)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_SUCCESS)
            .darken(0.65)
            .hex()
        },
        danger: {
          default: COLOR_DANGER,
          light: Color(COLOR_DANGER)
            .lighten(0.75)
            .hex(),
          dark: Color(COLOR_DANGER)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_DANGER)
            .darken(0.65)
            .hex()
        },
        warning: {
          default: COLOR_WARNING,
          light: Color(COLOR_WARNING)
            .lighten(0.75)
            .hex(),
          dark: Color(COLOR_WARNING)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_WARNING)
            .darken(0.65)
            .hex()
        },
        info: {
          default: COLOR_INFO,
          light: Color(COLOR_INFO)
            .lighten(0.75)
            .hex(),
          dark: Color(COLOR_INFO)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_INFO)
            .darken(0.65)
            .hex()
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
