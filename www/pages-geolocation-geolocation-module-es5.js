function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocation-geolocation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGeolocationGeolocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>GeoLocation</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <h1 style=\"color: blueviolet;\">Welcome To Repair.com</h1> -->\n</ion-header>\n\n<ion-content>\n\n  <button full (click) =\"getGeoLocation()\">Get Location</button>\n\n  <div *ngIf = \"location\">\n    <h3>Latitude : {{location.lat}}</h3>\n    <h3>Longitude : {{location.lng}}</h3>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: GeolocationPageRoutingModule */

  /***/
  function srcAppPagesGeolocationGeolocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageRoutingModule", function () {
      return GeolocationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/pages/geolocation/geolocation.page.ts");

    var routes = [{
      path: '',
      component: _geolocation_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationPage"]
    }];

    var GeolocationPageRoutingModule = function GeolocationPageRoutingModule() {
      _classCallCheck(this, GeolocationPageRoutingModule);
    };

    GeolocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeolocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.module.ts ***!
    \*********************************************************/

  /*! exports provided: GeolocationPageModule */

  /***/
  function srcAppPagesGeolocationGeolocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function () {
      return GeolocationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./geolocation-routing.module */
    "./src/app/pages/geolocation/geolocation-routing.module.ts");
    /* harmony import */


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/pages/geolocation/geolocation.page.ts");

    var GeolocationPageModule = function GeolocationPageModule() {
      _classCallCheck(this, GeolocationPageModule);
    };

    GeolocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationPageRoutingModule"]],
      declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
    })], GeolocationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGeolocationGeolocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.page.ts ***!
    \*******************************************************/

  /*! exports provided: GeolocationPage */

  /***/
  function srcAppPagesGeolocationGeolocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPage", function () {
      return GeolocationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var GeolocationPage = /*#__PURE__*/function () {
      function GeolocationPage(geolocation) {
        _classCallCheck(this, GeolocationPage);

        this.geolocation = geolocation;
      }

      _createClass(GeolocationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCurrentCoordinates",
        value: function getCurrentCoordinates() {
          var _this = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location = {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            };
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        }
      }]);

      return GeolocationPage;
    }();

    GeolocationPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }];
    };

    GeolocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-geolocation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./geolocation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./geolocation.page.scss */
      "./src/app/pages/geolocation/geolocation.page.scss"))["default"]]
    })], GeolocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-geolocation-geolocation-module-es5.js.map