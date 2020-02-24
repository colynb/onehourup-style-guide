<template>
  <textarea
    class="appearance-none border border-gray-300 rounded w-full text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
    :class="classes"
  />
</template>

<script>
export default {
  props: {
    small: {
      default: false
    },
    standard: {
      default: true
    },
    large: {
      default: false
    }
  },
  computed: {
    size() {
      if (this.small !== false) {
        return 'small'
      }
      if (this.large !== false) {
        return 'large'
      }
      return 'standard'
    },
    classes() {
      return {
        'py-2 px-3 text-sm': this.size === 'small',
        'py-3 px-4 text-lg': this.size === 'standard',
        'py-4 px-5 text-xl': this.size === 'large'
      }
    }
  }
}
</script>
