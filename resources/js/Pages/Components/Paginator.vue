<template>
  <nav class="">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <component
          :is="page.url ? 'Link' : 'span'"
          role="span"
          v-for="page in items.links"
          :key="page.url"
          :href="page.url"
          v-html="page.label"
          class="
            rounded-md
            py-2
            px-3
            leading-tight
            text-gray-500
            bg-white
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      required: false,
    },
  },
};
</script>

<style>
</style>