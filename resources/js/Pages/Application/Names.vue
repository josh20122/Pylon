<template>
  <v-container class="fill-height" fluid>
    <v-row class="align-center justify-center">
      <v-col>
        <v-card max-width="950px" class="mx-auto">
          <v-form v-model="valid">
            <v-card-text class="mx-auto text-center">
              <div>
                <v-btn x-small class="green" icon
                  ><span class="white--text">1</span></v-btn
                ><span class="text-20">/</span>
                <v-btn small class="indigo" icon
                  ><span class="white--text">5</span></v-btn
                >
              </div>
            </v-card-text>
            <v-card-text>
              <v-container class="pa-0 fill-height">
                <v-row dense>
                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      dense
                      v-model="names.firstname"
                      :rules="rules.firstname"
                      :counter="10"
                      label="Legal first name"
                    ></v-text-field>
                  </v-col>

                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      dense
                      counter="10"
                      :rules="rules.middlename"
                      v-model="names.middlename"
                      label="Legal middle Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" class="px-sm-4" md="4">
                    <v-text-field
                      dense
                      counter="10"
                      :rules="rules.lastname"
                      v-model="names.lastname"
                      label="Legal last name"
                    ></v-text-field>
                  </v-col>
                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-radio-group
                      dense
                      v-model="names.gender"
                      color="indigo"
                      :rules="rules.gender"
                    >
                      <v-radio
                        color="indigo"
                        value="male"
                        label="Male"
                      ></v-radio>
                      <v-radio
                        color="indigo"
                        value="female"
                        label="Female"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="names.email"
                      :rules="rules.email"
                      label="E-Mail"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="names.idnumber"
                      :rules="rules.idnumber"
                      label="ID/Passport Number"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="names.phone"
                      :rules="rules.phone"
                      label="Phone Number"
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col class="px-sm-4" cols="12" sm="6" md="4">
                    <v-text-field
                      :rules="rules.dob"
                      v-model="names.dob"
                      type="date"
                      :error-messages="dateValidation"
                      label="Date Of Birth"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row v-if="names.phone">
                  <v-col>
                    <div>
                      <h1 class="underline text-black">Confirm Summary</h1>
                      <div class="grid text-xs text-gray-900">
                        <span
                          v-text="
                            'Name: ' +
                            names.firstname +
                            ' ' +
                            names.middlename +
                            ' ' +
                            names.lastname
                          "
                        ></span>
                        <span v-text="'E-Mail: ' + names.email"></span>
                        <span v-text="'Main Contact: ' + names.phone"></span>
                        <span
                          v-text="'Identification Document: ' + names.idnumber"
                        ></span>
                        <span v-text="'Date of Birth: ' + names.dob"></span>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider class="my-4"></v-divider>
            <v-row dense class="mx-auto pa-4 p-" justify="end">
              <div>
                <v-btn :disabled="!valid" @click="next" small color="success"
                  >next -Physical Address</v-btn
                >
              </div>
            </v-row>
          </v-form>
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
      today: new Date(),
      names: {
        firstname: null,
        lastname: null,
        middlename: null,
        gender: null,
        email: null,
        idnumber: null,
        dob: null,
        phone: null,
      },
      rules: {
        impared: [(v) => !!v || "This field is required"],
        phone: [
          (v) => !!v || "Phone number field is required",
          (v) => v.length >= 10 || "Field must not be less than 10 characters",
        ],
        dob: [(v) => !!v || "Date of birth field is required"],
        email: [
          (v) => !!v || "E-Mail field is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        idnumber: [(v) => !!v || "ID/Passport number is required"],
        firstname: [
          (v) => !!v || "Name is required",
          (v) => v.length <= 10 || "Name must be less than 10 characters",
        ],
        middlename: [
          (v) => !!v || "Middle name field is required",
          (v) =>
            v.length <= 10 || "Middle name must be less than 10 characters",
        ],
        lastname: [
          (v) => !!v || "Lastname field is required",
          (v) => v.length <= 10 || "Last name must be less than 10 characters",
        ],
        gender: [(v) => !!v || "Gender field is required"],
      },
    };
  },
  methods: {
    next() {
      this.$emit("names", this.names);
    },
  },
  computed: {
    dateValidation() {
      if (this.names.dob !== null) {
        if (
          new Date().getFullYear() - new Date(this.names.dob).getFullYear() <
          18
        ) {
          return "You must be 18 years and above to fill this form";
        }
      }
    },
  },
};
</script>

<style>
</style>