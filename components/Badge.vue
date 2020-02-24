<template>
  <div
    class="inline whitespace-no-wrap rounded-full py-1 px-3 m-1 font-display font-bold text-sm text-white"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: 'default'
    }
  },
  computed: {
    classes() {
      const classMap = {
        'bg-gray-200': this.color === 'default',
        'bg-primary': this.color === 'primary',
        'bg-primary-dark': this.color === 'primary-dark',
        'bg-success': this.color === 'success',
        'bg-warning': this.color === 'warning',
        'bg-danger': this.color === 'danger',
        'bg-info': this.color === 'info',
        'text-gray-700': this.color === 'default'
      }
      return classMap
    }
  }
}
</script>
