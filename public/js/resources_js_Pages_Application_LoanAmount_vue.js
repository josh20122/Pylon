"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_LoanAmount_vue"],{

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



/***/ })

}]);