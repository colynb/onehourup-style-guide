<template>
  <div class="font-sans">
    <div class="bg-primary-darker text-white py-24 mb-12">
      <div class="container mx-auto">
        <div>
          <h1 class="font-display font-bold text-6xl">
            OneHourUp Style Guide
          </h1>
          <h2 class="font-display text-2xl">
            An overview of OneHourUp's styling and VueJS components. Based on
            <a
              href="https://tailwindcss.com/"
              class="text-primary hover:underline"
              >Tailwind CSS</a
            >.
          </h2>
        </div>
      </div>
    </div>
    <div class="py-24 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Colors</div>
            <div class="text-gray-600">Primaries and grays</div>
          </div>
          <div class="w-2/3">
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

            Example classes
            <code-highlight>{{ example1 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
    <div class="py-24 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Typography</div>
            <div class="text-gray-600">
              Headings, body and other common text elements
            </div>
          </div>
          <div class="w-2/3">
            <div class="mb-6">
              <Display size="1" as="h1">Display 1</Display>
              <Display size="2">Display 2</Display>
              <Display size="3">Display 3</Display>
              <Display size="4">Display 4</Display>
              <Display size="5">Display 5</Display>
            </div>

            <Blockquote>
              “Here’s an insightful quote from the article that is worth
              isolating for emphasis.”
            </Blockquote>

            Example components
            <code-highlight>{{ example2 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>

    <!--- Alerts -->
    <div class="py-24 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Alerts</div>
            <div class="text-gray-600">
              Used for adding notices around the interface
            </div>
          </div>
          <div class="w-2/3">
            <Alert class="mb-4">
              A simple Default alert. Here is
              <a href="#">an example link</a>.
            </Alert>
            <Alert type="primary" class="mb-4">
              A simple Primary alert. Here is
              <a href="#">an example link</a>.
            </Alert>
            <Alert type="success" class="mb-4">
              A simple Success alert. Here is
              <a href="#">an example link</a>.
            </Alert>
            <Alert type="warning" class="mb-4">
              A simple Warning alert. Here is
              <a href="#">an example link</a>.
            </Alert>
            <Alert type="danger" class="mb-4">
              A simple Danger alert. Here is
              <a href="#">an example link</a>.
            </Alert>

            <Alert type="info" class="mb-4">
              A simple Information alert. Here is
              <a href="#">an example link</a>.
            </Alert>

            Example components
            <code-highlight>{{ example3 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>

    <!-- Badges -->
    <div class="py-24 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Badges</div>
            <div class="text-gray-600">
              Combine with other components to display metadata
            </div>
          </div>
          <div class="w-2/3">
            <div class="flex mb-6">
              <Badge class="m-1">Default</Badge>
              <Badge class="m-1" color="primary">Primary</Badge>
              <Badge class="m-1" color="primary-dark">Primary Dark</Badge>
              <Badge class="m-1" color="success">Success</Badge>
              <Badge class="m-1" color="warning">Warning</Badge>
              <Badge class="m-1" color="danger">Danger</Badge>
              <Badge class="m-1" color="info">Info</Badge>
            </div>

            Example classes
            <code-highlight>{{ example4 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="py-24 border-b">
      <div class="container mx-auto">
        <div class="md:flex">
          <div class="w-1/3">
            <div class="font-bold font-display text-2xl mb-3">Buttons</div>
            <div class="text-gray-600">
              Styles for actions in forms, dialogs, and more with support for
              multiple sizes, states, and more.
            </div>
          </div>
          <div class="w-2/3">
            <div class="flex items-start mb-6">
              <Button small>Small</Button>
              <Button>Standard</Button>
              <Button large>Large</Button>
            </div>
            <div class="flex items-start mb-6">
              <Button danger>Danger</Button>
              <Button outlined>Outlined</Button>
              <Button danger outlined>Outlined Danger</Button>
            </div>

            <div class="flex items-start mb-6">
              <Button disabled>Disabled</Button>
            </div>
            Example classes
            <code-highlight>{{ example5 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorCard from '~/components/ColorCard'
import CodeHighlight from '~/components/Highlight'
export default {
  components: {
    ColorCard,
    CodeHighlight
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
        <Display size="1" as="h1">Display 1</Display>
        <Display size="2">Display 2</Display>
        <Display size="3">Display 3</Display>
        <Display size="4">Display 4</Display>
        <Display size="5">Display 5</Display>

        <Blockquote>
          “Here’s an insightful quote from the article that is worth
          isolating for emphasis.”
        </Blockquote>
      `
        .replace(/        /g, '')
        .trim()
    },
    example3() {
      return `
        <Alert class="mb-4">
          A simple Primary alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="success" class="mb-4">
          A simple Success alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="warning" class="mb-4">
          A simple Warning alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="danger" class="mb-4">
          A simple Danger alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="info" class="mb-4">
          A simple Information alert. Here is
          <a href="#">an example link</a>.
        </Alert>
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
    },
    example5() {
      return `
        <Button>Standard</Button>
        <Button small>Small</Button>
        <Button large>Large</Button>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
        <Button outlined>Outlined</Button>
        <Button danger outlined>Outlined Danger</Button>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
