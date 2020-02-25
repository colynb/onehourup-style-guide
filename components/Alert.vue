<template>
  <div
    class="v-alert py-4 px-8 rounded font-bold flex justify-between items-center"
    :class="classes"
    v-if="!remove"
  >
    <div><slot></slot></div>
    <div v-if="dismissable" class="cursor-pointer text-xl" @click="hide">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      remove: false,
      visible: true
    }
  },
  methods: {
    hide() {
      this.visible = false
      setTimeout(() => {
        this.remove = true
      }, 250)
    }
  },
  computed: {
    classes() {
      const classMap = {
        'bg-gray-200': this.type === 'default',
        'bg-primary-light': this.type === 'primary',
        'bg-success-light': this.type === 'success',
        'bg-warning-light': this.type === 'warning',
        'bg-danger-light': this.type === 'danger',
        'bg-info-light': this.type === 'info',
        'text-gray-700': this.type === 'default',
        'text-primary-dark': this.type === 'primary',
        'text-success-dark': this.type === 'success',
        'text-warning-dark': this.type === 'warning',
        'text-danger-dark': this.type === 'danger',
        'text-info-dark': this.type === 'info',
        'opacity-0': !this.visible,
        [this.type]: true
      }
      return classMap
    }
  }
}
</script>

<style scoped>
.v-alert {
  transition: all 250ms ease-in-out;
}
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
