<template>
  <v-container class="mt-4 mt-md-8">
    <v-row class="">
      <v-col cols="12" sm="6">
        <div class="grid space-y-4 py-6">
          <span>Get to Know About</span>
          <span class="text-3xl font-bold"
            >Flexible and Quick Business Loans For You</span
          >
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="py-6">
          Turpis cursus in hac habitasse platea dictumst quisque. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae proin.There of
          available but the majority have suffered alteration in some form, by
          injected humou or randomised words which don’t look even slightly
          believable.Nam aliquam sem et tortor consequat at urna mattis
          pellentesque.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in items" cols="12" md="4" :key="item.message">
        <div class="md:py-10">
          <v-card color="grey lighten-4">
            <v-card-text>
              <div class="py-6">
                <span>
                  <v-icon
                    class="mr-4"
                    color="secondary"
                    v-text="item.icon"
                  ></v-icon>
                </span>
                <span
                  class="text-lg grey--text text--darken-4"
                  v-text="item.message"
                ></span>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row class="deep2 grey--text text--lighten-4 rounded-md">
      <v-col>
        <div class="grid space-y-4">
          <span>Trusted Company</span>
          <div class="font-bold text-4xl">
            Most of the People Trust on us For Fast Services
          </div>
        </div>
        <div class="grid mt-4 space-y-4">
          <div>
            <v-img
              max-width="300px"
              max-height="200px"
              :src="'images/us.png'"
              class="rounded-md"
            ></v-img>
          </div>
          <div class="text-blue-100">
            <span
              >There are many variations of passages of lorem ipsum available
              the majority have suffered alteration in some form by injected
              humour. Duis aute irure dolor lipsum is simply in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </span>
          </div>
          <div class="grid md:flex">
            <div>
              <v-list color="deep2">
                <v-list-item v-for="item in listItems" :key="item.title">
                  <v-list-item-icon>
                    <v-icon color="blue lighten-1"
                      >fa-thin fa-circle-check</v-icon
                    >
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="blue--text text--lighten-4"
                      v-text="item.title"
                    >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
            <div class="">
              <v-list color="deep2">
                <v-list-item-group>
                  <v-list-item v-for="item in listItems2" :key="item.title">
                    <v-list-item-icon>
                      <v-icon color="blue lighten-1"
                        >fa-thin fa-circle-check</v-icon
                      >
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        class="blue--text text--lighten-4"
                        v-text="item.title"
                      >
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="grid md:-mr-10 md:-mt-10">
          <v-card color="deepblue">
            <v-card-text>
              <div class="grid space-y-6">
                <v-card v-for="item in listItems3" class="" :key="item.id">
                  <v-card-text>
                    <div class="grid space-y-4 text-white">
                      <v-avatar color="secondary">
                        <span
                          class="text-2xl font-medium"
                          v-text="item.id"
                        ></span>
                      </v-avatar>
                      <div
                        class="text-gray-900 text-lg"
                        v-text="item.message"
                      ></div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row class="secondary text-center">
      <v-col>
        <div
          class="
            grid
            md:space-y-0
            space-y-8
            md:flex
            justify-space-around
            my-12
            md:my-28
          "
        >
          <div class="grey--text text--lighten-4 grid space-y-2">
            <div class="font-extrabold text-4xl">Ksh2M</div>
            <div class="font-medium text-lg">Daily Payments</div>
          </div>

          <div class="grey--text text--lighten-4 grid space-y-2">
            <div class="font-extrabold text-4xl">Ksh2M</div>
            <div class="font-medium text-lg">Daily Payments</div>
          </div>
          <div class="grey--text text--lighten-4 grid space-y-2">
            <div class="font-extrabold text-4xl">Ksh2M</div>
            <div class="font-medium text-lg">Daily Payments</div>
          </div>
          <div class="grey--text text--lighten-4 grid space-y-2">
            <div class="font-extrabold text-4xl">Ksh2M</div>
            <div class="font-medium text-lg">Daily Payments</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-4">
        <v-carousel
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          height="200"
        >
          <v-carousel-item
            v-for="testimony in testimonials"
            :key="testimony.name"
          >
            <v-card class="mx-auto" max-width="500px" flat>
              <v-card-text>
                <div class="text-center" v-text="testimony.name"></div>
              </v-card-text>
              <v-card-text>
                <div v-text="testimony.message"></div>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          message: "Low Rates on All Loans",
          icon: "fa-solid fa-arrow-up-right-dots",
        },
        {
          message: "99.99% Success Rate Guarantee",
          icon: "fa-solid fa-arrow-up-right-dots",
        },
        {
          message: "Flexible with Your Repayments",
          icon: "fa-solid fa-arrow-up-right-dots",
        },
      ],
      listItems: [
        { title: "Credit Card Per Day" },
        { title: "Personal Loan" },
        { title: "Car / Auto Loan" },
        { title: "Home Loan" },
      ],
      listItems2: [
        { title: "Gold Loan Per Day" },
        { title: "Mortage Loan" },
        { title: "Education / Student Loan" },
        { title: "Wedding Loan" },
      ],
      listItems3: [
        {
          id: 1,
          message: "Easy loan Solutions for small businesses and agencies",
        },
        {
          id: 2,
          message:
            "Submit Required Document and Details for easy loan approval",
        },
        {
          id: 3,
          message: "Take our loans now and pay later when studies completed",
        },
        {
          id: 4,
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
      ],
      testimonials: [
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
        {
          name: "one",
          message:
            "Get small loans for more needs in 2 hours with less documents",
        },
      ],
    };
  },
};
</script>

<style>
</style>