<template>
  <Section
    title="Collapsibles"
    subtitle="Show/hide information by clicking on a title."
  >
    <div>
      <Collapsible class="mb-2" />
      <Collapsible class="mb-2" />
      <Collapsible class="mb-2" />
      <Collapsible class="mb-2" />
    </div>
  </Section>
</template>

<script>
import Section from '~/components/Section'
import Collapsible from '~/components/Collapsible'
export default {
  components: {
    Section,
    Collapsible
  }
}
</script>
