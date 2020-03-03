<template>
  <div>
    <!-- Profile Image -->
    <div class="flex items-start border-b border-gray-200 pt-4 pb-6 mb-6">
      <img
        class="inline-block h-20 w-20 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div class="ml-4">
        <Button outlined small dark pill>Upload</Button>
        <div class="text-sm text-gray-400 mt-2">
          For best results, use an image at least 256px by 256px in either .jpg
          or .png format
        </div>
      </div>
    </div>
    <div class="sm:flex w-full">
      <div class="sm:w-3/4">
        <form>
          <div>
            <div>
              <div>
                <Display>
                  Profile
                </Display>
              </div>
              <div class="mt-6 sm:mt-5">
                <div
                  class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="username"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Username
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg flex rounded-md shadow-sm">
                      <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                      >
                        onehourup.com/
                      </span>
                      <input
                        id="username"
                        class="flex-1 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="about"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    About
                  </label>
                  <div class="col-span-2">
                    <input-textarea></input-textarea>
                    <p class="mt-2 text-sm text-gray-500">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10 hidden"
            >
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Personal Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div class="mt-6 sm:mt-5">
                <div
                  class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="first_name"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    First name
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        id="first_name"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="last_name"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Last name
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        id="last_name"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="email"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Email address
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="country"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Country / Region
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <select
                        id="country"
                        class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="street_address"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Street address
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg rounded-md shadow-sm">
                      <input
                        id="street_address"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    City
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        id="city"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="state"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    State / Province
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        id="state"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="zip"
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                  >
                    ZIP / Postal
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        id="zip"
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10 hidden"
            >
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>
              </div>
              <div class="mt-6 sm:mt-5">
                <div class="sm:border-t sm:border-gray-200 sm:pt-5">
                  <fieldset>
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <legend
                          class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                        >
                          By Email
                        </legend>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg">
                          <div class="relative flex items-start">
                            <div class="absolute flex items-center h-5">
                              <input
                                id="comments"
                                type="checkbox"
                                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
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
                                <input
                                  id="candidates"
                                  type="checkbox"
                                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                              </div>
                              <div class="pl-7 text-sm leading-5">
                                <label
                                  for="candidates"
                                  class="font-medium text-gray-700"
                                  >Candidates</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4">
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input
                                  id="offers"
                                  type="checkbox"
                                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                              </div>
                              <div class="pl-7 text-sm leading-5">
                                <label
                                  for="offers"
                                  class="font-medium text-gray-700"
                                  >Offers</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div
                  class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <fieldset>
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <legend
                          class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                        >
                          Push Notifications
                        </legend>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="max-w-lg">
                          <p class="text-sm leading-5 text-gray-500">
                            These are delivered via SMS to your mobile phone.
                          </p>
                          <div class="mt-4">
                            <div class="flex items-center">
                              <input
                                id="push_everything"
                                name="form-input push_notifications"
                                type="radio"
                                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                              <label for="push_everything" class="ml-3">
                                <span
                                  class="block text-sm leading-5 font-medium text-gray-700"
                                  >Everything</span
                                >
                              </label>
                            </div>
                            <div class="mt-4 flex items-center">
                              <input
                                id="push_email"
                                name="form-input push_notifications"
                                type="radio"
                                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                              <label for="push_email" class="ml-3">
                                <span
                                  class="block text-sm leading-5 font-medium text-gray-700"
                                  >Same as email</span
                                >
                              </label>
                            </div>
                            <div class="mt-4 flex items-center">
                              <input
                                id="push_nothing"
                                name="form-input push_notifications"
                                type="radio"
                                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                              />
                              <label for="push_nothing" class="ml-3">
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
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-5">
            <div class="flex">
              <span class="ml-3 inline-flex rounded-md shadow-sm">
                <Button type="submit">
                  Save
                </Button>
              </span>
              <span class="inline-flex">
                <Button link>
                  Cancel
                </Button>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div class="ml-4 w-1/4 hidden sm:block">
        <div
          class="rounded-md bg-primary-light text-primary-dark p-6 sticky top-3"
        >
          This information will be displayed publicly so be careful what you
          share.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account'
}
</script>
