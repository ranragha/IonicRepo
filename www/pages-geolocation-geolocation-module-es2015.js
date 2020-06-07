(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocation-geolocation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>GeoLocation</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <h1 style=\"color: blueviolet;\">Welcome To Repair.com</h1> -->\n</ion-header>\n\n<ion-content>\n\n  <button full (click) =\"getGeoLocation()\">Get Location</button>\n\n  <div *ngIf = \"location\">\n    <h3>Latitude : {{location.lat}}</h3>\n    <h3>Longitude : {{location.lng}}</h3>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/geolocation/geolocation-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GeolocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageRoutingModule", function() { return GeolocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/pages/geolocation/geolocation.page.ts");




const routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationPage"]
    }
];
let GeolocationPageRoutingModule = class GeolocationPageRoutingModule {
};
GeolocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeolocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.module.ts ***!
  \*********************************************************/
/*! exports provided: GeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function() { return GeolocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geolocation-routing.module */ "./src/app/pages/geolocation/geolocation-routing.module.ts");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/pages/geolocation/geolocation.page.ts");







let GeolocationPageModule = class GeolocationPageModule {
};
GeolocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationPageRoutingModule"]
        ],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
    })
], GeolocationPageModule);



/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.page.ts ***!
  \*******************************************************/
/*! exports provided: GeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function() { return GeolocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");



let GeolocationPage = class GeolocationPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ngOnInit() {
    }
    getCurrentCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.location = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
};
GeolocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
GeolocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./geolocation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/pages/geolocation/geolocation.page.scss")).default]
    })
], GeolocationPage);



/***/ })

}]);
//# sourceMappingURL=pages-geolocation-geolocation-module-es2015.js.map