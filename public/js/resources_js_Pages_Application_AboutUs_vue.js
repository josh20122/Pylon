"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_AboutUs_vue"],{

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



/***/ })

}]);