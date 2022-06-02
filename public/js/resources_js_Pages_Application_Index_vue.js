"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pages: {
      required: false
    }
  },
  methods: {
    next: function next() {
      this.$emit("aboutUs", this.about);
    },
    back: function back() {
      this.$emit("aboutUsBack", "success");
    }
  },
  data: function data() {
    return {
      required: [function (v) {
        return !!v || "This field is required";
      }],
      valid: false,
      about: {
        aboutUs: null,
        otherLoans: null
      },
      otherLoans: ["NO", "YES", "NOT SURE", "AM IN CRB"],
      aboutUs: ["Tv news and commercial", "Whats-app invite", "Telegram invite", "Facebook", "SMS information", "My research", "Other"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  props: {
    pages: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      valid: false,
      employment: {
        status: ""
      },
      statusrules: [function (v) {
        return !!v || "This field is required";
      }],
      years: ["Less than a year", "1 - 2 years", "2 - 5 years", "5 years and above"],
      validation: {
        institution: null
      },
      crap: {
        industry: null,
        institution: null
      },
      status: ["Employed", "Unemployed", "Student", "Self Employed", "Business", "Part time job", "Other"],
      sector: {
        employed: ["Education,Training and Library Occupations", "Architecture and Engineering Industry", "Protective Service Industry", "Construction and Extraction Industry", "Community and Social Services industry", "Art, Design, Entertainment industry", "Farming, Fishing and Forestry industry", "Resturant, Catering Industry", "Health sector", "Public Sector", "Salesperson", "Transport industry", "Gloceries", "Convenience store", "Beauty", "Maid", "Installation, Maintenance and Repair Industry", "Other"],
        student: ["Grants", "Scholarships", "Aid and Other Resources from the government", "Aid for Military families", "Parent/Guardian", "Loans", "Aid for International Study", "Other"],
        unemployed: ["Venture Capitalists", "Family and Friends", "Debt Finnancing", "Funding from Personal Savings", "Other"]
      }
    };
  },
  methods: {},
  computed: {
    yearsLabel: function yearsLabel() {
      if (this.employment.status == "Employed") {
        return "How long have you been employed?";
      } else if (this.employment.status == "Unemployed") {
        return "How long have you been Unemployed";
      } else if (this.employment.status == "Self Employed") {
        return "How long have you been Self-Employed";
      }
    },
    yearsShow: function yearsShow() {
      if (this.employment.status == "Employed" || this.employment.status == "Unemployed" || this.employment.status == "Self Employed") {
        return true;
      }

      return false;
    },
    select: function select() {
      if (this.employment.status == "Employed") {
        return "Employment sectors";
      } else if (this.employment.status == "Student") {
        return "Where do you get financial support as a student";
      } else if (this.employment.status == "Unemployed") {
        return "Where do you get your financial support";
      }
    },
    selectItems: function selectItems() {
      if (this.employment.status == "Employed") {
        return this.sector.employed;
      } else if (this.employment.status == "Student") {
        return this.sector.student;
      } else if (this.employment.status == "Unemployed") {
        return this.sector.unemployed;
      }
    },
    selectvalidate: function selectvalidate() {
      if (this.employment.status == "Employed" || this.employment.status == "student") {
        if (this.crap.industry === null) {
          return "This Field id required";
        }
      }
    }
  }
}, "methods", {
  next: function next() {
    this.$emit("employmentStatus", this.employment);
  },
  back: function back() {
    this.$emit("previous", "success");
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Names_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Names.vue */ "./resources/js/Pages/Application/Names.vue");
/* harmony import */ var _LoanRepaymentDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoanRepaymentDetails.vue */ "./resources/js/Pages/Application/LoanRepaymentDetails.vue");
/* harmony import */ var _Location_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location.vue */ "./resources/js/Pages/Application/Location.vue");
/* harmony import */ var _LoanPurpose_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoanPurpose.vue */ "./resources/js/Pages/Application/LoanPurpose.vue");
/* harmony import */ var _EmploymentStatus_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmploymentStatus.vue */ "./resources/js/Pages/Application/EmploymentStatus.vue");
/* harmony import */ var _LoanAmount_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoanAmount.vue */ "./resources/js/Pages/Application/LoanAmount.vue");
/* harmony import */ var _AboutUs_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AboutUs.vue */ "./resources/js/Pages/Application/AboutUs.vue");
/* harmony import */ var _Submission_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Submission.vue */ "./resources/js/Pages/Application/Submission.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Names: _Names_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Submission: _Submission_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    AboutUs: _AboutUs_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    LoanRepaymentDetails: _LoanRepaymentDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Location: _Location_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LoanPurpose: _LoanPurpose_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EmploymentStatus: _EmploymentStatus_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LoanAmount: _LoanAmount_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["settings"],
  data: function data() {
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
        AboutUs: null
      },
      currentPage: {
        number: 5,
        back: "Test back",
        next: "success"
      },
      names: null
    };
  },
  methods: {
    setPage: function setPage(number, next, back) {
      this.currentPage.number = number;
      this.currentPage.back = back;
      this.currentPage.next = next;
    },
    namesPage: function namesPage(names) {
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
    location: function location(_location) {
      this.setPage(3, "loan purpose page", "back");
      this.form.county = _location.county;
      this.form.constituency = _location.constituency;
      this.form.ward = _location.ward;
      this.form.address = _location.address;
      this.form.city = _location.city;
    },
    employmentStatus: function employmentStatus(status) {
      this.setPage(4, "loan decision page", "back");
      this.form.status = status.status;
    },
    loanPurpose: function loanPurpose(purpose) {
      this.setPage(5, "loan repayment details", "back");
      this.form.purpose = purpose.purpose;
    },
    loanAmount: function loanAmount(amount) {
      this.setPage(6, "submission page", "back");
      this.form.loanAmount = amount.amount;
      this.form.income = amount.income;
    },
    repaymentDetails: function repaymentDetails(repayment) {
      this.setPage(7, "submit loan information", "back");
      this.form.interest = repayment.interest;
      this.form.month = repayment.month;
      this.form.totalRepayment = repayment.totalRepayment;
      this.form.monthlyInstallments = repayment.monthlyInstallments;
      this.form.totaLoanInterest = repayment.totaLoanInterest;
    },
    aboutUs: function aboutUs(about) {
      this.form.otherLoans = about.otherLoans;
      this.form.AboutUs = about.aboutUs;
      this.setPage(8, " success", "success ");
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__.Inertia.post("/application", this.form);
    },
    locationBack: function locationBack() {
      this.setPage(1, "pysical address page", "");
    },
    employmentStatusBack: function employmentStatusBack() {
      this.setPage(2, "Next - Occupation page", "back ");
    },
    loanPurposeBack: function loanPurposeBack() {
      this.setPage(3, "loan purpose page", "back");
    },
    loanAmountBack: function loanAmountBack() {
      this.setPage(4, "loan decision page", "back");
    },
    repaymentDetailsBack: function repaymentDetailsBack() {
      this.setPage(5, "loan repayment details", "back");
    },
    AboutUsBack: function AboutUsBack() {
      this.setPage(6, "submission page", "back");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["pages", "settings"],
  data: function data() {
    return {
      loan: {
        income: "",
        amount: null
      },
      crap: {
        minimumSavings: null,
        miscellaneousExpenses: null,
        creditScoreDeficitDeductions: null,
        minDeposit: null
      },
      valid: false,
      required: [function (v) {
        return !!v || "This field is required";
      }],
      income: ["0 - Ksh20,000", "Ksh20,001 - ksh40,000", "Ksh40,001 - Ksh70,000", "Ksh70,001 - Ksh150,000", "Ksh150,001 and above"]
    };
  },
  methods: {
    next: function next() {
      this.$emit("loanAmount", this.loan);
    },
    back: function back() {
      this.$emit("previous", "success");
    }
  },
  computed: {
    amounts: function amounts() {
      if (this.loan.amount !== null) {
        this.crap.minimumSavings = this.loan.amount * this.settings.minimum_savings;
        this.crap.miscellaneousExpenses = this.loan.amount * this.settings.credit_score_deductions;
        this.crap.creditScoreDeficitDeductions = this.loan.amount * this.settings.credit_score_deductions;
        this.crap.minDeposit = this.loan.amount * (this.settings.minimum_savings + this.settings.misce_expenses + this.settings.credit_score_deductions);
      }
    },
    amountPlaceholder: function amountPlaceholder() {
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
    amountValidation: function amountValidation() {
      if (this.loan.amount !== null) {
        if (this.loan.income == "0 - Ksh20,000" && (this.loan.amount < 10000 || this.loan.amount > 40000)) {
          return "Input should range from 10000 to 40000";
        } else if (this.loan.income == "Ksh20,001 - ksh40,000" && (this.loan.amount < 20000 || this.loan.amount > 70000)) {
          return "Input should range from 10000 to 40000";
        } else if (this.loan.income == "Ksh40,001 - Ksh70,000" && (this.loan.amount < 32000 || this.loan.amount > 100000)) {
          return "Input should range from 32000 to 100000";
        } else if (this.loan.income == "Ksh70,001 - Ksh150,000" && (this.loan.amount < 40000 || this.loan.amount > 125000)) {
          return "Input should range from 40000 to 125000";
        } else if (this.loan.income == "Ksh150,001 and above" && (this.loan.amount < 55000 || this.loan.amount > 200000)) {
          return "Input should range from 55000 to 200000";
        } else {
          return null;
        }
      }
    },
    amountValid: function amountValid() {
      if (this.amountValidation === null) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pages: {
      required: false,
      "default": null
    }
  },
  methods: {
    next: function next() {
      this.$emit("loanPurpose", this.purpose);
    },
    back: function back() {
      this.$emit("previous", "success");
    }
  },
  data: function data() {
    return {
      valid: false,
      purpose: {
        purpose: ""
      },
      bills: ["Mortage(s).", "Rent.", "Property taxes (if paying monthly).", "Strata fee / condo fee.", "House / tenant insuarance.", "Utility bills(cable,cell,electricity,water,etc).", "Lease / car loan payment.", "Vehicle insuarance (if paying monthly).", "Gas Bill.", "Water and Sewage.", "Trash and Recycling", "Internet, Telephone"],
      personal: ["Travel", "Homeowners or renters insuarence.", "Auto Insuarance", "Out-of-pocket medical costs.", "Health insuarance", "Electricity and natural gas", "Mortage/rent", "Medical expenses", "Home loan", "Car loan", "Special Occasion", "Education Purpose", "Other"],
      business: ["Travel for business", "Start a business", "Grow a business", "Rent", "Payroll (employees and freelance help)", "insuarance", "Company car", "Software", "General business growth"],
      descriptionRules: [function (v) {
        return !!v || "This field is required";
      }],
      expenseRules: [function (v) {
        return !!v || "This field is required";
      }],
      expenses: ["Business Expense", "Personal Expense", "Paying Bills"]
    };
  },
  computed: {
    label: function label() {
      if (this.purpose.purpose == "Business Expense") {
        return "Select business Expenses?";
      } else if (this.purpose.purpose == "Personal Expense") {
        return "Select personal expenses?";
      } else if (this.purpose.purpose == "Paying Bills") {
        return "Fixed bill to cater for?";
      }
    },
    items: function items() {
      if (this.purpose.purpose == "Business Expense") {
        return this.bills;
      } else if (this.purpose.purpose == "Personal Expense") {
        return this.personal;
      } else if (this.purpose.purpose == "Paying Bills") {
        return this.business;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    loanAmount: {
      required: false
    },
    pages: {
      type: Object,
      required: false,
      "default": null
    },
    settings: {
      required: false
    }
  },
  methods: {
    next: function next() {
      this.$emit("repaymentDetails", this.repayment);
    },
    back: function back() {
      this.$emit("previous", "success");
    }
  },
  data: function data() {
    return {
      valid: false,
      rules: {
        required: [function (v) {
          return !!v || "This field is required";
        }]
      },
      month: null,
      repayment: {
        interest: this.settings.interest,
        month: null,
        totalRepayment: null,
        monthlyInstallments: null,
        totaLoanInterest: null
      },
      monthValues: "",
      monthNames: ["3 month(s)", "4 month(s)", "5 month(s)", "6 month(s)", "7 month(s)", "8 month(s)", "9 month(s)", "10 month(s)", "11 month(s)", "12 month(s)"]
    };
  },
  computed: {
    totaLoanRepayment: function totaLoanRepayment() {
      this.repayment.totalRepayment = (Math.pow(1 + this.repayment.interest / 100, this.repayment.month) * this.loanAmount).toFixed(2);
      return (Math.pow(1 + this.repayment.interest / 100, this.repayment.month) * this.loanAmount).toFixed(2);
    },
    monthlyInstallments: function monthlyInstallments() {
      this.repayment.monthlyInstallments = (this.repayment.totalRepayment / this.repayment.month).toFixed(2);
      return (this.repayment.totalRepayment / this.repayment.month).toFixed(2);
    },
    totaLoanInterest: function totaLoanInterest() {
      this.repayment.totaLoanInterest = (this.repayment.totalRepayment - this.loanAmount).toFixed(2);
      return (this.repayment.totalRepayment - this.loanAmount).toFixed(2);
    }
  },
  watch: {
    month: function month(val) {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pages: {
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      valid: false,
      location: {
        county: "",
        constituency: "",
        ward: "",
        address: "",
        city: ""
      },
      rules: {
        city: [function (v) {
          return !!v || "This field is required";
        }],
        county: [function (v) {
          return !!v || "This field is required";
        }],
        constituency: [function (v) {
          return !!v || "This field is required";
        }],
        ward: [function (v) {
          return !!v || "This field is required";
        }],
        address: [function (v) {
          return !!v || "This field is required";
        }]
      }
    };
  },
  methods: {
    next: function next() {
      this.$emit("location", this.location);
    },
    back: function back() {
      this.$emit("previous", "sucess");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pages: {
      required: false,
      "default": null
    }
  },
  data: function data() {
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
        phone: null
      },
      rules: {
        impared: [function (v) {
          return !!v || "This field is required";
        }],
        phone: [function (v) {
          return !!v || "Phone number field is required";
        }, function (v) {
          return v.length >= 10 || "Field must not be less than 10 characters";
        }],
        dob: [function (v) {
          return !!v || "Date of birth field is required";
        }],
        email: [function (v) {
          return !!v || "E-Mail field is required";
        }, function (v) {
          return /.+@.+\..+/.test(v) || "E-mail must be valid";
        }],
        idnumber: [function (v) {
          return !!v || "ID/Passport number is required";
        }],
        firstname: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v.length <= 10 || "Name must be less than 10 characters";
        }],
        middlename: [function (v) {
          return !!v || "Middle name field is required";
        }, function (v) {
          return v.length <= 10 || "Middle name must be less than 10 characters";
        }],
        lastname: [function (v) {
          return !!v || "Lastname field is required";
        }, function (v) {
          return v.length <= 10 || "Last name must be less than 10 characters";
        }],
        gender: [function (v) {
          return !!v || "Gender field is required";
        }]
      }
    };
  },
  methods: {
    next: function next() {
      this.$emit("names", this.names);
    }
  },
  computed: {
    dateValidation: function dateValidation() {
      if (this.names.dob !== null) {
        if (new Date().getFullYear() - new Date(this.names.dob).getFullYear() < 18) {
          return "You must be 18 years and above to fill this form";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    form: {
      type: Object,
      required: false
    }
  },
  mounted: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active[data-v-0142975a] {\n  transition: opacity 1s;\n}\n.fade-leave-active[data-v-0142975a] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-0142975a], .fade-leave-to[data-v-0142975a] /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_0142975a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_0142975a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_0142975a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Application/AboutUs.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Application/AboutUs.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=27dea5da& */ "./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__.render,
  _AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/AboutUs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/EmploymentStatus.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Application/EmploymentStatus.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmploymentStatus.vue?vue&type=template&id=4c5ad7a6& */ "./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6&");
/* harmony import */ var _EmploymentStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmploymentStatus.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmploymentStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/EmploymentStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Application/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0142975a&scoped=true& */ "./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_0142975a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& */ "./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0142975a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/LoanAmount.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Application/LoanAmount.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoanAmount.vue?vue&type=template&id=93b325e0& */ "./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0&");
/* harmony import */ var _LoanAmount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoanAmount.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoanAmount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/LoanAmount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/LoanPurpose.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Application/LoanPurpose.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoanPurpose.vue?vue&type=template&id=55d85e96& */ "./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96&");
/* harmony import */ var _LoanPurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoanPurpose.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoanPurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/LoanPurpose.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/LoanRepaymentDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanRepaymentDetails.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87& */ "./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87&");
/* harmony import */ var _LoanRepaymentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoanRepaymentDetails.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoanRepaymentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/LoanRepaymentDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/Location.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Application/Location.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location.vue?vue&type=template&id=dfeed646& */ "./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646&");
/* harmony import */ var _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__.render,
  _Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/Location.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/Names.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Application/Names.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Names.vue?vue&type=template&id=7bfb1ad0& */ "./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0&");
/* harmony import */ var _Names_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Names.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Names_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/Names.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/Submission.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Application/Submission.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=8f76ee18& */ "./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18&");
/* harmony import */ var _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submission.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__.render,
  _Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Application/Submission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmploymentStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmploymentStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmploymentStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanAmount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanAmount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanAmount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanPurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanPurpose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanPurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanRepaymentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanRepaymentDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanRepaymentDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Names_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Names.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Names_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Submission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_0142975a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=style&index=0&id=0142975a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_27dea5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AboutUs.vue?vue&type=template&id=27dea5da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da&");


