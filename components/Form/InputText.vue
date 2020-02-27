<template>
    <div :class="{'text-danger': error !== false, 'text-success': success !== false}">
      <label v-if="label" class="block text-gray-700 text-sm font-bold mb-2">{{label}}</label>
      <input
        :type="type"
        class="appearance-none border border-gray-300 w-full text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
        :class="classes"
        v-bind="$attrs"
      />
      <label v-if="error" class="block text-danger text-xs italic mt-3">{{error}}</label>
      <fragment v-else><label v-if="hint" class="block text-gray-500 text-xs italic mt-3">{{hint}}</label></fragment>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    label: {
      default: null
    },
    hint: {
      default: null
    },
    small: {
      default: false
    },
    standard: {
      default: true
    },
    large: {
      default: false
    },
    error: {
      default: false
    },
    success: {
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
        'py-2 px-3 text-sm rounded': this.size === 'small',
        'py-3 px-4 text-lg rounded-md': this.size === 'standard',
        'py-4 px-5 text-xl rounded-lg': this.size === 'large',
        'border-gray-300': this.error === false || this.success === false,
        'border-danger focus:border-danger text-danger': this.error !== false,
        'border-success focus:border-success text-success': this.success !== false,
      }
    }
  }
}
</script>
