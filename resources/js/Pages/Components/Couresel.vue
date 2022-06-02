<template>
  <div>
    <v-carousel interval="100000000000000" hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet>
          <v-img :src="item.img" max-height="800px">
            <v-row>
              <v-col>
                <div class="grid space-y-4 wait--text pt-[200px] pl-6">
                  <span v-text="item.subtitle" class=""></span>
                  <span v-text="item.message" class="font-bold text-5xl"></span>
                  <div class="">
                    <Link :href="item.link">
                      <v-btn
                        large
                        elevation=""
                        v-text="item.button"
                        color="secondary"
                      ></v-btn>
                    </Link>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container class="pa-md-0">
      <div class="md:-mt-[103px]">
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="" flat>
                  <div class="flex pa-6">
                    <v-icon color="secondary" left
                      >fa-thin fa-cart-shopping
                    </v-icon>
                    <span class="text-lg black--text pl-2"
                      >Quick Payment Process</span
                    >
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="" flat>
                  <div v-if="!hover" class="flex pa-6">
                    <v-icon color="secondary" left
                      >fa-solid fa-handshake
                    </v-icon>
                    <span class="text-lg black--text pl-2"
                      >No Hidden Charges</span
                    >
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="12">
                <div class="grid">
                  <div>Company introductions</div>
                  <div class="display-2">
                    Our loans will fill your dreams Come True
                  </div>
                  <div class="text">
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply
                    free text available in the local markets in
                    reprehenderit.Nam aliquam sem et tortor consequat mattis
                    pellentesque semper tailored for specific uses and specific
                    market segment.
                  </div>
                  <v-row class="pt-7">
                    <v-col cols="12" md="6">
                      <div class="flex">
                        <span>
                          <v-icon x-large color="blue"> mdi-trophy </v-icon>
                        </span>
                        <span class="title">Award Winning</span>
                        <span class="text"
                          >Finance catagories winninng more than 10 Awards</span
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="flex">
                        <span class="title">Certified Company</span>
                        <span>Approved Finace company to provide loans</span>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <slot> </slot>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      isActive: false,
      slider: 75000,
      items: [
        {
          img: "images/corousel5.jpg",
          message: "Connecting Your Loan Needs",
          subtitle: "Simple & Secure Payment Process",
          button: "Apply for a loan",
          link: "/application",
        },
        {
          img: "images/corousel4.jpg",
          message: "Building A Bighter Financial Future ",
          subtitle: "Welcome to Pylon",
          button: "Loan Calculator",
          link: "/calculator",
        },
      ],
    };
  },
};
</script>

<style>
</style>