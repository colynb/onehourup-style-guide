<template>
  <span
    :class="{ 'bg-gray-200': !value, 'bg-primary': value }"
    class="relative inline-block flex-no-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
    @keydown.space.prevent="toggle()"
    @click="toggle()"
    :aria-checked="value.toString()"
  >
    <span
      aria-hidden="true"
      :class="{ 'translate-x-5': value, 'translate-x-0': !value }"
      class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    checked: {
      default: false
    }
  },
  data() {
    return {
      value: this.checked
    }
  },
  methods: {
    toggle() {
      this.value = !this.value
      this.$emit('change', this.value)
    }
  }
}
</script>
