<template>
  <Navigation>
    <v-container class="fill-height">
      <v-row justify="center" no-gutters>
        <div>
          <div class="display-1">Settings</div>
        </div>
      </v-row>
      <v-row no-gutters>
        <v-col class="mx-auto">
          <v-card outlined max-width="500" class="mx-auto">
            <v-card-text>
              <v-form>
                <v-container class="pa-0">
                  <v-row dense>
                    <v-col cols="12">
                      <label for="">Total Interest in Percentage</label>
                      <v-text-field
                        placeholder="Interest"
                        outlined
                        v-model="form.interest"
                        color="blue"
                        :error-messages="errors.interest"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for=""
                        >Credit Score Deficit Deductions in Percentage</label
                      >
                      <v-text-field
                        placeholder="Interest"
                        outlined
                        v-model="form.credit_score_deductions"
                        color="blue"
                        :error-messages="errors.credit_score_deductions"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Miscellaneous Expenses in Percentage</label>
                      <v-text-field
                        placeholder="Interest"
                        outlined
                        v-model="form.misce_expenses"
                        color="blue"
                        :error-messages="errors.misce_expenses"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Minimum Savings in Percentage</label>
                      <v-text-field
                        placeholder="Interest"
                        outlined
                        v-model="form.minimum_savings"
                        color="blue"
                        :error-messages="errors.minimum_savings"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Contact Phone Number</label>
                      <v-text-field
                        label=""
                        placeholder="Contact Number"
                        outlined
                        v-model="form.contact"
                        color="blue"
                        :error-messages="errors.contact"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="px-4 pb-4">
                    <div>
                      <v-btn
                        elevation=""
                        color="grey darken-2"
                        class="wait--text"
                        v-text="'Reset'"
                        @click="reset"
                      ></v-btn>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                      <v-btn
                        elevation=""
                        color="info"
                        class="wait--text"
                        v-text="'Update Info'"
                        :disabled="loading"
                        @click="update"
                      ></v-btn>
                    </div>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          <div class="text-center"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-snackbar v-model="snackbar" timeout="2000">
            {{ message }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs"> Close </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation,
  },
  props: ["errors", "message", "snackbar", "settings"],
  data() {
    return {
      loading: false,
      snacktext: this.$props.snackbar,
      form: {
        interest: this.settings.interest,
        contact: this.settings.contact,
        misce_expenses: this.settings.misce_expenses,
        minimum_savings: this.settings.minimum_savings,
        credit_score_deductions: this.settings.credit_score_deductions,
      },
    };
  },
  methods: {
    reset() {
      this.form.interest = this.settings.interest;
      this.form.contact = this.settings.contact;
      this.form.misce_expenses = this.settings.misce_expenses;
      this.form.minimum_savings = this.settings.minimum_savings;
      this.form.credit_score_deductions = this.settings.credit_score_deductions;
    },
    update() {
      Inertia.post("/admin/settings", this.form, {
        preserveState: true,
        preserveScroll: true,
        onStart: () => {
          this.loading === true;
        },
        onFinish: () => {
          this.loading === false;
        },
      });
    },
  },
};
</script>

<style>
</style>