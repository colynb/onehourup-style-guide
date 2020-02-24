<template>
  <fragment>
    <button
      class="hover:no-underline whitespace-no-wrap m-1 disabled:opacity-50 disabled:cursor-auto button rounded-lg font-display font-bold text-white focus:outline-none"
      :class="classes"
      :disabled="isDisabled"
      :is="as"
      :to="to ? to : undefined"
      :href="href ? href : undefined"
      v-bind="$attrs"
    >
      <slot></slot>
    </button>
  </fragment>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    primary: {
      default: true
    },
    dark: {
      default: false
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
    },
    pill: {
      default: false
    }
  },
  computed: {
    as() {
      if (this.href) {
        return 'a'
      }
      if (this.to) {
        return 'nuxt-link'
      }

      return 'button'
    },
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
      if (this.dark !== false) {
        return 'dark'
      }

      if (this.danger !== false) {
        return 'danger'
      }

      return 'primary'
    },

    classes() {
      const primaryClasses = {
        'bg-primary': this.isPrimary && !this.isOutlined,
        'text-primary border border-primary': this.isPrimary && this.isOutlined,
        'hover:bg-primary-light hover:border-transparent':
          this.isPrimary && this.isOutlined,
        'hover:bg-primary-dark hover:text-white':
          !this.isDisabled && this.isPrimary && !this.isOutlined
      }

      const dangerClasses = {
        'bg-danger': this.danger !== false && !this.isOutlined,
        'text-danger border border-danger': this.isDanger && this.isOutlined,
        'hover:bg-danger-light hover:border-transparent':
          this.isDanger && this.isOutlined,
        'hover:bg-danger-dark':
          !this.isDisabled && this.isDanger && !this.isOutlined
      }

      const darkClasses = {
        'bg-gray-700': this.color === 'dark' && !this.isOutlined,
        'text-gray-800 hover:text-gray-600 border border-gray-800 hover:bg-gray-200 hover:border-transparent':
          this.color === 'dark' && this.isOutlined,
        'hover:bg-black hover:text-white':
          !this.isDisabled && this.color === 'dark' && !this.isOutlined
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

        'rounded-full': this.pill !== false,

        'opacity-50': this.isDisabled && !this.isOutlined
      }

      if (this.color === 'primary') {
        return { ...classes, ...primaryClasses }
      }

      if (this.color === 'danger') {
        return { ...classes, ...dangerClasses }
      }

      if (this.color === 'dark') {
        return { ...classes, ...darkClasses }
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
