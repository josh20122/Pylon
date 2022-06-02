<template>
  <div>
    <v-card elevation="10">
      <v-card-text class="deepblue text-center py-6">
        <div class="mx-auto text-xl white--text">How Much Do You Need</div>
      </v-card-text>
      <v-card-text class="pt-10">
        <div class="px-8">
          <v-row no-gutters justify="space-between" class="mx-auto">
            <v-col>
              <div class="flex justify-space-between">
                <span>Ksh5,000</span>
                <span v-text="'Ksh ' + amount"></span>
                <span>Ksh150,000</span>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-slider
              inverse-label
              persistent-hint
              color="secondary"
              class="secondary--text"
              v-model="amount"
              min="0"
              track-color="grey"
              max="150000"
            >
            </v-slider>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="flex justify-space-between">
                <span>1 Month</span>
                <span v-text="months + ' Month(s)'"></span>
                <span>12 Months</span>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-slider
              color="secondary"
              persistent-hint
              v-model="months"
              min="1"
              max="12"
              track-color="grey darken-2"
            >
            </v-slider>
          </v-row>
          <v-row>
            <v-col>
              <div class="grid space-y-6">
                <div class="grid text-lg space-y-5">
                  <div class="flex justify-space-between">
                    <div>Pay Monthly</div>
                    <div class="grey--text text--darken-4">
                      Ksh {{ monthlyPay }}
                    </div>
                  </div>
                  <v-divider></v-divider>
                </div>
                <div class="grid text-lg space-y-5">
                  <div class="flex justify-space-between">
                    <div>Term of Use</div>
                    <div class="grey--text text--darken-4">
                      {{ months }} Month(s)
                    </div>
                  </div>
                  <v-divider></v-divider>
                </div>
                <div class="grid text-lg space-y-5">
                  <div class="flex justify-space-between">
                    <div>Amount to pay Back</div>
                    <div class="grey--text text--darken-4">
                      Ksh {{ totalPay }}
                    </div>
                  </div>
                  <div class="mb-10">
                    <Link href="/application">
                      <v-btn elevation="" large block color="secondary"
                        >Apply For Loan</v-btn
                      >
                    </Link>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interest: this.$page.props.settings.interest,
      amount: 50000,
      months: 2,
    };
  },
  computed: {
    totalPay() {
      return (Math.pow(1 + this.interest, this.months) * this.amount).toFixed(
        0
      );
    },
    monthlyPay() {
      return (
        (Math.pow(1 + this.interest, this.months) * this.amount) /
        this.months
      ).toFixed(0);
    },
  },
};
</script>

<style>
</style>