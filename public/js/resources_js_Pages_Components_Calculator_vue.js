"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_Calculator_vue"],{

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



/***/ })

}]);