<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center text-gray-900">
            <Logo class="w-32" />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex">
            <nuxt-link
              to="/"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-lg hover:no-underline font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
            >
              Style Guide
            </nuxt-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div class="ml-3 relative">
            <div>
              <button
                @click="open = !open"
                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <div
              v-if="open"
              transition="expand"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
            >
              <div class="py-1 rounded-md bg-white shadow-xs">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="open = !open"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: open, 'inline-flex': !open }"
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !open, 'inline-flex': open }"
                class="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ block: open, hidden: !open }" class="hidden sm:hidden">
      <div class="pt-2 pb-3">
        <nuxt-link
          to="/"
          class="block pl-3 pr-4 py-2 border-l-4 border-primary font-medium text-primary bg-primary-light focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          >Style Guide</nuxt-link
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="font-medium leading-6 text-gray-800">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-5 text-gray-500">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3">
          <a
            href="#"
            class="block px-4 py-2 font-medium focus:outline-none transition duration-150 ease-in-out"
            >Your Profile</a
          >
          <a
            href="#"
            class="mt-1 block px-4 py-2 font-medium focus:outline-none transition duration-150 ease-in-out"
            >Settings</a
          >
          <a
            href="#"
            class="mt-1 block px-4 py-2 font-medium focus:outline-none transition duration-150 ease-in-out"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
