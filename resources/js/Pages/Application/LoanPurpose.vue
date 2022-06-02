<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <v-card max-width="950px" class="mx-auto">
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="fill-height pa-0">
                <v-row no-gutters>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group
                      v-model="purpose.purpose"
                      :rules="descriptionRules"
                    >
                      <v-radio
                        v-for="expense in expenses"
                        :key="expense"
                        :label="expense"
                        color="indigo"
                        :value="expense"
                        :rules="descriptionRules"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      small-chips
                      v-if="purpose.purpose"
                      multiple
                      :rules="descriptionRules"
                      :items="items"
                      :label="label"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      v-if="purpose.purpose"
                      :rules="descriptionRules"
                      label="Explain a little about the loan purpose"
                      placeholder="Type here..."
                      outlined
                      rows="5"
                    >
                    </v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"> </v-col>
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
  props: {
    pages: {
      required: false,
      default: null,
    },
  },
  methods: {
    next() {
      this.$emit("loanPurpose", this.purpose);
    },
    back() {
      this.$emit("previous", "success");
    },
  },
  data() {
    return {
      valid: false,
      purpose: {
        purpose: "",
      },
      bills: [
        "Mortage(s).",
        "Rent.",
        "Property taxes (if paying monthly).",
        "Strata fee / condo fee.",
        "House / tenant insuarance.",
        "Utility bills(cable,cell,electricity,water,etc).",
        "Lease / car loan payment.",
        "Vehicle insuarance (if paying monthly).",
        "Gas Bill.",
        "Water and Sewage.",
        "Trash and Recycling",
        "Internet, Telephone",
      ],
      personal: [
        "Travel",
        "Homeowners or renters insuarence.",
        "Auto Insuarance",
        "Out-of-pocket medical costs.",
        "Health insuarance",
        "Electricity and natural gas",
        "Mortage/rent",
        "Medical expenses",
        "Home loan",
        "Car loan",
        "Special Occasion",
        "Education Purpose",
        "Other",
      ],
      business: [
        "Travel for business",
        "Start a business",
        "Grow a business",
        "Rent",
        "Payroll (employees and freelance help)",
        "insuarance",
        "Company car",
        "Software",
        "General business growth",
      ],
      descriptionRules: [(v) => !!v || "This field is required"],
      expenseRules: [(v) => !!v || "This field is required"],
      expenses: ["Business Expense", "Personal Expense", "Paying Bills"],
    };
  },
  computed: {
    label() {
      if (this.purpose.purpose == "Business Expense") {
        return "Select business Expenses?";
      } else if (this.purpose.purpose == "Personal Expense") {
        return "Select personal expenses?";
      } else if (this.purpose.purpose == "Paying Bills") {
        return "Fixed bill to cater for?";
      }
    },
    items() {
      if (this.purpose.purpose == "Business Expense") {
        return this.bills;
      } else if (this.purpose.purpose == "Personal Expense") {
        return this.personal;
      } else if (this.purpose.purpose == "Paying Bills") {
        return this.business;
      }
    },
  },
};
</script>

<style>
</style>