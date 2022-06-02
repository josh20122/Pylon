<template>
  <v-container class="">
    <v-row>
      <v-col> processing </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia-vue";
export default {
  props: {
    form: {
      type: Object,
      required: false,
    },
  },
  mounted: {},
};
</script>

<style>
</style>