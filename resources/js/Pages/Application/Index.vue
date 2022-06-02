<template>
  <v-app>
    <v-main>
      <v-btn small @click="currentPage.number++" elevation="" color=""
        >toggle +1</v-btn
      >
      <v-btn @click="currentPage.number--" small elevation="" color=""
        >toggle -1</v-btn
      >

      {{ form.aboutUs }}

      <div class="grid items-center min-h-full">
        <Transition name="fade">
          <keep-alive>
            <Names
              v-if="currentPage.number === 1"
              :pages="currentPage"
              class=""
              @names="namesPage"
            />
          </keep-alive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <Location
              @previous="locationBack"
              v-if="currentPage.number === 2"
              :pages="currentPage"
              class=""
              @next="location"
              @location="location"
            />
          </KeepAlive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <EmploymentStatus
              :pages="currentPage"
              class=""
              v-if="currentPage.number === 3"
              @previous="employmentStatusBack"
              @employmentStatus="employmentStatus"
            />
          </KeepAlive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <LoanPurpose
              :pages="currentPage"
              class=""
              v-if="currentPage.number === 4"
              @loanPurpose="loanPurpose"
              @previous="loanPurposeBack"
            />
          </KeepAlive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <LoanAmount
              :settings="settings"
              :pages="currentPage"
              v-if="currentPage.number === 5"
              class=""
              @loanAmount="loanAmount"
              @previous="loanAmountBack"
            />
          </KeepAlive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <LoanRepaymentDetails
              :settings="settings"
              @repaymentDetails="repaymentDetails"
              @previous="repaymentDetailsBack"
              :loanAmount="form.loanAmount"
              v-if="currentPage.number === 6"
              :pages="currentPage"
              class=""
            />
          </KeepAlive>
        </Transition>

        <Transition name="fade">
          <KeepAlive>
            <AboutUs
              v-if="currentPage.number === 7"
              :pages="currentPage"
              class=""
              @aboutUs="aboutUs"
            />
          </KeepAlive>
        </Transition>
        <Transition name="fade">
          <KeepAlive>
            <Submission
              :form="form"
              v-if="currentPage.number === 8"
              :pages="currentPage"
            />
          </KeepAlive>
        </Transition>
      </div>

      <div></div>
    </v-main>
  </v-app>
</template>

<script>
import Names from "./Names.vue";
import LoanRepaymentDetails from "./LoanRepaymentDetails.vue";
import Location from "./Location.vue";
import LoanPurpose from "./LoanPurpose.vue";
import EmploymentStatus from "./EmploymentStatus.vue";
import LoanAmount from "./LoanAmount.vue";
import AboutUs from "./AboutUs.vue";
import Submission from "./Submission.vue";
import { Inertia } from "@inertiajs/inertia";
export default {
  components: {
    Names,
    Submission,
    AboutUs,
    LoanRepaymentDetails,
    Location,
    LoanPurpose,
    EmploymentStatus,
    LoanAmount,
  },
  props: ["settings"],

  data() {
    return {
      show: 1,
      form: {
        firstname: null,
        middlename: null,
        lastname: null,
        gender: null,
        email: null,
        idnumber: null,
        dob: null,
        phone: null,

        county: null,
        constituency: null,
        ward: null,
        address: null,
        city: null,

        status: null,

        purpose: null,

        income: null,
        loanAmount: null,

        interest: null,
        month: null,
        totalRepayment: null,
        monthlyInstallments: null,
        totaLoanInterest: null,

        otherLoans: null,
        AboutUs: null,
      },
      currentPage: {
        number: 5,
        back: "Test back",
        next: "success",
      },
      names: null,
    };
  },
  methods: {
    setPage(number, next, back) {
      this.currentPage.number = number;
      this.currentPage.back = back;
      this.currentPage.next = next;
    },
    namesPage(names) {
      this.form.firstname = names.firstname;
      this.form.middlename = names.middlename;
      this.form.lastname = names.lastname;
      this.form.gender = names.gender;
      this.form.email = names.email;
      this.form.idnumber = names.idnumber;
      this.form.dob = names.dob;
      this.form.phone = names.phone;
      console.log(this.form.firstname);
      this.setPage(2, "occupation status", "back");
    },
    location(location) {
      this.setPage(3, "loan purpose page", "back");
      this.form.county = location.county;
      this.form.constituency = location.constituency;
      this.form.ward = location.ward;
      this.form.address = location.address;
      this.form.city = location.city;
    },
    employmentStatus(status) {
      this.setPage(4, "loan decision page", "back");
      this.form.status = status.status;
    },
    loanPurpose(purpose) {
      this.setPage(5, "loan repayment details", "back");
      this.form.purpose = purpose.purpose;
    },
    loanAmount(amount) {
      this.setPage(6, "submission page", "back");
      this.form.loanAmount = amount.amount;

      this.form.income = amount.income;
    },
    repaymentDetails(repayment) {
      this.setPage(7, "submit loan information", "back");
      this.form.interest = repayment.interest;
      this.form.month = repayment.month;
      this.form.totalRepayment = repayment.totalRepayment;
      this.form.monthlyInstallments = repayment.monthlyInstallments;
      this.form.totaLoanInterest = repayment.totaLoanInterest;
    },
    aboutUs(about) {
      this.form.otherLoans = about.otherLoans;
      this.form.AboutUs = about.aboutUs;
      this.setPage(8, " success", "success ");
      Inertia.post("/application", this.form);
    },

    locationBack() {
      this.setPage(1, "pysical address page", "");
    },
    employmentStatusBack() {
      this.setPage(2, "Next - Occupation page", "back ");
    },
    loanPurposeBack() {
      this.setPage(3, "loan purpose page", "back");
    },
    loanAmountBack() {
      this.setPage(4, "loan decision page", "back");
    },
    repaymentDetailsBack() {
      this.setPage(5, "loan repayment details", "back");
    },
    AboutUsBack() {
      this.setPage(6, "submission page", "back");
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>