<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        v-if="prefix"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm sm:leading-5">
          {{ prefix }}
        </span>
      </div>

      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <input
        :type="type"
        class="form-input block w-full sm:text-sm sm:leading-5"
        :class="inputClasses"
        v-bind="$attrs"
      />
      <div
        v-if="suffix"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm sm:leading-5">
          USD
        </span>
      </div>
      <div
        v-if="error"
        class="absolute inset-y-0 pr-3 right-0 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-danger"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p v-if="hint && !error" class="mt-2 text-sm text-gray-500">
      {{ hint }}
    </p>
    <p v-if="error" class="mt-2 text-sm text-danger">
      Your password must be less than 4 characters.
    </p>
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
    icon: {
      default: null
    },
    prefix: {
      default: null
    },
    suffix: {
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
    inputClasses() {
      return {
        'block w-full pr-10 sm:text-sm sm:leading-5 focus:border-primary focus:shadow-outline-primary': !this
          .error,
        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': this
          .error,
        'py-1 px-2 sm:text-sm rounded': this.size === 'small',
        'py-3 px-4 sm:text-md rounded-md': this.size === 'standard',
        'py-4 px-5 sm:text-lg rounded-lg': this.size === 'large',
        'pl-10': this.prefix || this.icon
      }
    }
  }
}
</script>
