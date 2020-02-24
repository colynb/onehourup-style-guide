<template>
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto">
      <div class="sm:flex">
        <div class="sm:w-1/3 pr-12">
          <div class="font-bold font-display text-2xl mb-3">
            Forms - Text Inputs
          </div>
          <div class="text-gray-600">
            Size and state variations for text inputs
          </div>
        </div>
        <div class="sm:w-2/3">
          <div class="mb-6">
            <div class="mb-6"><label class="font-bold">Input Sizes</label></div>
            <div class="grid gap-2 grid-cols-3">
              <div>
                <input-text small type="text" placeholder="Small" />
              </div>
              <div>
                <input-text type="email" placeholder="Standard (Default)" />
              </div>
              <div>
                <input-text large type="search" placeholder="Large" />
              </div>
            </div>
          </div>
          <div class="mb-6">
            <div class="mb-6"><label class="font-bold">Textarea</label></div>
            <div class="grid gap-2 grid-cols-3">
              <div>
                <input-textarea small placeholder="Small" />
              </div>
              <div>
                <input-textarea placeholder="Standard (Default)" />
              </div>
              <div>
                <input-textarea large placeholder="Large" />
              </div>
            </div>
            <code-highlight>{{ example }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    example() {
      return `
        <input-text small type="text" placeholder="Small" />
        <input-text type="email" placeholder="Standard (Default)" />
        <input-text large type="search" placeholder="Large" />
        <input-textarea small placeholder="Small" />
        <input-textarea placeholder="Standard (Default)" />
        <input-textarea large placeholder="Large" />
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
