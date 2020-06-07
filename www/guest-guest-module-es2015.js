(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guest-guest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guest/guest.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guest/guest.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Guest</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"onInput($event)\"></ion-searchbar>\n  <ion-list *ngIf=\"isShopAvailable\">\n      <ion-item *ngFor=\"let shop of shops\">{{ shop }}</ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/guest/guest-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/guest/guest-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GuestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageRoutingModule", function() { return GuestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest.page */ "./src/app/guest/guest.page.ts");




const routes = [
    {
        path: '',
        component: _guest_page__WEBPACK_IMPORTED_MODULE_3__["GuestPage"]
    }
];
let GuestPageRoutingModule = class GuestPageRoutingModule {
};
GuestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuestPageRoutingModule);



/***/ }),

/***/ "./src/app/guest/guest.module.ts":
/*!***************************************!*\
  !*** ./src/app/guest/guest.module.ts ***!
  \***************************************/
/*! exports provided: GuestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageModule", function() { return GuestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guest-routing.module */ "./src/app/guest/guest-routing.module.ts");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guest.page */ "./src/app/guest/guest.page.ts");







let GuestPageModule = class GuestPageModule {
};
GuestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuestPageRoutingModule"]
        ],
        declarations: [_guest_page__WEBPACK_IMPORTED_MODULE_6__["GuestPage"]]
    })
], GuestPageModule);



/***/ }),

/***/ "./src/app/guest/guest.page.scss":
/*!***************************************!*\
  !*** ./src/app/guest/guest.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #54d61c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3Vlc3QvRTpcXElvbmljXFxTSWRlTWVudVxcV2VSZXBhaXIvc3JjXFxhcHBcXGd1ZXN0XFxndWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2d1ZXN0L2d1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ndWVzdC9ndWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1NGQ2MWM7XHJcbn0iLCIubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM1NGQ2MWM7XG59Il19 */");

/***/ }),

/***/ "./src/app/guest/guest.page.ts":
/*!*************************************!*\
  !*** ./src/app/guest/guest.page.ts ***!
  \*************************************/
/*! exports provided: GuestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPage", function() { return GuestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GuestPage = class GuestPage {
    constructor() {
        this.isShopAvailable = false;
        this.fakeShopList = ['Two Wheeler', 'Four Wheeler', 'Three Wheeler', 'One Wheeler', 'Puncture Wala', 'zebra'];
        this.shops = [];
    }
    ngOnInit() {
    }
    onInput(evt) {
        const val = evt.target.value;
        this.shops = [];
        this.isShopAvailable = false;
        if (val && val.trim() != '') {
            this.isShopAvailable = true;
            this.shops = this.fakeShopList.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
};
GuestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./guest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guest/guest.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./guest.page.scss */ "./src/app/guest/guest.page.scss")).default]
    })
], GuestPage);



/***/ })

}]);
//# sourceMappingURL=guest-guest-module-es2015.js.map