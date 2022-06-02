"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: {
      required: false,
      type: Object
    }
  },
  data: function data() {
    return {
      drawer: false,
      links: [{
        page: "Dashboard",
        link: "/admin",
        icon: "fa-solid fa-chart-line"
      }, {
        page: "All Users",
        link: "/admin/crud/all",
        icon: "fa-solid fa-users"
      }, {
        page: "Deposited",
        link: "/admin/deposited",
        icon: "fa-solid fa-dollar-sign"
      }, {
        page: "Pending",
        link: "/admin/pending",
        icon: "fa-light fa-filter-circle-dollar"
      }, {
        page: "Settings",
        link: "/admin/settings",
        icon: "fa-solid fa-gear"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue */ "./resources/js/Pages/Admin/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navigation: _Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["errors", "message", "snackbar", "settings"],
  data: function data() {
    return {
      loading: false,
      snacktext: this.$props.snackbar,
      form: {
        interest: this.settings.interest,
        contact: this.settings.contact,
        misce_expenses: this.settings.misce_expenses,
        minimum_savings: this.settings.minimum_savings,
        credit_score_deductions: this.settings.credit_score_deductions
      }
    };
  },
  methods: {
    reset: function reset() {
      this.form.interest = this.settings.interest;
      this.form.contact = this.settings.contact;
      this.form.misce_expenses = this.settings.misce_expenses;
      this.form.minimum_savings = this.settings.minimum_savings;
      this.form.credit_score_deductions = this.settings.credit_score_deductions;
    },
    update: function update() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/admin/settings", this.form, {
        preserveState: true,
        preserveScroll: true,
        onStart: function onStart() {
          _this.loading === true;
        },
        onFinish: function onFinish() {
          _this.loading === false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/Navigation.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/Navigation.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=5f28689d& */ "./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=c8837928& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5f28689d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=5f28689d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d&");


/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=c8837928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Navigation.vue?vue&type=template&id=5f28689d& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        "v-app-bar",
        { attrs: { color: "drawer", dark: "", app: "", "clipped-left": "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function ($event) {
                _vm.drawer = !_vm.drawer
              },
            },
          }),
          _vm._v(" "),
          _c("v-toolbar-title"),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("img", {
            staticClass: "rounded-full h-10",
            attrs: { src: "images/logo1.jpg", alt: "" },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        { attrs: { clipped: "", app: "", color: "drawer", value: _vm.drawer } },
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
              _c("v-divider", { staticClass: "secondary" }),
              _vm._v(" "),
              _vm._l(_vm.links, function (link) {
                return _c(
                  "v-list-item",
                  { key: link.link },
                  [
                    _c(
                      "v-list-item-icon",
                      [
                        _c("v-icon", { attrs: { color: "wait" } }, [
                          _vm._v(_vm._s(link.icon)),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [
                        _c(
                          "Link",
                          {
                            staticClass: "wait--text",
                            attrs: { href: link.link },
                          },
                          [
                            _c(
                              "v-list-item-title",
                              { staticClass: "wait--text" },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(link.page) +
                                    "\n            "
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
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", { attrs: { app: "" } }, [_vm._t("default")], 2),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-container",
        { staticClass: "fill-height" },
        [
          _c("v-row", { attrs: { justify: "center", "no-gutters": "" } }, [
            _c("div", [
              _c("div", { staticClass: "display-1" }, [_vm._v("Settings")]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                { staticClass: "mx-auto" },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      attrs: { outlined: "", "max-width": "500" },
                    },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-container",
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { dense: "" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Total Interest in Percentage"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Interest",
                                              outlined: "",
                                              color: "blue",
                                              "error-messages":
                                                _vm.errors.interest,
                                            },
                                            model: {
                                              value: _vm.form.interest,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "interest",
                                                  $$v
                                                )
                                              },
                                              expression: "form.interest",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Credit Score Deficit Deductions in Percentage"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Interest",
                                              outlined: "",
                                              color: "blue",
                                              "error-messages":
                                                _vm.errors
                                                  .credit_score_deductions,
                                            },
                                            model: {
                                              value:
                                                _vm.form
                                                  .credit_score_deductions,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "credit_score_deductions",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.credit_score_deductions",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Miscellaneous Expenses in Percentage"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Interest",
                                              outlined: "",
                                              color: "blue",
                                              "error-messages":
                                                _vm.errors.misce_expenses,
                                            },
                                            model: {
                                              value: _vm.form.misce_expenses,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "misce_expenses",
                                                  $$v
                                                )
                                              },
                                              expression: "form.misce_expenses",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Minimum Savings in Percentage"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Interest",
                                              outlined: "",
                                              color: "blue",
                                              "error-messages":
                                                _vm.errors.minimum_savings,
                                            },
                                            model: {
                                              value: _vm.form.minimum_savings,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "minimum_savings",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.minimum_savings",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Contact Phone Number"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "",
                                              placeholder: "Contact Number",
                                              outlined: "",
                                              color: "blue",
                                              "error-messages":
                                                _vm.errors.contact,
                                            },
                                            model: {
                                              value: _vm.form.contact,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "contact",
                                                  $$v
                                                )
                                              },
                                              expression: "form.contact",
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
                                    "v-row",
                                    { staticClass: "px-4 pb-4" },
                                    [
                                      _c(
                                        "div",
                                        [
                                          _c("v-btn", {
                                            staticClass: "wait--text",
                                            attrs: {
                                              elevation: "",
                                              color: "grey darken-2",
                                            },
                                            domProps: {
                                              textContent: _vm._s("Reset"),
                                            },
                                            on: { click: _vm.reset },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c("v-btn", {
                                            staticClass: "wait--text",
                                            attrs: {
                                              elevation: "",
                                              color: "info",
                                              disabled: _vm.loading,
                                            },
                                            domProps: {
                                              textContent:
                                                _vm._s("Update Info"),
                                            },
                                            on: { click: _vm.update },
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-snackbar",
                    {
                      attrs: { timeout: "2000" },
                      scopedSlots: _vm._u([
                        {
                          key: "action",
                          fn: function (ref) {
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._b(
                                  { attrs: { color: "blue", text: "" } },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                [_vm._v(" Close ")]
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.snackbar,
                        callback: function ($$v) {
                          _vm.snackbar = $$v
                        },
                        expression: "snackbar",
                      },
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(_vm.message) + "\n\n          "
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