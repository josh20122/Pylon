<template>
  <v-app>
    <v-navigation-drawer
      color="drawer"
      hidden
      class=""
      app
      light
      :value="drawer"
    >
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

        <div v-for="link in links" :key="link.id" class="mt-2">
          <v-list-item>
            <v-list-item-content>
              <Link class="text-white" :href="link.link">
                <v-list-item-title>
                  <span class="text-white" v-text="link.page"> </span>
                </v-list-item-title>
              </Link>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="grey darken-3"></v-divider>
        </div>

        <!-- <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> jamesjoshua20122@gmail.com </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="" hide-on-scroll app short circle flat>
      <v-col>
        <v-img max-width="150px" :src="'images/pylon-logo.png'"></v-img>
      </v-col>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-row class="d-none d-sm-flex">
        <span class="flex uppercase space-x-6 justify-end mr-10">
          <Link
            class="grey--text text--darken-4"
            v-for="link in links"
            v-text="link.page"
            :href="link.link"
            :key="link.id"
          >
          </Link>
        </span>
      </v-row>
      <v-divider vertical> </v-divider>
      <div class="">
        <div class="grid justify-end pl-4">
          <span class="text-xs text-light text-gray-400">CALL ANYTIME</span>
          <span class="text-sm"> {{ $page.props.settings.contact }} </span>
        </div>
      </div>
    </v-app-bar>

    <v-main class="background2">
      <slot></slot>
      <v-btn href="#top" color="secondary" fixed fab bottom right>
        <v-icon>fa-solid fa-angle-up</v-icon>
      </v-btn>
    </v-main>

    <v-footer color="deep2" padless outlined>
      <v-container class="">
        <v-row>
          <v-col cols="12" sm="6">
            <div class="grid space-y-4">
              <div class="flex space-x-2 py-4">
                <v-img max-width="50px" :src="'images/logo.png'"></v-img>
                <span class="text-3xl text-white font-medium">Pylon</span>
              </div>
              <div class="text-blue-100">
                Welcome to pylon loand company we are provide loan as very
                reasonably interest and you can provide document etur labore.
              </div>
              <v-divider class="blue lighten-2"></v-divider>
              <div class="flex">
                <div>
                  <v-icon x-large color="blue lighten-2 h-16">mdi-phone</v-icon>
                </div>
                <div class="grid space-y-2">
                  <div class="text-blue-100">CALL ANYTIME</div>
                  <div class="text-white text-2xl">
                    {{ $page.props.settings.contact }}
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" class="pt-md-14">
            <div>
              <div class="grid">
                <div class="pb-4 text-bold text-white text-3xl">Explore</div>
                <span
                  class="blue--text text--lighten-2"
                  v-for="link in links"
                  :key="link.link"
                >
                  <Link :href="link.link" class="flex space-x-4">
                    <v-icon color="blue lighten-3"
                      >fa-thin fa-arrow-right</v-icon
                    >
                    <span class="text-blue-100" v-text="link.page"></span>
                  </Link>
                </span>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-card color="deep2" flat>
              <v-card-text class="pt-0 text-center">
                <div class="blue--text text--lighten-4">
                  © Copyright 2016 - {{ new Date().getFullYear() }} by pylon.com
                </div>
              </v-card-text>
              <v-card-text class="pt-0 text-center">
                <a
                  class=""
                  dark
                  v-for="button in buttons"
                  :key="button.link"
                  :href="button.link"
                >
                  <v-btn icon color="grey">
                    <v-icon
                      color="grey lighten-4"
                      v-text="button.icon"
                    ></v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      drawer: false,
      buttons: [
        { icon: "mdi-facebook", link: "www.facebook.com" },
        { icon: "mdi-twitter", link: "www.twitter.com" },
        { icon: "mdi-instagram", link: "www.instagram.com" },
        { icon: "mdi-gmail", link: "www.gmail.com" },
      ],
      links: [
        { page: "Home", link: "/", icon: "", id: 1 },
        { page: "Apply loan", link: "/application", icon: "", id: 2 },
        { page: "Contact", link: "/contact", icon: "", id: 3 },
        { page: "FAQ", link: "faq", icon: "", id: 4 },
        { page: "My Account", link: "/dashboard", id: 5 },
      ],
    };
  },
};
</script>

<style>
</style>