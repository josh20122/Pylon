<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-col>
        <v-card class="pt-4 mx-auto" outlined max-width="1000px">
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="income"
                      v-model="loan.income"
                      :rules="required"
                      label="Gross monthly income earnings in Ksh"
                    >
                    </v-select>
                  </v-col>
                  {{ amounts }}

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-if="loan.income"
                      type="number"
                      label="Loan Amount"
                      :rules="required"
                      :placeholder="amountPlaceholder"
                      :hint="amountPlaceholder"
                      v-model="loan.amount"
                      :error-messages="amountValidation"
                      dense
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="amountValid" sm="6" md="4">
                    <v-text-field
                      dense
                      outlined
                      v-model="loan.amount"
                      disabled
                      label="Confirm Total Loan amount"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="amountValid" sm="6" md="4">
                    <v-text-field
                      dense
                      outlined
                      v-model="crap.minimumSavings"
                      disabled
                      :label="
                        'Confirm Minimum savings - ' +
                        settings.minimum_savings * 100 +
                        '%'
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="amountValid" sm="6" md="4">
                    <v-text-field
                      dense
                      outlined
                      v-model="crap.miscellaneousExpenses"
                      disabled
                      :label="
                        'Confirm Miscellaneous expenses incured - ' +
                        settings.misce_expenses * 100 +
                        '%'
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="amountValid" sm="6" md="4">
                    <v-text-field
                      dense
                      outlined
                      v-model="crap.creditScoreDeficitDeductions"
                      disabled
                      :label="
                        'Confirm Credit score deficit deductions - ' +
                        settings.minimum_savings * 100 +
                        '%'
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="amountValid">
                    <v-text-field
                      dense
                      outlined
                      v-model="crap.minDeposit"
                      disabled
                      label="Confirm total minimum deposit/savings"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row v-if="amountValid">
                  <v-col>
                    <div class="grid" if>
                      <h1 class="underline text-black">LOANING SUMMARY</h1>
                      <div
                        class="grid text-xs font-light text-gray-900 space-y-2"
                      >
                        <span>Loan amount: {{ loan.amount }}</span>
                        <span>
                          {{ settings.minimum_savings * 100 }} % savings:
                          {{ crap.minimumSavings }}</span
                        >
                        <span>
                          {{ settings.misce_expenses * 100 }}% Miscellaneous
                          expenses:
                          {{ crap.miscellaneousExpenses }}
                        </span>
                        <span>
                          {{ settings.credit_score_deductions * 100 }}% Credit
                          facilitation:
                          {{ crap.creditScoreDeficitDeductions }}
                        </span>
                        <span
                          >Total expected savings: {{ crap.minDeposit }}</span
                        >
                      </div>
                    </div>
                    {{ this.$page.props.settings.minumum_savings }}
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-row dense class="mx-auto pa-4 p-" justify="space-between">
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
  props: ["pages", "settings"],
  data() {
    return {
      loan: {
        income: "",
        amount: null,
      },
      crap: {
        minimumSavings: null,
        miscellaneousExpenses: null,
        creditScoreDeficitDeductions: null,
        minDeposit: null,
      },
      valid: false,
      required: [(v) => !!v || "This field is required"],
      income: [
        "0 - Ksh20,000",
        "Ksh20,001 - ksh40,000",
        "Ksh40,001 - Ksh70,000",
        "Ksh70,001 - Ksh150,000",
        "Ksh150,001 and above",
      ],
    };
  },
  methods: {
    next() {
      this.$emit("loanAmount", this.loan);
    },
    back() {
      this.$emit("previous", "success");
    },
  },

  computed: {
    amounts() {
      if (this.loan.amount !== null) {
        this.crap.minimumSavings =
          this.loan.amount * this.settings.minimum_savings;
        this.crap.miscellaneousExpenses =
          this.loan.amount * this.settings.credit_score_deductions;
        this.crap.creditScoreDeficitDeductions =
          this.loan.amount * this.settings.credit_score_deductions;
        this.crap.minDeposit =
          this.loan.amount *
          (this.settings.minimum_savings +
            this.settings.misce_expenses +
            this.settings.credit_score_deductions);
      }
    },
    amountPlaceholder() {
      if (this.loan.income == "0 - Ksh20,000") {
        return "From Ksh10,000 to Ksh40,000";
      } else if (this.loan.income == "Ksh20,001 - ksh40,000") {
        return "From Ksh20,000 to Ksh70,000";
      } else if (this.loan.income == "Ksh40,001 - Ksh70,000") {
        return "From Ksh32,000 to Ksh100,000";
      } else if (this.loan.income == "Ksh70,001 - Ksh150,000") {
        return "From Ksh40,000 to Ksh125,000";
      } else if (this.loan.income == "Ksh150,001 and above") {
        return "From Ksh55,000 to Ksh200,000";
      } else {
        return "";
      }
    },
    amountValidation() {
      if (this.loan.amount !== null) {
        if (
          this.loan.income == "0 - Ksh20,000" &&
          (this.loan.amount < 10000 || this.loan.amount > 40000)
        ) {
          return "Input should range from 10000 to 40000";
        } else if (
          this.loan.income == "Ksh20,001 - ksh40,000" &&
          (this.loan.amount < 20000 || this.loan.amount > 70000)
        ) {
          return "Input should range from 10000 to 40000";
        } else if (
          this.loan.income == "Ksh40,001 - Ksh70,000" &&
          (this.loan.amount < 32000 || this.loan.amount > 100000)
        ) {
          return "Input should range from 32000 to 100000";
        } else if (
          this.loan.income == "Ksh70,001 - Ksh150,000" &&
          (this.loan.amount < 40000 || this.loan.amount > 125000)
        ) {
          return "Input should range from 40000 to 125000";
        } else if (
          this.loan.income == "Ksh150,001 and above" &&
          (this.loan.amount < 55000 || this.loan.amount > 200000)
        ) {
          return "Input should range from 55000 to 200000";
        } else {
          return null;
        }
      }
    },
    amountValid() {
      if (this.amountValidation === null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>