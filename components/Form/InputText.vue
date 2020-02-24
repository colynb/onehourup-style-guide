<template>
    <div :class="{'text-red-500': error !== false}">
      <label v-if="label">{{label}}</label>
      <input
        :type="type"
        class="appearance-none border w-full text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
        :class="classes"
        v-bind="$attrs"
      />
      <label v-if="error" class="text-sm">{{error}}</label>
      <fragment v-else><label v-if="hint" class="text-sm text-gray-500">{{hint}}</label></fragment>
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
        'border-gray-300': this.error === false,
        'border-red-500 text-red-500': this.error !== false,
      }
    }
  }
}
</script>
