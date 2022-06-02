"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_EmploymentStatus_vue"],{

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



/***/ })

}]);