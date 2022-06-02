"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_User_UpdateRoles_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation.vue */ "./resources/js/Pages/Admin/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["roles"],
  data: function data() {
    return {
      form: {
        canrefer: this.roles.can_refer,
        isadmin: this.roles.is_admin,
        issuperadmin: this.roles.is_super_admin
      }
    };
  },
  methods: {
    reset: function reset() {
      this.form.canrefer = this.roles.can_refer;
      this.form.isadmin = this.roles.is_admin;
      this.form.issuperadmin = this.roles.is_super_admin;
    },
    update: function update() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put("".concat(this.$page.url), this.form, {
        preserveScroll: true,
        preserveState: true
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

/***/ "./resources/js/Pages/Admin/User/UpdateRoles.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Admin/User/UpdateRoles.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateRoles.vue?vue&type=template&id=cd08ca4e& */ "./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e&");
/* harmony import */ var _UpdateRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateRoles.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/User/UpdateRoles.vue"
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

/***/ "./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRoles_vue_vue_type_template_id_cd08ca4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateRoles.vue?vue&type=template&id=cd08ca4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/UpdateRoles.vue?vue&type=template&id=cd08ca4e& ***!
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
    "Navigation",
    [
      _c(
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
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-container",
                                {},
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-checkbox", {
                                            attrs: { label: "Can Refer" },
                                            model: {
                                              value: _vm.form.canrefer,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "canrefer",
                                                  $$v
                                                )
                                              },
                                              expression: "form.canrefer",
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
                                          _c("v-checkbox", {
                                            attrs: { label: "Is Admin" },
                                            model: {
                                              value: _vm.form.isadmin,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "isadmin",
                                                  $$v
                                                )
                                              },
                                              expression: "form.isadmin",
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
                                          _c("v-checkbox", {
                                            attrs: { label: "Is Super Admin" },
                                            model: {
                                              value: _vm.form.issuperadmin,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "issuperadmin",
                                                  $$v
                                                )
                                              },
                                              expression: "form.issuperadmin",
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
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass:
                                                "wait--text grey darken-2",
                                              attrs: {
                                                small: "",
                                                elevation: "",
                                                color: "",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.reset()
                                                },
                                              },
                                            },
                                            [_vm._v("Reset")]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "wait--text",
                                              attrs: {
                                                small: "",
                                                elevation: "",
                                                color: "secondary",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.update()
                                                },
                                              },
                                            },
                                            [_vm._v("Update")]
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