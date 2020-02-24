const plugin = require('tailwindcss/plugin')
const Color = require('color')

// const COLOR_PRIMARY = '#41AA8B'
const COLOR_PRIMARY = '#48BB78'
const COLOR_SUCCESS = '#21CA21'
const COLOR_DANGER = '#dc3545'
const COLOR_WARNING = '#ffc107'
const COLOR_INFO = '#17a2b8'

const rgbval = rgb => `rgba(${rgb.color.join(',')},${rgb.valpha})`
const lighten = color =>
  rgbval(
    Color(color)
      .lighten(0.5)
      .fade(0.5)
      .rgb()
  )

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Nunito'],
        sans: [
          'Roboto',
          '"Helvetica Neue"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"'
        ]
        // '"Helvetica Neue", Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"        '
      },
      colors: {
        primary: {
          default: COLOR_PRIMARY,
          light: lighten(COLOR_PRIMARY),
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
          light: lighten(COLOR_SUCCESS),
          dark: Color(COLOR_SUCCESS)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_SUCCESS)
            .darken(0.65)
            .hex()
        },
        danger: {
          default: COLOR_DANGER,
          light: lighten(COLOR_DANGER),
          dark: Color(COLOR_DANGER)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_DANGER)
            .darken(0.65)
            .hex()
        },
        warning: {
          default: COLOR_WARNING,
          light: lighten(COLOR_WARNING),
          dark: Color(COLOR_WARNING)
            .darken(0.35)
            .hex(),
          darker: Color(COLOR_WARNING)
            .darken(0.65)
            .hex()
        },
        info: {
          default: COLOR_INFO,
          light: lighten(COLOR_INFO),
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
