<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <v-card outlined max-width="950px" class="mx-auto">
          <v-card-text>
            <v-form v-model="valid">
              <v-container class="fill-height pa-0">
                <v-row no-gutters>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-radio-group
                      v-model="employment.status"
                      label="Occupation status"
                      :rules="statusrules"
                      dense
                    >
                      <v-radio
                        v-for="state in status"
                        :label="state"
                        :key="state"
                        :value="state"
                        color="indigo"
                      >
                      </v-radio>
                    </v-radio-group>
                    <v-text-field
                      outlined
                      dense
                      :rules="statusrules"
                      v-if="employment.status == 'Other'"
                      label="Please type other option here"
                    ></v-text-field>
                  </v-col>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-select
                      small-chips
                      dense
                      deletable-chips
                      v-if="
                        employment.status == 'Unemployed' ||
                        employment.status == 'Student' ||
                        employment.status == 'Employed'
                      "
                      multiple
                      v-model="crap.industry"
                      :label="select"
                      :rules="statusrules"
                      :items="selectItems"
                    >
                    </v-select>
                  </v-col>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-text-field
                      dense
                      label="Name of the Institution"
                      v-model="crap.institution"
                      v-if="employment.status == 'Student'"
                      hint="Enter the name of your institution"
                      :rules="statusrules"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-text-field
                      label="Year of Study"
                      type="number"
                      dense
                      :rules="statusrules"
                      v-if="employment.status == 'Student'"
                      hint="eg, 1, 2"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-select
                      :items="years"
                      :label="yearsLabel"
                      v-if="yearsShow"
                      dense
                      small-chips
                      deletable-chips
                      :rules="statusrules"
                    >
                    </v-select>
                  </v-col>
                  <v-col class="px-sm-6" cols="12" sm="6" md="4">
                    <v-textarea
                      :label="
                        employment.status == 'Business'
                          ? 'Describe more about your business'
                          : 'Describe more about your job'
                      "
                      placeholder="Type here ..."
                      outlined
                      dense
                      rows="5"
                      v-if="
                        employment.status == 'Employed' ||
                        employment.status == 'Part time job' ||
                        employment.status == 'Other' ||
                        employment.status == 'Unemployed' ||
                        employment.status == 'Self Employed' ||
                        employment.status == 'Business'
                      "
                      :rules="statusrules"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-row dense class="mx-auto pa-4 pb-2" justify="space-between">
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
      employment: {
        status: "",
      },
      statusrules: [(v) => !!v || "This field is required"],
      years: [
        "Less than a year",
        "1 - 2 years",
        "2 - 5 years",
        "5 years and above",
      ],
      validation: {
        institution: null,
      },
      crap: {
        industry: null,
        institution: null,
      },
      status: [
        "Employed",
        "Unemployed",
        "Student",
        "Self Employed",
        "Business",
        "Part time job",
        "Other",
      ],
      sector: {
        employed: [
          "Education,Training and Library Occupations",
          "Architecture and Engineering Industry",
          "Protective Service Industry",
          "Construction and Extraction Industry",
          "Community and Social Services industry",
          "Art, Design, Entertainment industry",
          "Farming, Fishing and Forestry industry",
          "Resturant, Catering Industry",
          "Health sector",
          "Public Sector",
          "Salesperson",
          "Transport industry",
          "Gloceries",
          "Convenience store",
          "Beauty",
          "Maid",
          "Installation, Maintenance and Repair Industry",
          "Other",
        ],
        student: [
          "Grants",
          "Scholarships",
          "Aid and Other Resources from the government",
          "Aid for Military families",
          "Parent/Guardian",
          "Loans",
          "Aid for International Study",
          "Other",
        ],
        unemployed: [
          "Venture Capitalists",
          "Family and Friends",
          "Debt Finnancing",
          "Funding from Personal Savings",
          "Other",
        ],
      },
    };
  },
  methods: {},
  computed: {
    yearsLabel() {
      if (this.employment.status == "Employed") {
        return "How long have you been employed?";
      } else if (this.employment.status == "Unemployed") {
        return "How long have you been Unemployed";
      } else if (this.employment.status == "Self Employed") {
        return "How long have you been Self-Employed";
      }
    },
    yearsShow() {
      if (
        this.employment.status == "Employed" ||
        this.employment.status == "Unemployed" ||
        this.employment.status == "Self Employed"
      ) {
        return true;
      }
      return false;
    },
    select() {
      if (this.employment.status == "Employed") {
        return "Employment sectors";
      } else if (this.employment.status == "Student") {
        return "Where do you get financial support as a student";
      } else if (this.employment.status == "Unemployed") {
        return "Where do you get your financial support";
      }
    },
    selectItems() {
      if (this.employment.status == "Employed") {
        return this.sector.employed;
      } else if (this.employment.status == "Student") {
        return this.sector.student;
      } else if (this.employment.status == "Unemployed") {
        return this.sector.unemployed;
      }
    },
    selectvalidate() {
      if (
        this.employment.status == "Employed" ||
        this.employment.status == "student"
      ) {
        if (this.crap.industry === null) {
          return "This Field id required";
        }
      }
    },
  },
  methods: {
    next() {
      this.$emit("employmentStatus", this.employment);
    },
    back() {
      this.$emit("previous", "success");
    },
  },
};
</script>

<style>
</style>