"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_LoanRepaymentDetails_vue"],{

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



/***/ })

}]);