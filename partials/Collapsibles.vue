<template>
  <Section
    title="Collapsibles"
    subtitle="Show/hide information by clicking on a title."
  >
    <div>
      <Collapsible class="mb-2">
        <template v-slot:header>
          Pariatur ullamco non ullamco reprehenderit minim esse aliqua duis et.
        </template>
        <div>
          Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
          sagittis interdum Melisandre. Vivamus ornare pharetra diam sit amet
          tincidunt. Eunuch sit amet pharetra odio. Vivamus in tempor ipsum, sit
          amet elementum neque. Sed faucibus posuere pharetra. In imperdiet
          eleifend dui a aliquet. Aliquam imperdiet Tyrion purus vitae rutrum.
          Donec eu commodo nunc. Mauris dignissim lectus massa, eget cursus quam
          mollis id. Eddard sit amet ex Jon nibh maximus cursus at vitae mi.
          Duis tincidunt aliquam mi sed sagittis.
        </div>
      </Collapsible>
      <Collapsible class="mb-2">
        <template v-slot:header>
          Cupidatat ullamco exercitation elit ut Lorem officia voluptate
          consequat eu dolor magna pariatur cillum.
        </template>
        <div>
          Esse dolor pariatur nisi culpa culpa tempor anim excepteur ad
          voluptate. Consequat nisi tempor duis nulla reprehenderit aliquip
          irure sint magna. Cupidatat excepteur nisi exercitation sint nostrud
          tempor irure in commodo dolore.
        </div>
      </Collapsible>
      <Collapsible class="mb-2">
        <template v-slot:header>
          In minim eiusmod laborum dolor magna non non cupidatat elit aute.
        </template>
        <div>
          Ipsum velit nisi aliquip velit mollit officia qui. Ipsum nostrud elit
          amet voluptate dolore pariatur veniam. Ad tempor ullamco ut veniam
          proident adipisicing est sint. Fugiat culpa incididunt duis dolore
          nostrud.
        </div>
      </Collapsible>
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
