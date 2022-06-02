"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Application_Names_vue"],{

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



/***/ })

}]);