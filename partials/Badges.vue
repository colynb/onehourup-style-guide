<template>
  <!-- Badges -->
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto">
      <div class="sm:flex">
        <div class="sm:w-1/3">
          <div class="font-bold font-display text-2xl mb-3">Badges</div>
          <div class="text-gray-600">
            Combine with other components to display metadata
          </div>
        </div>
        <div class="sm:w-2/3">
          <div class="mb-6 sm:flex">
            <div class="m-3"><Badge>Default</Badge></div>
            <div class="m-3"><Badge color="primary">Primary</Badge></div>
            <div class="m-3">
              <Badge color="primary-dark">Primary Dark</Badge>
            </div>
            <div class="m-3"><Badge color="success">Success</Badge></div>
            <div class="m-3"><Badge color="warning">Warning</Badge></div>
            <div class="m-3"><Badge color="danger">Danger</Badge></div>
            <div class="m-3"><Badge color="info">Info</Badge></div>
          </div>

          <code-highlight>{{ example }}</code-highlight>
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
        <Badge class="m-1">Default</Badge>
        <Badge class="m-1" color="primary">Primary</Badge>
        <Badge class="m-1" color="primary-dark">Primary Dark</Badge>
        <Badge class="m-1" color="success">Success</Badge>
        <Badge class="m-1" color="warning">Warning</Badge>
        <Badge class="m-1" color="danger">Danger</Badge>
        <Badge class="m-1" color="info">Info</Badge>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
