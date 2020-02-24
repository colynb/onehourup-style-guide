<template>
  <div>
    <label>{{ label }}</label>
    <slot v-bind="$props" />
  </div>
</template>

<script>
export default {
  props: ['label', 'error']
}
</script>
