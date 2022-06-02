(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vue_directive_copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-directive-copy */ "./node_modules/vue-directive-copy/src/main.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");








vue__WEBPACK_IMPORTED_MODULE_5__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_6___default()));
(0,_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              return _context.abrupt("return", page);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(plugin).component("Link", _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link);
    new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
      vuetify: new (vuetify__WEBPACK_IMPORTED_MODULE_6___default())({
        icons: {
          iconfont: 'fa' // default - only for display purposes

        },
        theme: {
          themes: {
            light: {
              wait: '#f0f2f1',
              secondary: '#008FD5',
              deepblue: '#004AA1',
              drawer: '#0B2138',
              background2: '#EFF2F6',
              deep2: '#0C2139'
            }
          }
        }
      }),
      render: function render(h) {
        return h(App, props);
      }
    }).$mount(el);
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Admin/Dashboard": [
		"./resources/js/Pages/Admin/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_vue"
	],
	"./Admin/Dashboard.vue": [
		"./resources/js/Pages/Admin/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_vue"
	],
	"./Admin/Deposited": [
		"./resources/js/Pages/Admin/Deposited.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Deposited_vue"
	],
	"./Admin/Deposited.vue": [
		"./resources/js/Pages/Admin/Deposited.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Deposited_vue"
	],
	"./Admin/Navigation": [
		"./resources/js/Pages/Admin/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Navigation_vue"
	],
	"./Admin/Navigation.vue": [
		"./resources/js/Pages/Admin/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Navigation_vue"
	],
	"./Admin/PendingPayment": [
		"./resources/js/Pages/Admin/PendingPayment.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_PendingPayment_vue"
	],
	"./Admin/PendingPayment.vue": [
		"./resources/js/Pages/Admin/PendingPayment.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_PendingPayment_vue"
	],
	"./Admin/Settings": [
		"./resources/js/Pages/Admin/Settings.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Settings_vue"
	],
	"./Admin/Settings.vue": [
		"./resources/js/Pages/Admin/Settings.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Settings_vue"
	],
	"./Admin/User/AllApplications": [
		"./resources/js/Pages/Admin/User/AllApplications.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_AllApplications_vue"
	],
	"./Admin/User/AllApplications.vue": [
		"./resources/js/Pages/Admin/User/AllApplications.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_AllApplications_vue"
	],
	"./Admin/User/AllDetails": [
		"./resources/js/Pages/Admin/User/AllDetails.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_AllDetails_vue"
	],
	"./Admin/User/AllDetails.vue": [
		"./resources/js/Pages/Admin/User/AllDetails.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_AllDetails_vue"
	],
	"./Admin/User/ShowApplication": [
		"./resources/js/Pages/Admin/User/ShowApplication.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_ShowApplication_vue"
	],
	"./Admin/User/ShowApplication.vue": [
		"./resources/js/Pages/Admin/User/ShowApplication.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_ShowApplication_vue"
	],
	"./Admin/User/ShowRoles": [
		"./resources/js/Pages/Admin/User/ShowRoles.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_ShowRoles_vue"
	],
	"./Admin/User/ShowRoles.vue": [
		"./resources/js/Pages/Admin/User/ShowRoles.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_ShowRoles_vue"
	],
	"./Admin/User/UpdateRoles": [
		"./resources/js/Pages/Admin/User/UpdateRoles.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_UpdateRoles_vue"
	],
	"./Admin/User/UpdateRoles.vue": [
		"./resources/js/Pages/Admin/User/UpdateRoles.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_User_UpdateRoles_vue"
	],
	"./Admin/Users": [
		"./resources/js/Pages/Admin/Users.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_vue"
	],
	"./Admin/Users.vue": [
		"./resources/js/Pages/Admin/Users.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_vue"
	],
	"./Application/AboutUs": [
		"./resources/js/Pages/Application/AboutUs.vue",
		"/js/vendor",
		"resources_js_Pages_Application_AboutUs_vue"
	],
	"./Application/AboutUs.vue": [
		"./resources/js/Pages/Application/AboutUs.vue",
		"/js/vendor",
		"resources_js_Pages_Application_AboutUs_vue"
	],
	"./Application/EmploymentStatus": [
		"./resources/js/Pages/Application/EmploymentStatus.vue",
		"/js/vendor",
		"resources_js_Pages_Application_EmploymentStatus_vue"
	],
	"./Application/EmploymentStatus.vue": [
		"./resources/js/Pages/Application/EmploymentStatus.vue",
		"/js/vendor",
		"resources_js_Pages_Application_EmploymentStatus_vue"
	],
	"./Application/Index": [
		"./resources/js/Pages/Application/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Index_vue"
	],
	"./Application/Index.vue": [
		"./resources/js/Pages/Application/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Index_vue"
	],
	"./Application/LoanAmount": [
		"./resources/js/Pages/Application/LoanAmount.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanAmount_vue"
	],
	"./Application/LoanAmount.vue": [
		"./resources/js/Pages/Application/LoanAmount.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanAmount_vue"
	],
	"./Application/LoanPurpose": [
		"./resources/js/Pages/Application/LoanPurpose.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanPurpose_vue"
	],
	"./Application/LoanPurpose.vue": [
		"./resources/js/Pages/Application/LoanPurpose.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanPurpose_vue"
	],
	"./Application/LoanRepaymentDetails": [
		"./resources/js/Pages/Application/LoanRepaymentDetails.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanRepaymentDetails_vue"
	],
	"./Application/LoanRepaymentDetails.vue": [
		"./resources/js/Pages/Application/LoanRepaymentDetails.vue",
		"/js/vendor",
		"resources_js_Pages_Application_LoanRepaymentDetails_vue"
	],
	"./Application/Location": [
		"./resources/js/Pages/Application/Location.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Location_vue"
	],
	"./Application/Location.vue": [
		"./resources/js/Pages/Application/Location.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Location_vue"
	],
	"./Application/Names": [
		"./resources/js/Pages/Application/Names.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Names_vue"
	],
	"./Application/Names.vue": [
		"./resources/js/Pages/Application/Names.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Names_vue"
	],
	"./Application/Submission": [
		"./resources/js/Pages/Application/Submission.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Submission_vue"
	],
	"./Application/Submission.vue": [
		"./resources/js/Pages/Application/Submission.vue",
		"/js/vendor",
		"resources_js_Pages_Application_Submission_vue"
	],
	"./Auth/EmailVerification": [
		"./resources/js/Pages/Auth/EmailVerification.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_EmailVerification_vue"
	],
	"./Auth/EmailVerification.vue": [
		"./resources/js/Pages/Auth/EmailVerification.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_EmailVerification_vue"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/ForgotPassword.vue": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/ResetPassword.vue": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Components/Calculator": [
		"./resources/js/Pages/Components/Calculator.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Calculator_vue"
	],
	"./Components/Calculator.vue": [
		"./resources/js/Pages/Components/Calculator.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Calculator_vue"
	],
	"./Components/Couresel": [
		"./resources/js/Pages/Components/Couresel.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Couresel_vue"
	],
	"./Components/Couresel.vue": [
		"./resources/js/Pages/Components/Couresel.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Couresel_vue"
	],
	"./Components/GetToKnow": [
		"./resources/js/Pages/Components/GetToKnow.vue",
		"/js/vendor",
		"resources_js_Pages_Components_GetToKnow_vue"
	],
	"./Components/GetToKnow.vue": [
		"./resources/js/Pages/Components/GetToKnow.vue",
		"/js/vendor",
		"resources_js_Pages_Components_GetToKnow_vue"
	],
	"./Components/LoanServices": [
		"./resources/js/Pages/Components/LoanServices.vue",
		"/js/vendor",
		"resources_js_Pages_Components_LoanServices_vue"
	],
	"./Components/LoanServices.vue": [
		"./resources/js/Pages/Components/LoanServices.vue",
		"/js/vendor",
		"resources_js_Pages_Components_LoanServices_vue"
	],
	"./Components/Paginator": [
		"./resources/js/Pages/Components/Paginator.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Paginator_vue"
	],
	"./Components/Paginator.vue": [
		"./resources/js/Pages/Components/Paginator.vue",
		"/js/vendor",
		"resources_js_Pages_Components_Paginator_vue"
	],
	"./Layouts/Navigation": [
		"./resources/js/Pages/Layouts/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Layouts_Navigation_vue"
	],
	"./Layouts/Navigation.vue": [
		"./resources/js/Pages/Layouts/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Layouts_Navigation_vue"
	],
	"./Test": [
		"./resources/js/Pages/Test.vue",
		"/js/vendor",
		"resources_js_Pages_Test_vue"
	],
	"./Test.vue": [
		"./resources/js/Pages/Test.vue",
		"/js/vendor",
		"resources_js_Pages_Test_vue"
	],
	"./Views/Contact": [
		"./resources/js/Pages/Views/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Contact_vue"
	],
	"./Views/Contact.vue": [
		"./resources/js/Pages/Views/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Contact_vue"
	],
	"./Views/Dashboard": [
		"./resources/js/Pages/Views/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Dashboard_vue"
	],
	"./Views/Dashboard.vue": [
		"./resources/js/Pages/Views/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Dashboard_vue"
	],
	"./Views/DashboardRefs": [
		"./resources/js/Pages/Views/DashboardRefs.vue",
		"/js/vendor",
		"resources_js_Pages_Views_DashboardRefs_vue"
	],
	"./Views/DashboardRefs.vue": [
		"./resources/js/Pages/Views/DashboardRefs.vue",
		"/js/vendor",
		"resources_js_Pages_Views_DashboardRefs_vue"
	],
	"./Views/FAQ": [
		"./resources/js/Pages/Views/FAQ.vue",
		"/js/vendor",
		"resources_js_Pages_Views_FAQ_vue"
	],
	"./Views/FAQ.vue": [
		"./resources/js/Pages/Views/FAQ.vue",
		"/js/vendor",
		"resources_js_Pages_Views_FAQ_vue"
	],
	"./Views/Home": [
		"./resources/js/Pages/Views/Home.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Home_vue"
	],
	"./Views/Home.vue": [
		"./resources/js/Pages/Views/Home.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Home_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);