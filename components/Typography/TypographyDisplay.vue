<template>
  <component :is="as" :class="classes"><slot></slot></component>
</template>
<script>
export default {
  props: {
    as: { default: 'div' },
    size: { default: '5' }
  },
  computed: {
    classes() {
      let classSize = 'text-2xl'
      switch (this.size) {
        case '1':
          classSize = 'text-6xl'
          break
        case '2':
          classSize = 'text-5xl'
          break
        case '3':
          classSize = 'text-4xl'
          break
        case '4':
          classSize = 'text-3xl'
          break
        case '5':
          classSize = 'text-2xl'
          break
      }
      return {
        'font-display': true,
        'font-bold': true,
        [classSize]: true
      }
    }
  }
}
</script>
