<template>
  <div class="mt-6 border-t border-gray-300 pt-6">
    <div class="text-lg leading-7">
      <button
        class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
        @click="open = !open"
      >
        <span class="font-display font-medium font-bold text-gray-900">
          What's the best thing about Switzerland?
        </span>
        <span class="ml-6 h-7 flex items-center">
          <svg
            class="h-6 w-6 transform"
            :class="{ '-rotate-180': open }"
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
    <div class="mt-2 pr-12" :class="{ hidden: !open }">
      <p class="text-base leading-6 text-gray-500">
        I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
