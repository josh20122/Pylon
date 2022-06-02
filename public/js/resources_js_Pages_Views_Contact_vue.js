"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Views_Contact_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    errors: {
      required: false,
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      contact: {
        name: null,
        email: null,
        subject: null,
        message: null,
        phone: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/contact", this.contact, {
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.loading === true;
        },
        onFinish: function onFinish() {
          _this.loading === false;
        }
      });
    }
  },
  components: {
    Navigation: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

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

/***/ "./resources/js/Pages/Views/Contact.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=16b17f06& */ "./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Views/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=16b17f06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        "div",
        [
          _c(
            "v-img",
            { attrs: { src: "images/about.jpg", "max-height": "300" } },
            [
              _c("div", { staticClass: "display-2 wait--text mt-[100px]" }, [
                _vm._v("Contact Us"),
              ]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
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
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        flat: "",
                        outlined: "",
                        "max-width": "500",
                        color: "mx-auto background2",
                      },
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
                                {},
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("div", { staticClass: "py-4" }, [
                                          _c("span", [
                                            _vm._v(" Get in Touch with us "),
                                          ]),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              color: "blue ",
                                              placeholder: "Your Name",
                                              outlined: "",
                                              flat: "",
                                              "error-messages": _vm.errors.name,
                                            },
                                            model: {
                                              value: _vm.contact.name,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.contact,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "contact.name",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              color: "blue ",
                                              placeholder: "Your Email",
                                              outlined: "",
                                              flat: "",
                                              "error-messages":
                                                _vm.errors.email,
                                            },
                                            model: {
                                              value: _vm.contact.email,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.contact,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "contact.email",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              color: "blue ",
                                              placeholder: "Phone Number",
                                              outlined: "",
                                              flat: "",
                                              "error-messages":
                                                _vm.errors.phone,
                                            },
                                            model: {
                                              value: _vm.contact.phone,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.contact,
                                                  "phone",
                                                  $$v
                                                )
                                              },
                                              expression: "contact.phone",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              color: "blue ",
                                              placeholder: "Subject",
                                              outlined: "",
                                              "error-messages":
                                                _vm.errors.subject,
                                              flat: "",
                                            },
                                            model: {
                                              value: _vm.contact.subject,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.contact,
                                                  "subject",
                                                  $$v
                                                )
                                              },
                                              expression: "contact.subject",
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
                                          _c("v-textarea", {
                                            attrs: {
                                              color: "blue ",
                                              placeholder: "Write Message",
                                              outlined: "",
                                              "error-messages":
                                                _vm.errors.message,
                                              flat: "",
                                            },
                                            model: {
                                              value: _vm.contact.message,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.contact,
                                                  "message",
                                                  $$v
                                                )
                                              },
                                              expression: "contact.message",
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
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass:
                                                "wait--text subtitle",
                                              attrs: {
                                                large: "",
                                                elevation: "",
                                                disabled: _vm.loading,
                                                color: "secondary",
                                              },
                                              on: { click: _vm.submit },
                                            },
                                            [_vm._v("Send a message")]
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