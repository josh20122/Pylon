<template>
  <Navigation>
    <v-container class="">
      <v-row justify="space-around">
        <v-col cols="12">
          <div class="display-1">Dashboard</div>
        </v-col>
        <v-col cols="12">
          <v-row no-gutters>
            <v-col cols="6">
              <div>
                <v-btn small elevation="" outlined color="secondary"
                  >Apply for a loan</v-btn
                >
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                <v-btn small elevation="" color="deepblue" outlined
                  >withdraw</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row dense class="mb-16 pb-10">
        <v-col cols="12">
          <v-card outlined color="blue blue-lighten-1">
            <v-card-text>
              <div class="grid">
                <span> Pending Loan Amount </span>
                <span class="title wait--text">
                  {{ application[0].loan_amount }}
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card outlined color="blue blue-lighten-1">
            <v-card-text>
              <div class="grid">
                <span> Pending Loan Amount </span>
                <span class="title wait--text">Ksh1500</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card outlined color="blue blue-lighten-1">
            <v-card-text>
              <div class="grid">
                <span> Pending Loan Amount </span>
                <span class="title wait--text">Ksh1500</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: ["application"],
  components: {
    Navigation,
  },
};
</script>

<style>
</style>