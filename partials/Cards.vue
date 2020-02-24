<template>
  <Section
    title="Cards"
    subtitle="Structural component for displaying boxed content."
  >
    <div class="">
      <Card class="m-2">
        <Display size="5">Default Style</Display>

        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <a href="/" class="block font-bold mt-3">Link Here</a>
        </p>
      </Card>
    </div>

    <div class="flex">
      <Card class="m-2">
        <Display size="5">Default Style</Display>

        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <a href="/" class="block font-bold mt-3">Link Here</a>
        </p>
      </Card>
      <Card class="m-2">
        <Display size="5">Default Style</Display>

        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <a href="/" class="block font-bold mt-3">Link Here</a>
        </p>
      </Card>
      <Card class="m-2">
        <Display size="5">Default Style</Display>

        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <a href="/" class="block font-bold mt-3">Link Here</a>
        </p>
      </Card>
    </div>
  </Section>
</template>

<script>
import Section from '~/components/Section'
export default {
  components: {
    Section
  }
}
</script>
