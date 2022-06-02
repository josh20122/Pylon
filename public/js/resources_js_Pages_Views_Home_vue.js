"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      interest: this.$page.props.settings.interest,
      amount: 50000,
      months: 2
    };
  },
  computed: {
    totalPay: function totalPay() {
      return (Math.pow(1 + this.interest, this.months) * this.amount).toFixed(0);
    },
    monthlyPay: function monthlyPay() {
      return (Math.pow(1 + this.interest, this.months) * this.amount / this.months).toFixed(0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      hover: false,
      isActive: false,
      slider: 75000,
      items: [{
        img: "images/corousel5.jpg",
        message: "Connecting Your Loan Needs",
        subtitle: "Simple & Secure Payment Process",
        button: "Apply for a loan",
        link: "/application"
      }, {
        img: "images/corousel4.jpg",
        message: "Building A Bighter Financial Future ",
        subtitle: "Welcome to Pylon",
        button: "Loan Calculator",
        link: "/calculator"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      items: [{
        message: "Low Rates on All Loans",
        icon: "fa-solid fa-arrow-up-right-dots"
      }, {
        message: "99.99% Success Rate Guarantee",
        icon: "fa-solid fa-arrow-up-right-dots"
      }, {
        message: "Flexible with Your Repayments",
        icon: "fa-solid fa-arrow-up-right-dots"
      }],
      listItems: [{
        title: "Credit Card Per Day"
      }, {
        title: "Personal Loan"
      }, {
        title: "Car / Auto Loan"
      }, {
        title: "Home Loan"
      }],
      listItems2: [{
        title: "Gold Loan Per Day"
      }, {
        title: "Mortage Loan"
      }, {
        title: "Education / Student Loan"
      }, {
        title: "Wedding Loan"
      }],
      listItems3: [{
        id: 1,
        message: "Easy loan Solutions for small businesses and agencies"
      }, {
        id: 2,
        message: "Submit Required Document and Details for easy loan approval"
      }, {
        id: 3,
        message: "Take our loans now and pay later when studies completed"
      }, {
        id: 4,
        message: "Get small loans for more needs in 2 hours with less documents"
      }],
      testimonials: [{
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }, {
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }, {
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }, {
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }, {
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }, {
        name: "one",
        message: "Get small loans for more needs in 2 hours with less documents"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      hover: false,
      items: [{
        img: "images/service1.jpg",
        name: "Property Loan",
        icon: "",
        message: "Everyone want to buy property so people want to buy home, land or commercial properly low interest"
      }, {
        img: "images/service3.jpg",
        name: "Business Loan",
        icon: "",
        message: "Everyone want to buy property so people want to buy home, land or commercial properly low interest"
      }, {
        img: "images/service2.jpg",
        name: "Education Loan",
        icon: "",
        message: "Everyone want to buy property so people want to buy home, land or commercial properly low interest"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
//
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
  props: ["title"],
  data: function data() {
    return {
      drawer: false,
      buttons: [{
        icon: "mdi-facebook",
        link: "www.facebook.com"
      }, {
        icon: "mdi-twitter",
        link: "www.twitter.com"
      }, {
        icon: "mdi-instagram",
        link: "www.instagram.com"
      }, {
        icon: "mdi-gmail",
        link: "www.gmail.com"
      }],
      links: [{
        page: "Home",
        link: "/",
        icon: "",
        id: 1
      }, {
        page: "Apply loan",
        link: "/application",
        icon: "",
        id: 2
      }, {
        page: "Contact",
        link: "/contact",
        icon: "",
        id: 3
      }, {
        page: "FAQ",
        link: "faq",
        icon: "",
        id: 4
      }, {
        page: "My Account",
        link: "/dashboard",
        id: 5
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");
/* harmony import */ var _Components_Couresel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Couresel.vue */ "./resources/js/Pages/Components/Couresel.vue");
/* harmony import */ var _Components_Calculator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Calculator.vue */ "./resources/js/Pages/Components/Calculator.vue");
/* harmony import */ var _Components_LoanServices_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/LoanServices.vue */ "./resources/js/Pages/Components/LoanServices.vue");
/* harmony import */ var _Components_GetToKnow_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/GetToKnow.vue */ "./resources/js/Pages/Components/GetToKnow.vue");
//
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
    Navigation: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Couresel: _Components_Couresel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Calculator: _Components_Calculator_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    GetToKnow: _Components_GetToKnow_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LoanServices: _Components_LoanServices_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./resources/js/Pages/Components/Calculator.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Components/Calculator.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.vue?vue&type=template&id=54afcf3c& */ "./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c&");
/* harmony import */ var _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Calculator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Couresel.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Components/Couresel.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Couresel.vue?vue&type=template&id=02fb9abe& */ "./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe&");
/* harmony import */ var _Couresel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Couresel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Couresel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Couresel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/GetToKnow.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Components/GetToKnow.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetToKnow.vue?vue&type=template&id=08ab5e6c& */ "./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c&");
/* harmony import */ var _GetToKnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetToKnow.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GetToKnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__.render,
  _GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/GetToKnow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/LoanServices.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Components/LoanServices.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoanServices.vue?vue&type=template&id=e4cbe264& */ "./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264&");
/* harmony import */ var _LoanServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoanServices.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoanServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/LoanServices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=706ae5e3& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=3faefa69& */ "./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Views/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calculator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Couresel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Couresel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Couresel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetToKnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetToKnow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetToKnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanServices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_54afcf3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calculator.vue?vue&type=template&id=54afcf3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c&");


/***/ }),

/***/ "./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couresel_vue_vue_type_template_id_02fb9abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Couresel.vue?vue&type=template&id=02fb9abe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe&");


/***/ }),