/***/ }),

/***/ "./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmploymentStatus_vue_vue_type_template_id_4c5ad7a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmploymentStatus.vue?vue&type=template&id=4c5ad7a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6&");


/***/ }),

/***/ "./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0142975a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=0142975a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanAmount_vue_vue_type_template_id_93b325e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanAmount.vue?vue&type=template&id=93b325e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0&");


/***/ }),

/***/ "./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanPurpose_vue_vue_type_template_id_55d85e96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanPurpose.vue?vue&type=template&id=55d85e96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96&");


/***/ }),

/***/ "./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanRepaymentDetails_vue_vue_type_template_id_4bdeff87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87&");


/***/ }),

/***/ "./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_dfeed646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Location.vue?vue&type=template&id=dfeed646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646&");


/***/ }),

/***/ "./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Names_vue_vue_type_template_id_7bfb1ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Names.vue?vue&type=template&id=7bfb1ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0&");


/***/ }),

/***/ "./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_8f76ee18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Submission.vue?vue&type=template&id=8f76ee18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/AboutUs.vue?vue&type=template&id=27dea5da& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0" },
                            [
                              _c(
                                "v-row",
                                { staticClass: "pt-6" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          label:
                                            "Do you ave any other loan(s)?",
                                          items: _vm.otherLoans,
                                          rules: _vm.required,
                                          "small-chips": "",
                                        },
                                        model: {
                                          value: _vm.about.otherLoans,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.about,
                                              "otherLoans",
                                              $$v
                                            )
                                          },
                                          expression: "about.otherLoans",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.aboutUs,
                                          rules: _vm.required,
                                          "small-chips": "",
                                          label: "How did you know about us?",
                                        },
                                        model: {
                                          value: _vm.about.aboutUs,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.about, "aboutUs", $$v)
                                          },
                                          expression: "about.aboutUs",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-checkbox", {
                                        attrs: {
                                          value: "accepted",
                                          rules: _vm.required,
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "label",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "div",
                                                  [
                                                    _vm._v(
                                                      "\n                        I agree to EML\n                        "
                                                    ),
                                                    _c(
                                                      "Link",
                                                      {
                                                        staticClass:
                                                          "text-indigo-700 underline",
                                                        attrs: {
                                                          href: "/terms",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "terms & conditions"
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ]),
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 p-",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/EmploymentStatus.vue?vue&type=template&id=4c5ad7a6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto",
                  attrs: { outlined: "", "max-width": "950px" },
                },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "fill-height pa-0" },
                            [
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            label: "Occupation status",
                                            rules: _vm.statusrules,
                                            dense: "",
                                          },
                                          model: {
                                            value: _vm.employment.status,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.employment,
                                                "status",
                                                $$v
                                              )
                                            },
                                            expression: "employment.status",
                                          },
                                        },
                                        _vm._l(_vm.status, function (state) {
                                          return _c("v-radio", {
                                            key: state,
                                            attrs: {
                                              label: state,
                                              value: state,
                                              color: "indigo",
                                            },
                                          })
                                        }),
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.employment.status == "Other"
                                        ? _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              dense: "",
                                              rules: _vm.statusrules,
                                              label:
                                                "Please type other option here",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _vm.employment.status == "Unemployed" ||
                                      _vm.employment.status == "Student" ||
                                      _vm.employment.status == "Employed"
                                        ? _c("v-select", {
                                            attrs: {
                                              "small-chips": "",
                                              dense: "",
                                              "deletable-chips": "",
                                              multiple: "",
                                              label: _vm.select,
                                              rules: _vm.statusrules,
                                              items: _vm.selectItems,
                                            },
                                            model: {
                                              value: _vm.crap.industry,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "industry",
                                                  $$v
                                                )
                                              },
                                              expression: "crap.industry",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _vm.employment.status == "Student"
                                        ? _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              label: "Name of the Institution",
                                              hint: "Enter the name of your institution",
                                              rules: _vm.statusrules,
                                            },
                                            model: {
                                              value: _vm.crap.institution,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "institution",
                                                  $$v
                                                )
                                              },
                                              expression: "crap.institution",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _vm.employment.status == "Student"
                                        ? _c("v-text-field", {
                                            attrs: {
                                              label: "Year of Study",
                                              type: "number",
                                              dense: "",
                                              rules: _vm.statusrules,
                                              hint: "eg, 1, 2",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _vm.yearsShow
                                        ? _c("v-select", {
                                            attrs: {
                                              items: _vm.years,
                                              label: _vm.yearsLabel,
                                              dense: "",
                                              "small-chips": "",
                                              "deletable-chips": "",
                                              rules: _vm.statusrules,
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-6",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _vm.employment.status == "Employed" ||
                                      _vm.employment.status ==
                                        "Part time job" ||
                                      _vm.employment.status == "Other" ||
                                      _vm.employment.status == "Unemployed" ||
                                      _vm.employment.status ==
                                        "Self Employed" ||
                                      _vm.employment.status == "Business"
                                        ? _c("v-textarea", {
                                            attrs: {
                                              label:
                                                _vm.employment.status ==
                                                "Business"
                                                  ? "Describe more about your business"
                                                  : "Describe more about your job",
                                              placeholder: "Type here ...",
                                              outlined: "",
                                              dense: "",
                                              rows: "5",
                                              rules: _vm.statusrules,
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 pb-2",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Index.vue?vue&type=template&id=0142975a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-main",
        [
          _c(
            "v-btn",
            {
              attrs: { small: "", elevation: "", color: "" },
              on: {
                click: function ($event) {
                  _vm.currentPage.number++
                },
              },
            },
            [_vm._v("toggle +1")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { small: "", elevation: "", color: "" },
              on: {
                click: function ($event) {
                  _vm.currentPage.number--
                },
              },
            },
            [_vm._v("toggle -1")]
          ),
          _vm._v("\n\n    " + _vm._s(_vm.form.aboutUs) + "\n\n    "),
          _c(
            "div",
            { staticClass: "grid items-center min-h-full" },
            [
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "keep-alive",
                    [
                      _vm.currentPage.number === 1
                        ? _c("Names", {
                            attrs: { pages: _vm.currentPage },
                            on: { names: _vm.namesPage },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 2
                        ? _c("Location", {
                            attrs: { pages: _vm.currentPage },
                            on: {
                              previous: _vm.locationBack,
                              next: _vm.location,
                              location: _vm.location,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 3
                        ? _c("EmploymentStatus", {
                            attrs: { pages: _vm.currentPage },
                            on: {
                              previous: _vm.employmentStatusBack,
                              employmentStatus: _vm.employmentStatus,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 4
                        ? _c("LoanPurpose", {
                            attrs: { pages: _vm.currentPage },
                            on: {
                              loanPurpose: _vm.loanPurpose,
                              previous: _vm.loanPurposeBack,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 5
                        ? _c("LoanAmount", {
                            attrs: {
                              settings: _vm.settings,
                              pages: _vm.currentPage,
                            },
                            on: {
                              loanAmount: _vm.loanAmount,
                              previous: _vm.loanAmountBack,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 6
                        ? _c("LoanRepaymentDetails", {
                            attrs: {
                              settings: _vm.settings,
                              loanAmount: _vm.form.loanAmount,
                              pages: _vm.currentPage,
                            },
                            on: {
                              repaymentDetails: _vm.repaymentDetails,
                              previous: _vm.repaymentDetailsBack,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 7
                        ? _c("AboutUs", {
                            attrs: { pages: _vm.currentPage },
                            on: { aboutUs: _vm.aboutUs },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Transition",
                { attrs: { name: "fade" } },
                [
                  _c(
                    "KeepAlive",
                    [
                      _vm.currentPage.number === 8
                        ? _c("Submission", {
                            attrs: { form: _vm.form, pages: _vm.currentPage },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div"),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanAmount.vue?vue&type=template&id=93b325e0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height", attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                {
                  staticClass: "pt-4 mx-auto",
                  attrs: { outlined: "", "max-width": "1000px" },
                },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.income,
                                          rules: _vm.required,
                                          label:
                                            "Gross monthly income earnings in Ksh",
                                        },
                                        model: {
                                          value: _vm.loan.income,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.loan, "income", $$v)
                                          },
                                          expression: "loan.income",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.amounts) +
                                      "\n\n                "
                                  ),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _vm.loan.income
                                        ? _c("v-text-field", {
                                            attrs: {
                                              type: "number",
                                              label: "Loan Amount",
                                              rules: _vm.required,
                                              placeholder:
                                                _vm.amountPlaceholder,
                                              hint: _vm.amountPlaceholder,
                                              "error-messages":
                                                _vm.amountValidation,
                                              dense: "",
                                            },
                                            model: {
                                              value: _vm.loan.amount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.loan,
                                                  "amount",
                                                  $$v
                                                )
                                              },
                                              expression: "loan.amount",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.amountValid
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              label:
                                                "Confirm Total Loan amount",
                                            },
                                            model: {
                                              value: _vm.loan.amount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.loan,
                                                  "amount",
                                                  $$v
                                                )
                                              },
                                              expression: "loan.amount",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.amountValid
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              label:
                                                "Confirm Minimum savings - " +
                                                _vm.settings.minimum_savings *
                                                  100 +
                                                "%",
                                            },
                                            model: {
                                              value: _vm.crap.minimumSavings,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "minimumSavings",
                                                  $$v
                                                )
                                              },
                                              expression: "crap.minimumSavings",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.amountValid
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              label:
                                                "Confirm Miscellaneous expenses incured - " +
                                                _vm.settings.misce_expenses *
                                                  100 +
                                                "%",
                                            },
                                            model: {
                                              value:
                                                _vm.crap.miscellaneousExpenses,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "miscellaneousExpenses",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "crap.miscellaneousExpenses",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.amountValid
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              label:
                                                "Confirm Credit score deficit deductions - " +
                                                _vm.settings.minimum_savings *
                                                  100 +
                                                "%",
                                            },
                                            model: {
                                              value:
                                                _vm.crap
                                                  .creditScoreDeficitDeductions,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "creditScoreDeficitDeductions",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "crap.creditScoreDeficitDeductions",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.amountValid
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              label:
                                                "Confirm total minimum deposit/savings",
                                            },
                                            model: {
                                              value: _vm.crap.minDeposit,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.crap,
                                                  "minDeposit",
                                                  $$v
                                                )
                                              },
                                              expression: "crap.minDeposit",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.amountValid
                                ? _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "grid",
                                            attrs: { if: "" },
                                          },
                                          [
                                            _c(
                                              "h1",
                                              {
                                                staticClass:
                                                  "underline text-black",
                                              },
                                              [_vm._v("LOANING SUMMARY")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "grid text-xs font-light text-gray-900 space-y-2",
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    "Loan amount: " +
                                                      _vm._s(_vm.loan.amount)
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.settings
                                                          .minimum_savings * 100
                                                      ) +
                                                      " % savings:\n                        " +
                                                      _vm._s(
                                                        _vm.crap.minimumSavings
                                                      )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.settings
                                                          .misce_expenses * 100
                                                      ) +
                                                      "% Miscellaneous\n                        expenses:\n                        " +
                                                      _vm._s(
                                                        _vm.crap
                                                          .miscellaneousExpenses
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.settings
                                                          .credit_score_deductions *
                                                          100
                                                      ) +
                                                      "% Credit\n                        facilitation:\n                        " +
                                                      _vm._s(
                                                        _vm.crap
                                                          .creditScoreDeficitDeductions
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Total expected savings: " +
                                                      _vm._s(
                                                        _vm.crap.minDeposit
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              this.$page.props.settings
                                                .minumum_savings
                                            ) +
                                            "\n                "
                                        ),
                                      ]),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 p-",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanPurpose.vue?vue&type=template&id=55d85e96& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "950px" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "fill-height pa-0" },
                            [
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            rules: _vm.descriptionRules,
                                          },
                                          model: {
                                            value: _vm.purpose.purpose,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.purpose,
                                                "purpose",
                                                $$v
                                              )
                                            },
                                            expression: "purpose.purpose",
                                          },
                                        },
                                        _vm._l(
                                          _vm.expenses,
                                          function (expense) {
                                            return _c("v-radio", {
                                              key: expense,
                                              attrs: {
                                                label: expense,
                                                color: "indigo",
                                                value: expense,
                                                rules: _vm.descriptionRules,
                                              },
                                            })
                                          }
                                        ),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _vm.purpose.purpose
                                        ? _c("v-select", {
                                            attrs: {
                                              "small-chips": "",
                                              multiple: "",
                                              rules: _vm.descriptionRules,
                                              items: _vm.items,
                                              label: _vm.label,
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _vm.purpose.purpose
                                        ? _c("v-textarea", {
                                            attrs: {
                                              rules: _vm.descriptionRules,
                                              label:
                                                "Explain a little about the loan purpose",
                                              placeholder: "Type here...",
                                              outlined: "",
                                              rows: "5",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", {
                                    attrs: { cols: "12", sm: "6", md: "4" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 p-",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/LoanRepaymentDetails.vue?vue&type=template&id=4bdeff87& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {},
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "950px" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0" },
                            [
                              _c(
                                "v-row",
                                { staticClass: "pt-6" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.monthNames,
                                          rules: _vm.rules.required,
                                          dense: "",
                                          label:
                                            "Choose Loan repayment period in month(s)",
                                        },
                                        model: {
                                          value: _vm.month,
                                          callback: function ($$v) {
                                            _vm.month = $$v
                                          },
                                          expression: "month",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.repayment.month
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: "",
                                              dense: "",
                                              outlined: "",
                                              value: _vm.totaLoanRepayment,
                                              label:
                                                "Confirm Total loan repayment required(Ksh)",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.repayment.month
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: "",
                                              dense: "",
                                              outlined: "",
                                              value: _vm.monthlyInstallments,
                                              label:
                                                "Confirm Monthly installments required for each month",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.repayment.month
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                          },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              disabled: "",
                                              value: _vm.totaLoanInterest,
                                              label:
                                                "Confirm Total loan interest at the end of the repayment period",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _vm.repayment.month
                                      ? _c("div", [
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "underline text-black",
                                            },
                                            [_vm._v("Repayment Summary")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "grid space-y-1 text-xs font-light text-gray-900",
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  "Total loan repayments: Ksh" +
                                                    _vm._s(
                                                      _vm.repayment
                                                        .totalRepayment
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  "Monthly installments: Ksh" +
                                                    _vm._s(
                                                      _vm.repayment
                                                        .monthlyInstallments
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  "Total interest for " +
                                                    _vm._s(
                                                      _vm.repayment.month
                                                    ) +
                                                    " months:\n                        Ksh" +
                                                    _vm._s(
                                                      _vm.repayment
                                                        .totaLoanInterest
                                                    )
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ])
                                      : _vm._e(),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 mb-2",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Location.vue?vue&type=template&id=dfeed646& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height" },
    [
      _c(
        "v-row",
        { staticClass: "align-center justify-center" },
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "950px" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0" },
                            [
                              _c(
                                "v-row",
                                { staticClass: "pt-6" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.city,
                                          label: "City",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.location.city,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.location, "city", $$v)
                                          },
                                          expression: "location.city",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.county,
                                          label: "County",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.location.county,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.location,
                                              "county",
                                              $$v
                                            )
                                          },
                                          expression: "location.county",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          rules: _vm.rules.constituency,
                                          label: "Constituency",
                                        },
                                        model: {
                                          value: _vm.location.constituency,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.location,
                                              "constituency",
                                              $$v
                                            )
                                          },
                                          expression: "location.constituency",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Ward",
                                          dense: "",
                                          rules: _vm.rules.ward,
                                        },
                                        model: {
                                          value: _vm.location.ward,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.location, "ward", $$v)
                                          },
                                          expression: "location.ward",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.address,
                                          dense: "",
                                          label: "Physical address",
                                        },
                                        model: {
                                          value: _vm.location.address,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.location,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression: "location.address",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticClass: "mx-auto pa-4 p-",
                      attrs: { dense: "", justify: "space-between" },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            staticClass: "wait--text",
                            attrs: {
                              small: "",
                              elevation: "",
                              color: "grey darken-4",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.back) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-btn", {
                            attrs: {
                              disabled: !_vm.valid,
                              small: "",
                              color: "success",
                            },
                            domProps: { textContent: _vm._s(_vm.pages.next) },
                            on: { click: _vm.next },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Names.vue?vue&type=template&id=7bfb1ad0& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height", attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { staticClass: "align-center justify-center" },
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "950px" } },
                [
                  _c(
                    "v-form",
                    {
                      model: {
                        value: _vm.valid,
                        callback: function ($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid",
                      },
                    },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "mx-auto text-center" },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "green",
                                  attrs: { "x-small": "", icon: "" },
                                },
                                [
                                  _c("span", { staticClass: "white--text" }, [
                                    _vm._v("1"),
                                  ]),
                                ]
                              ),
                              _c("span", { staticClass: "text-20" }, [
                                _vm._v("/"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "indigo",
                                  attrs: { small: "", icon: "" },
                                },
                                [
                                  _c("span", { staticClass: "white--text" }, [
                                    _vm._v("5"),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0 fill-height" },
                            [
                              _c(
                                "v-row",
                                { attrs: { dense: "" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          rules: _vm.rules.firstname,
                                          counter: 10,
                                          label: "Legal first name",
                                        },
                                        model: {
                                          value: _vm.names.firstname,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.names,
                                              "firstname",
                                              $$v
                                            )
                                          },
                                          expression: "names.firstname",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          counter: "10",
                                          rules: _vm.rules.middlename,
                                          label: "Legal middle Name",
                                        },
                                        model: {
                                          value: _vm.names.middlename,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.names,
                                              "middlename",
                                              $$v
                                            )
                                          },
                                          expression: "names.middlename",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          counter: "10",
                                          rules: _vm.rules.lastname,
                                          label: "Legal last name",
                                        },
                                        model: {
                                          value: _vm.names.lastname,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.names, "lastname", $$v)
                                          },
                                          expression: "names.lastname",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            dense: "",
                                            color: "indigo",
                                            rules: _vm.rules.gender,
                                          },
                                          model: {
                                            value: _vm.names.gender,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.names, "gender", $$v)
                                            },
                                            expression: "names.gender",
                                          },
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              color: "indigo",
                                              value: "male",
                                              label: "Male",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              color: "indigo",
                                              value: "female",
                                              label: "Female",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.email,
                                          label: "E-Mail",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.names.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.names, "email", $$v)
                                          },
                                          expression: "names.email",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.idnumber,
                                          label: "ID/Passport Number",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.names.idnumber,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.names, "idnumber", $$v)
                                          },
                                          expression: "names.idnumber",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.phone,
                                          label: "Phone Number",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.names.phone,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.names, "phone", $$v)
                                          },
                                          expression: "names.phone",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-sm-4",
                                      attrs: { cols: "12", sm: "6", md: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.rules.dob,
                                          type: "date",
                                          "error-messages": _vm.dateValidation,
                                          label: "Date Of Birth",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.names.dob,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.names, "dob", $$v)
                                          },
                                          expression: "names.dob",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.names.phone
                                ? _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c("div", [
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "underline text-black",
                                            },
                                            [_vm._v("Confirm Summary")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "grid text-xs text-gray-900",
                                            },
                                            [
                                              _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    "Name: " +
                                                      _vm.names.firstname +
                                                      " " +
                                                      _vm.names.middlename +
                                                      " " +
                                                      _vm.names.lastname
                                                  ),
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    "E-Mail: " + _vm.names.email
                                                  ),
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    "Main Contact: " +
                                                      _vm.names.phone
                                                  ),
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    "Identification Document: " +
                                                      _vm.names.idnumber
                                                  ),
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    "Date of Birth: " +
                                                      _vm.names.dob
                                                  ),
                                                },
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-4" }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        {
                          staticClass: "mx-auto pa-4 p-",
                          attrs: { dense: "", justify: "end" },
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    disabled: !_vm.valid,
                                    small: "",
                                    color: "success",
                                  },
                                  on: { click: _vm.next },
                                },
                                [_vm._v("next -Physical Address")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Application/Submission.vue?vue&type=template&id=8f76ee18& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {},
    [_c("v-row", [_c("v-col", [_vm._v(" processing ")])], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);