<template>
  <v-container class="fill-height">
    <v-row class="align-center justify-center">
      <v-col>
        <v-card max-width="950px" class="mx-auto">
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row class="pt-6">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      :rules="rules.city"
                      label="City"
                      dense
                      v-model="location.city"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      :rules="rules.county"
                      label="County"
                      dense
                      v-model="location.county"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      dense
                      :rules="rules.constituency"
                      label="Constituency"
                      v-model="location.constituency"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Ward"
                      dense
                      :rules="rules.ward"
                      v-model="location.ward"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      :rules="rules.address"
                      dense
                      label="Physical address"
                      v-model="location.address"
                    ></v-text-field>
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
      default: null,
    },
  },
  data() {
    return {
      valid: false,
      location: {
        county: "",
        constituency: "",
        ward: "",
        address: "",
        city: "",
      },
      rules: {
        city: [(v) => !!v || "This field is required"],

        county: [(v) => !!v || "This field is required"],
        constituency: [(v) => !!v || "This field is required"],
        ward: [(v) => !!v || "This field is required"],
        address: [(v) => !!v || "This field is required"],
      },
    };
  },
  methods: {
    next() {
      this.$emit("location", this.location);
    },
    back() {
      this.$emit("previous", "sucess");
    },
  },
};
</script>

<style>
</style>