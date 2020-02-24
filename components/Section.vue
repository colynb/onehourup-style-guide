<template>
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto mb-6">
      <div class="sm:flex">
        <div class="sm:w-1/3 pr-12">
          <div class="font-bold font-display text-2xl mb-3">
            {{ title }}
          </div>
          <div class="text-gray-600">
            {{ subtitle }}
          </div>
        </div>
        <div class="sm:w-2/3">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>
