<template>
  <v-app>
    <v-app-bar color="drawer" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>

      <img class="rounded-full h-10" :src="'images/logo1.jpg'" alt="" />
    </v-app-bar>
    <v-navigation-drawer clipped app color="drawer" :value="drawer">
      <v-list>
        <v-list-item class="my-4">
          <v-list-item-avatar id="top">
            <v-img :src="'images/logo.png'"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="primary--text font-medium text-3xl">PYLON</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="secondary"></v-divider>

        <v-list-item v-for="link in links" :key="link.link">
          <v-list-item-icon>
            <v-icon color="wait">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <Link :href="link.link" class="wait--text">
              <v-list-item-title class="wait--text">
                {{ link.page }}
              </v-list-item-title>
            </Link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <slot> </slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    auth: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      drawer: false,
      links: [
        { page: "Dashboard", link: "/admin", icon: "fa-solid fa-chart-line" },
        {
          page: "All Users",
          link: "/admin/crud/all",
          icon: "fa-solid fa-users",
        },
        {
          page: "Deposited",
          link: "/admin/deposited",
          icon: "fa-solid fa-dollar-sign",
        },
        {
          page: "Pending",
          link: "/admin/pending",
          icon: "fa-light fa-filter-circle-dollar",
        },
        {
          page: "Settings",
          link: "/admin/settings",
          icon: "fa-solid fa-gear",
        },
      ],
    };
  },
};
</script>

<style>
</style>