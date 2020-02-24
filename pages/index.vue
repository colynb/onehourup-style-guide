<template>
  <div class="font-sans">
    <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="sm:w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Colors</div>
            <div class="text-gray-600">Primaries and grays</div>
          </div>
          <div class="sm:w-2/3">
            <div class="flex mb-6">
              <div class="mr-6">
                <ColorCard
                  color1="primary"
                  color2="primary-alt"
                  label="Primary"
                />
              </div>
              <div class="mr-6">
                <ColorCard color1="primary-light" label="Primary Light" />
              </div>
              <div class="mr-6">
                <ColorCard
                  color1="primary-dark"
                  color2="primary-dark-alt"
                  label="Primary Dark"
                />
              </div>
              <div>
                <ColorCard
                  color1="primary-darker"
                  color2="primary-darker-alt"
                  label="Primary Darker"
                />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="mr-6">
                <ColorCard color1="success" label="Success" />
              </div>
              <div class="mr-6">
                <ColorCard color1="success-light" label="Success Light" />
              </div>
              <div class="mr-6">
                <ColorCard color1="success-dark" label="Success Dark" />
              </div>

              <div class="mr-6">
                <ColorCard color1="success-darker" label="Success Darker" />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="mr-6">
                <ColorCard color1="danger" label="Danger" />
              </div>
              <div class="mr-6">
                <ColorCard color1="danger-light" label="Danger Light" />
              </div>
              <div class="mr-6">
                <ColorCard color1="danger-dark" label="Danger Dark" />
              </div>

              <div class="mr-6">
                <ColorCard color1="danger-darker" label="Danger Darker" />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="mr-6">
                <ColorCard color1="warning" label="Warning" />
              </div>
              <div class="mr-6">
                <ColorCard color1="warning-light" label="Warning Light" />
              </div>
              <div class="mr-6">
                <ColorCard color1="warning-dark" label="Warning Dark" />
              </div>

              <div class="mr-6">
                <ColorCard color1="warning-darker" label="Warning Darker" />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="mr-6">
                <ColorCard color1="info" label="Info" />
              </div>
              <div class="mr-6">
                <ColorCard color1="info-light" label="Info Light" />
              </div>
              <div class="mr-6">
                <ColorCard color1="info-dark" label="Info Dark" />
              </div>

              <div class="mr-6">
                <ColorCard color1="info-darker" label="Info Darker" />
              </div>
            </div>

            <code-highlight>{{ example1 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="sm:w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Typography</div>
            <div class="text-gray-600">
              Headings, body and other common text elements
            </div>
          </div>
          <div class="sm:w-2/3">
            <div class="mb-6">
              <h1 class="font-display text-6xl font-bold">Display 1</h1>
              <h2 class="font-display text-5xl font-bold">Display 2</h2>
              <h3 class="font-display text-4xl font-bold">Display 3</h3>
              <h4 class="font-display text-3xl font-bold">Display 4</h4>
              <h5 class="font-display text-2xl font-bold">Display 5</h5>
            </div>

            <blockquote>
              “Here’s an insightful quote from the article that is worth
              isolating for emphasis.”
            </blockquote>

            <code-highlight>{{ example2 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorCard from '~/components/ColorCard'
export default {
  components: {
    ColorCard
  },
  computed: {
    example1() {
      return `
        <div class="text-primary">Primary text</div>
        <div class="text-primary-dark">Primary Dark text</div>
        <div class="text-primary-darker">Primary Darker text</div>

        <div class="bg-primary">Primary Background</div>
        <div class="bg-primary-dark">Primary Dark Background</div>
        <div class="bg-primary-darker">Primary Darker Background</div>
      `
        .replace(/        /g, '')
        .trim()
    },
    example2() {
      return `
        <h1 class="font-display text-6xl font-bold">Display 1</h1>
        <h2 class="font-display text-5xl font-bold">Display 2</h2>
        <h3 class="font-display text-4xl font-bold">Display 3</h3>
        <h4 class="font-display text-3xl font-bold">Display 4</h4>
        <h5 class="font-display text-2xl font-bold">Display 5</h5>

        <blockquote>
          “Here’s an insightful quote from the article that is worth
          isolating for emphasis.”
        </blockquote>
      `
        .replace(/        /g, '')
        .trim()
    },
    example4() {
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
