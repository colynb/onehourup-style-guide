<template>
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto mb-6">
      <div class="sm:flex">
        <div class="sm:w-1/3 pr-12">
          <div class="font-bold font-display text-2xl mb-3">
            Forms - Inputs
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
                <input-text
                  small
                  type="text"
                  placeholder="Small"
                  myProp="Hello"
                />
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
            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Labeled Input</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    label="Email address"
                    placeholder="e.g. jane@example.com"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Hinted Input</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    label="Password"
                    hint="Min 8 chars"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Error Input</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    label="Password"
                    hint="Min 8 chars"
                    error="Passwords must have at least 8 chars."
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Success Input</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    label="Password"
                    hint="Min 8 chars"
                    :success="true"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Input with Prefix and Suffix</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    prefix="$"
                    suffix="USD"
                    label="Price"
                    value="23.00"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <div class="mb-6">
                <label class="font-bold">Input with Icon</label>
              </div>
              <div class="grid gap-2 grid-cols-3">
                <div>
                  <input-text
                    label="Email"
                    icon="email"
                    value="demo@example.com"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <fieldset>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <legend
                      class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                    >
                      Checkboxes
                    </legend>
                  </div>
                  <div class="mt-4 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg">
                      <div class="relative flex items-start">
                        <div class="absolute flex items-center h-5">
                          <input-checkbox id="comments" />
                        </div>
                        <div class="pl-7 text-sm leading-5">
                          <label
                            for="comments"
                            class="font-medium text-gray-700"
                            >Comments</label
                          >
                          <p class="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="relative flex items-start">
                          <div class="absolute flex items-center h-5">
                            <input-checkbox id="candidates" />
                          </div>
                          <div class="pl-7 text-sm leading-5">
                            <label
                              for="candidates"
                              class="font-medium text-gray-700"
                              >Candidates</label
                            >
                            <p class="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="relative flex items-start">
                          <div class="absolute flex items-center h-5">
                            <input-checkbox id="offers" />
                          </div>
                          <div class="pl-7 text-sm leading-5">
                            <label
                              for="offers"
                              class="font-medium text-gray-700"
                              >Offers</label
                            >
                            <p class="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="mb-6">
              <fieldset>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <legend
                      class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                    >
                      Radio buttons
                    </legend>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="max-w-lg">
                      <p class="text-sm leading-5 text-gray-500">
                        These are delivered via SMS to your mobile phone.
                      </p>
                      <div class="mt-4">
                        <div class="flex items-center">
                          <input-radio id="radio1" name="options" />
                          <label for="radio1" class="ml-3">
                            <span
                              class="block text-sm leading-5 font-medium text-gray-700"
                              >Everything</span
                            >
                          </label>
                        </div>
                        <div class="mt-4 flex items-center">
                          <input-radio id="radio2" name="options" />
                          <label for="radio2" class="ml-3">
                            <span
                              class="block text-sm leading-5 font-medium text-gray-700"
                              >Same as email</span
                            >
                          </label>
                        </div>
                        <div class="mt-4 flex items-center">
                          <input-radio id="radio3" name="options" />
                          <label for="radio3" class="ml-3">
                            <span
                              class="block text-sm leading-5 font-medium text-gray-700"
                              >No push notifications</span
                            >
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="mb-6">
              <fieldset>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <legend
                      class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                    >
                      Toggle
                    </legend>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="max-w-lg">
                      <div class="mt-4">
                        <div class="flex items-center">
                          <input-toggle
                            :checked="formData.toggle"
                            v-model="formData.toggle"
                            v-on:change="handleToggleChange"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <code-highlight>{{ example }}</code-highlight>

            <div class="mb-6 mt-6">
              <div class="mb-6">
                <label class="font-bold">Sign Up Form</label>
              </div>
              <div>
                <div class="p-12">
                  <Card class="max-w-sm mx-auto">
                    <Display size="5" class="mb-6 leading-none"
                      >Sign Up</Display
                    >
                    <input-text
                      type="text"
                      label="Email"
                      class="mb-6"
                      value="joe@example.com"
                    />
                    <input-text
                      type="password"
                      label="Password"
                      value="abc"
                      error="Password must be at least 8 chars."
                      class="mb-6"
                    />

                    <div class="flex items-center justify-between">
                      <Button type="submit" primary>Next</Button>
                      <a
                        class="leading-none text-sm text-gray-600 hover:text-gray-800 hover:underline"
                        href="#"
                      >
                        Already have an account?
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <code-highlight>{{ example2 }}</code-highlight>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        checkbox1: true,
        checkbox2: false,
        toggle: false
      }
    }
  },
  methods: {
    handleToggleChange(checked) {
      this.formData.toggle = checked
    }
  },
  computed: {
    example() {
      return `
        <input-text small type="text" placeholder="Small" />
        <input-text type="email" placeholder="Standard (Default)" />
        <input-text large type="search" placeholder="Large" />
        <input-textarea small placeholder="Small" />
        <input-textarea placeholder="Standard (Default)" />
        <input-textarea large placeholder="Large" />

        <input-text label="Email address" placeholder="e.g. jane@example.com" />
        <input-text type="password" label="Password" hint="Min 8 chars" />
        <input-text
          type="password"
          label="Password"
          error="Passwords must have at least 8 chars."
        />

        <input-toggle :checked="true" />
      `
        .replace(/        /g, '')
        .trim()
    },
    example2() {
      return `
        <Card class="max-w-sm mx-auto">
          <Display size="5" class="mb-6 leading-none"
            >Sign Up</Display
          >
          <input-text type="text" label="Email" class="mb-6" />
          <input-text type="password" label="Password" class="mb-6" />
          <div class="flex items-center justify-between">
            <Button type="submit" primary>Next</Button>
            <a
              class="leading-none text-sm text-primary hover:text-primary-dark"
              href="#"
            >
              Already have an account?
            </a>
          </div>
        </Card>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
