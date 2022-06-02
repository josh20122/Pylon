<template>
  <v-container class="">
    <v-row>
      <v-col>
        <v-card max-width="950px" class="mx-auto">
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row class="pt-6">
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="monthNames"
                      :rules="rules.required"
                      v-model="month"
                      dense
                      label="Choose Loan repayment period in month(s)"
                    >
                    </v-select>
                  </v-col>
                  <v-col v-if="repayment.month" cols="12" sm="6" md="4">
                    <v-text-field
                      disabled
                      dense
                      outlined
                      :value="totaLoanRepayment"
                      label="Confirm Total loan repayment required(Ksh)"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col v-if="repayment.month" cols="12" sm="6" md="4">
                    <v-text-field
                      disabled
                      dense
                      outlined
                      :value="monthlyInstallments"
                      label="Confirm Monthly installments required for each month"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col v-if="repayment.month" cols="12" sm="6" md="4">
                    <v-text-field
                      dense
                      outlined
                      disabled
                      :value="totaLoanInterest"
                      label="Confirm Total loan interest at the end of the repayment period"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div v-if="repayment.month">
                      <h1 class="underline text-black">Repayment Summary</h1>
                      <div
                        class="grid space-y-1 text-xs font-light text-gray-900"
                      >
                        <span
                          >Total loan repayments: Ksh{{
                            repayment.totalRepayment
                          }}
                        </span>
                        <span
                          >Monthly installments: Ksh{{
                            repayment.monthlyInstallments
                          }}
                        </span>
                        <span
                          >Total interest for {{ repayment.month }} months:
                          Ksh{{ repayment.totaLoanInterest }}</span
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-row dense class="mx-auto pa-4 mb-2" justify="space-between">
            <div>
              <v-btn
                small
                elevation=""
                class="wait--text"
                v-text="pages.back"
                color="grey darken-4"
              ></v-btn>
            </div>
            <div>
              <v-btn
                v-text="pages.next"
                :disabled="!valid"
                @click="next"
                small
                color="success"
              ></v-btn>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    loanAmount: {
      required: false,
    },
    pages: {
      type: Object,
      required: false,
      default: null,
    },
    settings: {
      required: false,
    },
  },
  methods: {
    next() {
      this.$emit("repaymentDetails", this.repayment);
    },
    back() {
      this.$emit("previous", "success");
    },
  },
  data() {
    return {
      valid: false,
      rules: {
        required: [(v) => !!v || "This field is required"],
      },
      month: null,
      repayment: {
        interest: this.settings.interest,
        month: null,
        totalRepayment: null,
        monthlyInstallments: null,
        totaLoanInterest: null,
      },
      monthValues: "",
      monthNames: [
        "3 month(s)",
        "4 month(s)",
        "5 month(s)",
        "6 month(s)",
        "7 month(s)",
        "8 month(s)",
        "9 month(s)",
        "10 month(s)",
        "11 month(s)",
        "12 month(s)",
      ],
    };
  },
  computed: {
    totaLoanRepayment() {
      this.repayment.totalRepayment = (
        Math.pow(1 + this.repayment.interest / 100, this.repayment.month) *
        this.loanAmount
      ).toFixed(2);
      return (
        Math.pow(1 + this.repayment.interest / 100, this.repayment.month) *
        this.loanAmount
      ).toFixed(2);
    },
    monthlyInstallments() {
      this.repayment.monthlyInstallments = (
        this.repayment.totalRepayment / this.repayment.month
      ).toFixed(2);
      return (this.repayment.totalRepayment / this.repayment.month).toFixed(2);
    },
    totaLoanInterest() {
      this.repayment.totaLoanInterest = (
        this.repayment.totalRepayment - this.loanAmount
      ).toFixed(2);
      return (this.repayment.totalRepayment - this.loanAmount).toFixed(2);
    },
  },
  watch: {
    month(val) {
      if (val == "3 month(s)") {
        this.repayment.month = 3;
      } else if (val == "4 month(s)") {
        this.repayment.month = 4;
      } else if (val == "5 month(s)") {
        this.repayment.month = 5;
      } else if (val == "6 month(s)") {
        this.repayment.month = 6;
      } else if (val == "7 month(s)") {
        this.repayment.month = 7;
      } else if (val == "8 month(s)") {
        this.repayment.month = 8;
      } else if (val == "9 month(s)") {
        this.repayment.month = 9;
      } else if (val == "10 month(s)") {
        this.repayment.month = 10;
      } else if (val == "11 month(s)") {
        this.repayment.month = 11;
      } else if (val == "12 month(s)") {
        this.repayment.month = 12;
      }
    },
  },
};
</script>

<style>
</style>