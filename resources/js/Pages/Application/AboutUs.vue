<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row class="pt-6">
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="Do you ave any other loan(s)?"
                      v-model="about.otherLoans"
                      :items="otherLoans"
                      :rules="required"
                      small-chips
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="aboutUs"
                      :rules="required"
                      small-chips
                      label="How did you know about us?"
                      v-model="about.aboutUs"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-checkbox value="accepted" :rules="required">
                      <template v-slot:label>
                        <div>
                          I agree to EML
                          <Link class="text-indigo-700 underline" href="/terms"
                            >terms & conditions</Link
                          >
                        </div>
                      </template>
                    </v-checkbox>
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
  props: {
    pages: {
      required: false,
    },
  },
  methods: {
    next() {
      this.$emit("aboutUs", this.about);
    },
    back() {
      this.$emit("aboutUsBack", "success");
    },
  },
  data() {
    return {
      required: [(v) => !!v || "This field is required"],
      valid: false,
      about: {
        aboutUs: null,
        otherLoans: null,
      },
      otherLoans: ["NO", "YES", "NOT SURE", "AM IN CRB"],
      aboutUs: [
        "Tv news and commercial",
        "Whats-app invite",
        "Telegram invite",
        "Facebook",
        "SMS information",
        "My research",
        "Other",
      ],
    };
  },
};
</script>

<style>
</style>