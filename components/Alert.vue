<template>
  <div
    class="py-4 px-8 rounded font-bold flex justify-between items-center"
    :class="classes"
    v-if="visible"
  >
    <div><slot></slot></div>
    <div class="cursor-pointer text-xl" @click="visible = false">&times;</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    classes() {
      const classMap = {
        'bg-gray-200': this.type === 'default',
        'bg-primary-alt': this.type === 'primary',
        'bg-success-alt': this.type === 'success',
        'bg-warning-alt': this.type === 'warning',
        'bg-danger-alt': this.type === 'danger',
        'bg-info-alt': this.type === 'info',
        'text-gray-700': this.type === 'default',
        'text-primary-dark': this.type === 'primary',
        'text-success-dark': this.type === 'success',
        'text-warning-dark': this.type === 'warning',
        'text-danger-dark': this.type === 'danger',
        'text-info-dark': this.type === 'info',
        [this.type]: true
      }
      return classMap
    }
  }
}
</script>

<style scoped>
.default a {
  @apply text-gray-900;
}
.primary a {
  @apply text-primary-darker;
}
.success a {
  @apply text-success-darker;
}
.warning a {
  @apply text-warning-darker;
}
.danger a {
  @apply text-danger-darker;
}
.info a {
  @apply text-info-darker;
}
a:hover {
  @apply underline;
}
</style>
