<template>
  <v-container class="mt-15">
    <v-row no-gutters>
      <v-col cols="12" class="text-center grey--text text--darken-2 text-sm"
        >What We're Offering</v-col
      >
      <v-col cols="12">
        <div class="grey--text text--darken-4 text-4xl font-bold text-center">
          All Loans Services
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="item in items" :key="item.name">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16 / 9" :src="item.img">
              <v-slide-y-reverse-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                    opacity-60
                    bg-blue-500
                  "
                  style="height: 100%"
                ></div>
              </v-slide-y-reverse-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="deepblue"
                class="white--text"
                fab
                large
                right
                small
                top
                depressed
              >
                <v-icon v-text="item.icon"></v-icon>
              </v-btn>
              <v-row>
                <v-col>
                  <div class="grid space-y-6">
                    <div
                      class="grey--text text--darken-4 text-2xl font-extrabold"
                      v-text="item.name"
                    ></div>
                    <div class="text-[16px]" v-text="item.message"></div>
                    <Link href="/application">
                      <v-btn color="secondary" icon depressed>
                        <v-icon>fa-solid fa-arrow-right</v-icon>
                      </v-btn>
                    </Link>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      items: [
        {
          img: "images/service1.jpg",
          name: "Property Loan",
          icon: "",
          message:
            "Everyone want to buy property so people want to buy home, land or commercial properly low interest",
        },
        {
          img: "images/service3.jpg",
          name: "Business Loan",
          icon: "",
          message:
            "Everyone want to buy property so people want to buy home, land or commercial properly low interest",
        },
        {
          img: "images/service2.jpg",
          name: "Education Loan",
          icon: "",
          message:
            "Everyone want to buy property so people want to buy home, land or commercial properly low interest",
        },
      ],
    };
  },
};
</script>

<style>
</style>