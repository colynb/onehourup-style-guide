<template>
  <label
    class="flex items-center leading-none mb-2 cursor-pointer hover:text-primary"
  >
    <input
      type="checkbox"
      :checked="checked"
      v-bind="$attrs"
      class="hidden"
      @change="handleChange"
    />
    <div class="checkmark w-5 h-5 bg-white border rounded mr-2">
      <svg
        class="w-3 h-3"
        viewBox="0 0 512 382"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="#ffffff" fill-rule="nonzero">
            <path
              d="M173.898,374.404 L7.498,208.004 C-2.499,198.007 -2.499,181.798 7.498,171.8 L43.701,135.596 C53.698,125.598 69.908,125.598 79.905,135.596 L192,247.69 L432.095,7.596 C442.092,-2.401 458.302,-2.401 468.299,7.596 L504.502,43.8 C514.499,53.797 514.499,70.006 504.502,80.004 L210.102,374.405 C200.104,384.402 183.895,384.402 173.898,374.404 L173.898,374.404 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <slot />
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checkStatus',
    event: 'change'
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.checked)
    }
  },
  computed: {
    checked() {
      return this.$attrs.checkStatus
    }
  }
}
</script>

<style scoped>
.checkmark {
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkmark svg {
  display: none;
}
input:checked ~ .checkmark {
  @apply bg-primary;
  border: none;
}
input:checked ~ .checkmark svg {
  display: inline;
}
</style>
