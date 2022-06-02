<template>
  <Navigation>
    <v-container class="fill-height">
      <v-row dense>
        <v-col v-for="data in statistics" :key="data.text" cols="12">
          <v-card color="secondary" outlined elevation="15">
            <v-card-text>
              <div class="grid">
                <div
                  class="text-lg font-bold wait--text"
                  v-text="data.text"
                ></div>
                <span class="display-2 wait--text" v-text="data.amount"> </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: { Navigation },
  props: ["stats"],
  data() {
    return {
      statistics: [
        { text: "Total Users", amount: this.stats.total_users + " Users" },
        { text: "Total Earnings", amount: "Ksh " + this.stats.total_earnings },
        {
          text: "Expected Earnings",
          amount: "Ksh " + this.stats.expected_earnings,
        },
        {
          text: "Total Applications",
          amount: this.stats.total_loan_applications,
        },
        {
          text: "Total Application Amount",
          amount: "Ksh " + this.stats.total_loans_given,
        },
        {
          text: "Total Withdrawals",
          amount: "Ksh " + this.stats.total_withdrawals,
        },
      ],
    };
  },
};
</script>

<style>
</style>