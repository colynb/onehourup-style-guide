<template>
  <div>
    <div class="w-24 h-24 flex rounded-lg overflow-hidden">
      <div class="flex-grow" :class="{ ['bg-' + color1]: true }"></div>
    </div>
    <div class="text-gray-600 text-sm mt-3">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'color1']
}
</script>
