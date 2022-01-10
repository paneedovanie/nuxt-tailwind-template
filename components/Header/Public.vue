<template>
  <div class="relative flex items-center justify-between h-16">
    <div>
      <nuxt-link
        :to="{ name: 'index' }"
        class="text-indigo-600 hover:text-indigo-900"
        >My App</nuxt-link
      >
    </div>

    <div class="flex-auto"></div>

    <div>
      <nuxt-link
        :to="{ name: 'login' }"
        class="block bg-indigo-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-indigo-700"
      >
        Login
      </nuxt-link>
    </div>
  </div>
</template>
