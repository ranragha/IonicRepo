(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carservice-carservice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carservice/carservice.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carservice/carservice.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Car Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"onInput($event)\"></ion-searchbar>\n  <ion-list *ngIf=\"isShopAvailable\">\n      <ion-item *ngFor=\"let shop of shops\">{{ shop }}</ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/carservice/carservice-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/carservice/carservice-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CarservicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarservicePageRoutingModule", function() { return CarservicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carservice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carservice.page */ "./src/app/pages/carservice/carservice.page.ts");




const routes = [
    {
        path: '',
        component: _carservice_page__WEBPACK_IMPORTED_MODULE_3__["CarservicePage"]
    }
];
let CarservicePageRoutingModule = class CarservicePageRoutingModule {
};
CarservicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarservicePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/carservice/carservice.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/carservice/carservice.module.ts ***!
  \*******************************************************/
/*! exports provided: CarservicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarservicePageModule", function() { return CarservicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carservice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carservice-routing.module */ "./src/app/pages/carservice/carservice-routing.module.ts");
/* harmony import */ var _carservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carservice.page */ "./src/app/pages/carservice/carservice.page.ts");







let CarservicePageModule = class CarservicePageModule {
};
CarservicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carservice_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarservicePageRoutingModule"]
        ],
        declarations: [_carservice_page__WEBPACK_IMPORTED_MODULE_6__["CarservicePage"]]
    })
], CarservicePageModule);



/***/ }),

/***/ "./src/app/pages/carservice/carservice.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/carservice/carservice.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnNlcnZpY2UvY2Fyc2VydmljZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/carservice/carservice.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/carservice/carservice.page.ts ***!
  \*****************************************************/
/*! exports provided: CarservicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarservicePage", function() { return CarservicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CarservicePage = class CarservicePage {
    constructor() { }
    ngOnInit() {
    }
};
CarservicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carservice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carservice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carservice/carservice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carservice.page.scss */ "./src/app/pages/carservice/carservice.page.scss")).default]
    })
], CarservicePage);



/***/ })

}]);
//# sourceMappingURL=pages-carservice-carservice-module-es2015.js.map