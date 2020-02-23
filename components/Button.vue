<template>
    <p>
      <button
        class="m-1 disabled:opacity-50 disabled:cursor-auto button rounded-lg font-display font-bold text-white focus:outline-none"
        :class="classes"
        :disabled="isDisabled"
      >
        <slot></slot>
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      default: true
    },
    danger: {
      default: false
    },
    small: {
      default: false
    },
    medium: {
      default: true
    },
    large: {
      default: false
    },
    disabled: {
      default: false
    },
    outlined: {
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled !== false
    },
    isOutlined() {
      return this.outlined !== false
    },
    isDanger() {
      return this.danger !== false
    },
    isPrimary() {
      return this.color === 'primary'
    },
    size() {
      if (this.small !== false) {
        return 'small'
      }
      if (this.large !== false) {
        return 'large'
      }
      return 'medium'
    },

    color() {
      if (this.danger !== false) {
        return 'danger'
      }

      return 'primary'
    },

    classes() {

      const primaryClasses = {
        'bg-primary': this.isPrimary && !this.isOutlined,
        'bg-white text-primary border border-primary': this.isPrimary && this.isOutlined,
        'hover:bg-primary-light hover:border-transparent': this.isPrimary && this.isOutlined,
        'hover:bg-primary-dark': !this.isDisabled && this.isPrimary && !this.isOutlined,
      }

      const dangerClasses = {
        'bg-danger': this.danger !== false && !this.isOutlined,
        'bg-white text-danger border border-danger': this.isDanger && this.isOutlined,
        'hover:bg-danger-light hover:border-transparent': this.isDanger && this.isOutlined,
        'hover:bg-danger-dark': !this.isDisabled && this.isDanger && !this.isOutlined,
      }

      let classes = {
        'bg-transparent': this.isOutlined,

        'button-default': this.size === 'medium',
        'py-2': this.size === 'medium',
        'px-6': this.size === 'medium',
        'text-xl': this.size === 'medium',
        'text-white': this.size === 'medium',

        'button-small': this.size === 'small',
        'py-1': this.size === 'small',
        'px-3': this.size === 'small',
        'text-md': this.size === 'small',
        'text-white': this.size === 'small',

        'button-large': this.size === 'large',
        'py-4': this.size === 'large',
        'px-12': this.size === 'large',
        'text-2xl': this.size === 'large',
        'text-white': this.size === 'large',






      }

      if (this.color === 'primary') {
        return {...classes, ...primaryClasses}
      }

      if (this.color === 'danger') {
        return {...classes, ...dangerClasses}
      }

      return classes
    }
  }
}
</script>

<style scoped>
.button {
  transition: all 175ms ease-in-out;
}
</style>
