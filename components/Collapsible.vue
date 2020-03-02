<template>
  <div
    class="border-gray-300 rounded-lg hover:shadow"
    :class="{ shadow: opened, 'bg-white': opened }"
  >
    <div class="text-lg leading-7">
      <button
        class="text-gray-900 hover:text-primary text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900 py-6 px-4"
        @click="toggle"
      >
        <div
          class="font-display font-medium font-bold"
          :class="{ 'text-primary': opened }"
        >
          <slot name="header"></slot>
        </div>
        <span class="ml-6 h-7 flex items-center">
          <svg
            class="h-6 w-6 transform"
            :class="{ '-rotate-180': opened }"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="mt-2 p-4 pt-0" :class="{ hidden: !opened }">
      <p class="text-base leading-6 text-gray-500">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    opened: {
      default: false
    }
  },
  methods: {
    toggle() {
      this.opened = !this.opened
      if (this.opened) {
        this.$emit('on-open', this.opened)
      }
    }
  },
  data() {
    return {
      open: this.opened
    }
  }
}
</script>