/***/ "./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetToKnow_vue_vue_type_template_id_08ab5e6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetToKnow.vue?vue&type=template&id=08ab5e6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c&");


/***/ }),

/***/ "./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoanServices_vue_vue_type_template_id_e4cbe264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoanServices.vue?vue&type=template&id=e4cbe264& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=706ae5e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&");


/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=3faefa69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Calculator.vue?vue&type=template&id=54afcf3c& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-card",
        { attrs: { elevation: "10" } },
        [
          _c("v-card-text", { staticClass: "deepblue text-center py-6" }, [
            _c("div", { staticClass: "mx-auto text-xl white--text" }, [
              _vm._v("How Much Do You Need"),
            ]),
          ]),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pt-10" }, [
            _c(
              "div",
              { staticClass: "px-8" },
              [
                _c(
                  "v-row",
                  {
                    staticClass: "mx-auto",
                    attrs: { "no-gutters": "", justify: "space-between" },
                  },
                  [
                    _c("v-col", [
                      _c("div", { staticClass: "flex justify-space-between" }, [
                        _c("span", [_vm._v("Ksh5,000")]),
                        _vm._v(" "),
                        _c("span", {
                          domProps: {
                            textContent: _vm._s("Ksh " + _vm.amount),
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Ksh150,000")]),
                      ]),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { attrs: { "no-gutters": "" } },
                  [
                    _c("v-slider", {
                      staticClass: "secondary--text",
                      attrs: {
                        "inverse-label": "",
                        "persistent-hint": "",
                        color: "secondary",
                        min: "0",
                        "track-color": "grey",
                        max: "150000",
                      },
                      model: {
                        value: _vm.amount,
                        callback: function ($$v) {
                          _vm.amount = $$v
                        },
                        expression: "amount",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { attrs: { "no-gutters": "" } },
                  [
                    _c("v-col", [
                      _c("div", { staticClass: "flex justify-space-between" }, [
                        _c("span", [_vm._v("1 Month")]),
                        _vm._v(" "),
                        _c("span", {
                          domProps: {
                            textContent: _vm._s(_vm.months + " Month(s)"),
                          },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("12 Months")]),
                      ]),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { attrs: { "no-gutters": "" } },
                  [
                    _c("v-slider", {
                      attrs: {
                        color: "secondary",
                        "persistent-hint": "",
                        min: "1",
                        max: "12",
                        "track-color": "grey darken-2",
                      },
                      model: {
                        value: _vm.months,
                        callback: function ($$v) {
                          _vm.months = $$v
                        },
                        expression: "months",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-col", [
                      _c("div", { staticClass: "grid space-y-6" }, [
                        _c(
                          "div",
                          { staticClass: "grid text-lg space-y-5" },
                          [
                            _c(
                              "div",
                              { staticClass: "flex justify-space-between" },
                              [
                                _c("div", [_vm._v("Pay Monthly")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "grey--text text--darken-4" },
                                  [
                                    _vm._v(
                                      "\n                    Ksh " +
                                        _vm._s(_vm.monthlyPay) +
                                        "\n                  "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-divider"),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "grid text-lg space-y-5" },
                          [
                            _c(
                              "div",
                              { staticClass: "flex justify-space-between" },
                              [
                                _c("div", [_vm._v("Term of Use")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "grey--text text--darken-4" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.months) +
                                        " Month(s)\n                  "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-divider"),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "grid text-lg space-y-5" }, [
                          _c(
                            "div",
                            { staticClass: "flex justify-space-between" },
                            [
                              _c("div", [_vm._v("Amount to pay Back")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "grey--text text--darken-4" },
                                [
                                  _vm._v(
                                    "\n                    Ksh " +
                                      _vm._s(_vm.totalPay) +
                                      "\n                  "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-10" },
                            [
                              _c(
                                "Link",
                                { attrs: { href: "/application" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        elevation: "",
                                        large: "",
                                        block: "",
                                        color: "secondary",
                                      },
                                    },
                                    [_vm._v("Apply For Loan")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Couresel.vue?vue&type=template&id=02fb9abe& ***!
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
    "div",
    [
      _c(
        "v-carousel",
        { attrs: { interval: "100000000000000", "hide-delimiters": "" } },
        _vm._l(_vm.items, function (item, i) {
          return _c(
            "v-carousel-item",
            { key: i },
            [
              _c(
                "v-sheet",
                [
                  _c(
                    "v-img",
                    { attrs: { src: item.img, "max-height": "800px" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "grid space-y-4 wait--text pt-[200px] pl-6",
                              },
                              [
                                _c("span", {
                                  domProps: {
                                    textContent: _vm._s(item.subtitle),
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "font-bold text-5xl",
                                  domProps: {
                                    textContent: _vm._s(item.message),
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {},
                                  [
                                    _c(
                                      "Link",
                                      { attrs: { href: item.link } },
                                      [
                                        _c("v-btn", {
                                          attrs: {
                                            large: "",
                                            elevation: "",
                                            color: "secondary",
                                          },
                                          domProps: {
                                            textContent: _vm._s(item.button),
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
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
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("v-container", { staticClass: "pa-md-0" }, [
        _c(
          "div",
          { staticClass: "md:-mt-[103px]" },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12", md: "8" } },
                  [
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-card", { attrs: { flat: "" } }, [
                              _c(
                                "div",
                                { staticClass: "flex pa-6" },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { color: "secondary", left: "" } },
                                    [
                                      _vm._v(
                                        "fa-thin fa-cart-shopping\n                  "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "text-lg black--text pl-2" },
                                    [_vm._v("Quick Payment Process")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-card", { attrs: { flat: "" } }, [
                              !_vm.hover
                                ? _c(
                                    "div",
                                    { staticClass: "flex pa-6" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            color: "secondary",
                                            left: "",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "fa-solid fa-handshake\n                  "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "text-lg black--text pl-2",
                                        },
                                        [_vm._v("No Hidden Charges")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "grid" },
                            [
                              _c("div", [_vm._v("Company introductions")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "display-2" }, [
                                _vm._v(
                                  "\n                  Our loans will fill your dreams Come True\n                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text" }, [
                                _vm._v(
                                  "\n                  There are many variations of passages of lorem ipsum\n                  available the majority have suffered alteration in some form\n                  by injected humour. Duis aute irure dolor lipsum is simply\n                  free text available in the local markets in\n                  reprehenderit.Nam aliquam sem et tortor consequat mattis\n                  pellentesque semper tailored for specific uses and specific\n                  market segment.\n                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "pt-7" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("div", { staticClass: "flex" }, [
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  "x-large": "",
                                                  color: "blue",
                                                },
                                              },
                                              [_vm._v(" mdi-trophy ")]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "title" }, [
                                          _vm._v("Award Winning"),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "text" }, [
                                          _vm._v(
                                            "Finance catagories winninng more than 10 Awards"
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("div", { staticClass: "flex" }, [
                                        _c("span", { staticClass: "title" }, [
                                          _vm._v("Certified Company"),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "Approved Finace company to provide loans"
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", md: "4" } },
                  [_vm._t("default")],
                  2
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/GetToKnow.vue?vue&type=template&id=08ab5e6c& ***!
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
    { staticClass: "mt-4 mt-md-8" },
    [
      _c(
        "v-row",
        {},
        [
          _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
            _c("div", { staticClass: "grid space-y-4 py-6" }, [
              _c("span", [_vm._v("Get to Know About")]),
              _vm._v(" "),
              _c("span", { staticClass: "text-3xl font-bold" }, [
                _vm._v("Flexible and Quick Business Loans For You"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "py-6" }, [
              _vm._v(
                "\n        Turpis cursus in hac habitasse platea dictumst quisque. Aenean euismod\n        elementum nisi quis eleifend quam adipiscing vitae proin.There of\n        available but the majority have suffered alteration in some form, by\n        injected humou or randomised words which don’t look even slightly\n        believable.Nam aliquam sem et tortor consequat at urna mattis\n        pellentesque.\n      "
              ),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.items, function (item) {
          return _c(
            "v-col",
            { key: item.message, attrs: { cols: "12", md: "4" } },
            [
              _c(
                "div",
                { staticClass: "md:py-10" },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "grey lighten-4" } },
                    [
                      _c("v-card-text", [
                        _c("div", { staticClass: "py-6" }, [
                          _c(
                            "span",
                            [
                              _c("v-icon", {
                                staticClass: "mr-4",
                                attrs: { color: "secondary" },
                                domProps: { textContent: _vm._s(item.icon) },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "text-lg grey--text text--darken-4",
                            domProps: { textContent: _vm._s(item.message) },
                          }),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "deep2 grey--text text--lighten-4 rounded-md" },
        [
          _c("v-col", [
            _c("div", { staticClass: "grid space-y-4" }, [
              _c("span", [_vm._v("Trusted Company")]),
              _vm._v(" "),
              _c("div", { staticClass: "font-bold text-4xl" }, [
                _vm._v(
                  "\n          Most of the People Trust on us For Fast Services\n        "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "grid mt-4 space-y-4" }, [
              _c(
                "div",
                [
                  _c("v-img", {
                    staticClass: "rounded-md",
                    attrs: {
                      "max-width": "300px",
                      "max-height": "200px",
                      src: "images/us.png",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-blue-100" }, [
                _c("span", [
                  _vm._v(
                    "There are many variations of passages of lorem ipsum available\n            the majority have suffered alteration in some form by injected\n            humour. Duis aute irure dolor lipsum is simply in voluptate velit\n            esse cillum dolore eu fugiat nulla pariatur.\n          "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "grid md:flex" }, [
                _c(
                  "div",
                  [
                    _c(
                      "v-list",
                      { attrs: { color: "deep2" } },
                      _vm._l(_vm.listItems, function (item) {
                        return _c(
                          "v-list-item",
                          { key: item.title },
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { color: "blue lighten-1" } },
                                  [_vm._v("fa-thin fa-circle-check")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", {
                                  staticClass: "blue--text text--lighten-4",
                                  domProps: { textContent: _vm._s(item.title) },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "v-list",
                      { attrs: { color: "deep2" } },
                      [
                        _c(
                          "v-list-item-group",
                          _vm._l(_vm.listItems2, function (item) {
                            return _c(
                              "v-list-item",
                              { key: item.title },
                              [
                                _c(
                                  "v-list-item-icon",
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "blue lighten-1" } },
                                      [_vm._v("fa-thin fa-circle-check")]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", {
                                      staticClass: "blue--text text--lighten-4",
                                      domProps: {
                                        textContent: _vm._s(item.title),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c(
              "div",
              { staticClass: "grid md:-mr-10 md:-mt-10" },
              [
                _c(
                  "v-card",
                  { attrs: { color: "deepblue" } },
                  [
                    _c("v-card-text", [
                      _c(
                        "div",
                        { staticClass: "grid space-y-6" },
                        _vm._l(_vm.listItems3, function (item) {
                          return _c(
                            "v-card",
                            { key: item.id },
                            [
                              _c("v-card-text", [
                                _c(
                                  "div",
                                  { staticClass: "grid space-y-4 text-white" },
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { color: "secondary" } },
                                      [
                                        _c("span", {
                                          staticClass: "text-2xl font-medium",
                                          domProps: {
                                            textContent: _vm._s(item.id),
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "text-gray-900 text-lg",
                                      domProps: {
                                        textContent: _vm._s(item.message),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            1
                          )
                        }),
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "secondary text-center" },
        [
          _c("v-col", [
            _c(
              "div",
              {
                staticClass:
                  "\n          grid\n          md:space-y-0\n          space-y-8\n          md:flex\n          justify-space-around\n          my-12\n          md:my-28\n        ",
              },
              [
                _c(
                  "div",
                  { staticClass: "grey--text text--lighten-4 grid space-y-2" },
                  [
                    _c("div", { staticClass: "font-extrabold text-4xl" }, [
                      _vm._v("Ksh2M"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-medium text-lg" }, [
                      _vm._v("Daily Payments"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grey--text text--lighten-4 grid space-y-2" },
                  [
                    _c("div", { staticClass: "font-extrabold text-4xl" }, [
                      _vm._v("Ksh2M"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-medium text-lg" }, [
                      _vm._v("Daily Payments"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grey--text text--lighten-4 grid space-y-2" },
                  [
                    _c("div", { staticClass: "font-extrabold text-4xl" }, [
                      _vm._v("Ksh2M"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-medium text-lg" }, [
                      _vm._v("Daily Payments"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grey--text text--lighten-4 grid space-y-2" },
                  [
                    _c("div", { staticClass: "font-extrabold text-4xl" }, [
                      _vm._v("Ksh2M"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-medium text-lg" }, [
                      _vm._v("Daily Payments"),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "py-4" },
            [
              _c(
                "v-carousel",
                {
                  attrs: {
                    "hide-delimiter-background": "",
                    "hide-delimiters": "",
                    "show-arrows-on-hover": "",
                    height: "200",
                  },
                },
                _vm._l(_vm.testimonials, function (testimony) {
                  return _c(
                    "v-carousel-item",
                    { key: testimony.name },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "500px", flat: "" },
                        },
                        [
                          _c("v-card-text", [
                            _c("div", {
                              staticClass: "text-center",
                              domProps: { textContent: _vm._s(testimony.name) },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c("div", {
                              domProps: {
                                textContent: _vm._s(testimony.message),
                              },
                            }),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/LoanServices.vue?vue&type=template&id=e4cbe264& ***!
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
    { staticClass: "mt-15" },
    [
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            {
              staticClass: "text-center grey--text text--darken-2 text-sm",
              attrs: { cols: "12" },
            },
            [_vm._v("What We're Offering")]
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              {
                staticClass:
                  "grey--text text--darken-4 text-4xl font-bold text-center",
              },
              [_vm._v("\n        All Loans Services\n      ")]
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.items, function (item) {
          return _c(
            "v-col",
            { key: item.name, attrs: { cols: "12", md: "4" } },
            [
              _c("v-hover", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function (ref) {
                        var hover = ref.hover
                        return [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto",
                              attrs: {
                                color: "grey lighten-4",
                                "max-width": "600",
                              },
                            },
                            [
                              _c(
                                "v-img",
                                {
                                  attrs: {
                                    "aspect-ratio": 16 / 9,
                                    src: item.img,
                                  },
                                },
                                [
                                  _c("v-slide-y-reverse-transition", [
                                    hover
                                      ? _c("div", {
                                          staticClass:
                                            "\n                  d-flex\n                  transition-fast-in-fast-out\n                  darken-2\n                  v-card--reveal\n                  text-h2\n                  white--text\n                  opacity-60\n                  bg-blue-500\n                ",
                                          staticStyle: { height: "100%" },
                                        })
                                      : _vm._e(),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                {
                                  staticClass: "pt-6",
                                  staticStyle: { position: "relative" },
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "white--text",
                                      attrs: {
                                        absolute: "",
                                        color: "deepblue",
                                        fab: "",
                                        large: "",
                                        right: "",
                                        small: "",
                                        top: "",
                                        depressed: "",
                                      },
                                    },
                                    [
                                      _c("v-icon", {
                                        domProps: {
                                          textContent: _vm._s(item.icon),
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          { staticClass: "grid space-y-6" },
                                          [
                                            _c("div", {
                                              staticClass:
                                                "grey--text text--darken-4 text-2xl font-extrabold",
                                              domProps: {
                                                textContent: _vm._s(item.name),
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticClass: "text-[16px]",
                                              domProps: {
                                                textContent: _vm._s(
                                                  item.message
                                                ),
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "Link",
                                              {
                                                attrs: { href: "/application" },
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "secondary",
                                                      icon: "",
                                                      depressed: "",
                                                    },
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "fa-solid fa-arrow-right"
                                                      ),
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
                        ]
                      },
                    },
                  ],
                  null,
                  true
                ),
              }),
            ],
            1
          )
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "v-navigation-drawer",
        {
          attrs: {
            color: "drawer",
            hidden: "",
            app: "",
            light: "",
            value: _vm.drawer,
          },
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                { staticClass: "my-4" },
                [
                  _c(
                    "v-list-item-avatar",
                    { attrs: { id: "top" } },
                    [_c("v-img", { attrs: { src: "images/logo.png" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _c(
                          "span",
                          { staticClass: "primary--text font-medium text-3xl" },
                          [_vm._v("PYLON")]
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.links, function (link) {
                return _c(
                  "div",
                  { key: link.id, staticClass: "mt-2" },
                  [
                    _c(
                      "v-list-item",
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "Link",
                              {
                                staticClass: "text-white",
                                attrs: { href: link.link },
                              },
                              [
                                _c("v-list-item-title", [
                                  _c("span", {
                                    staticClass: "text-white",
                                    domProps: {
                                      textContent: _vm._s(link.page),
                                    },
                                  }),
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
                    _vm._v(" "),
                    _c("v-divider", { staticClass: "grey darken-3" }),
                  ],
                  1
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            color: "",
            "hide-on-scroll": "",
            app: "",
            short: "",
            circle: "",
            flat: "",
          },
        },
        [
          _c(
            "v-col",
            [
              _c("v-img", {
                attrs: { "max-width": "150px", src: "images/pylon-logo.png" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-app-bar-nav-icon", {
            staticClass: "d-sm-none",
            on: {
              click: function ($event) {
                _vm.drawer = !_vm.drawer
              },
            },
          }),
          _vm._v(" "),
          _c("v-row", { staticClass: "d-none d-sm-flex" }, [
            _c(
              "span",
              { staticClass: "flex uppercase space-x-6 justify-end mr-10" },
              _vm._l(_vm.links, function (link) {
                return _c("Link", {
                  key: link.id,
                  staticClass: "grey--text text--darken-4",
                  attrs: { href: link.link },
                  domProps: { textContent: _vm._s(link.page) },
                })
              }),
              1
            ),
          ]),
          _vm._v(" "),
          _c("v-divider", { attrs: { vertical: "" } }),
          _vm._v(" "),
          _c("div", {}, [
            _c("div", { staticClass: "grid justify-end pl-4" }, [
              _c("span", { staticClass: "text-xs text-light text-gray-400" }, [
                _vm._v("CALL ANYTIME"),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-sm" }, [
                _vm._v(" " + _vm._s(_vm.$page.props.settings.contact) + " "),
              ]),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "background2" },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                href: "#top",
                color: "secondary",
                fixed: "",
                fab: "",
                bottom: "",
                right: "",
              },
            },
            [_c("v-icon", [_vm._v("fa-solid fa-angle-up")])],
            1
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { color: "deep2", padless: "", outlined: "" } },
        [
          _c(
            "v-container",
            {},
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                    _c(
                      "div",
                      { staticClass: "grid space-y-4" },
                      [
                        _c(
                          "div",
                          { staticClass: "flex space-x-2 py-4" },
                          [
                            _c("v-img", {
                              attrs: {
                                "max-width": "50px",
                                src: "images/logo.png",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "text-3xl text-white font-medium",
                              },
                              [_vm._v("Pylon")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-blue-100" }, [
                          _vm._v(
                            "\n              Welcome to pylon loand company we are provide loan as very\n              reasonably interest and you can provide document etur labore.\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("v-divider", { staticClass: "blue lighten-2" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex" }, [
                          _c(
                            "div",
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    "x-large": "",
                                    color: "blue lighten-2 h-16",
                                  },
                                },
                                [_vm._v("mdi-phone")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "grid space-y-2" }, [
                            _c("div", { staticClass: "text-blue-100" }, [
                              _vm._v("CALL ANYTIME"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-white text-2xl" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$page.props.settings.contact) +
                                  "\n                "
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "pt-md-14", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "grid" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pb-4 text-bold text-white text-3xl",
                              },
                              [_vm._v("Explore")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.links, function (link) {
                              return _c(
                                "span",
                                {
                                  key: link.link,
                                  staticClass: "blue--text text--lighten-2",
                                },
                                [
                                  _c(
                                    "Link",
                                    {
                                      staticClass: "flex space-x-4",
                                      attrs: { href: link.link },
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "blue lighten-3" } },
                                        [_vm._v("fa-thin fa-arrow-right")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-blue-100",
                                        domProps: {
                                          textContent: _vm._s(link.page),
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-card",
                        { attrs: { color: "deep2", flat: "" } },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "pt-0 text-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "blue--text text--lighten-4" },
                                [
                                  _vm._v(
                                    "\n                © Copyright 2016 - " +
                                      _vm._s(new Date().getFullYear()) +
                                      " by pylon.com\n              "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "pt-0 text-center" },
                            _vm._l(_vm.buttons, function (button) {
                              return _c(
                                "a",
                                {
                                  key: button.link,
                                  attrs: { dark: "", href: button.link },
                                },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "", color: "grey" } },
                                    [
                                      _c("v-icon", {
                                        attrs: { color: "grey lighten-4" },
                                        domProps: {
                                          textContent: _vm._s(button.icon),
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            }),
                            0
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "Navigation",
    [
      _c("Couresel", { attrs: { id: "top" } }, [_c("Calculator", {})], 1),
      _vm._v(" "),
      _c("LoanServices", {}),
      _vm._v(" "),
      _c("GetToKnow", {}),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);