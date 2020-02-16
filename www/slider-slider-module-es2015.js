(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-slider-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/slider/slider.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slider/slider.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <!-- con il continue -> mi porto alle tabs -->\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"slide1\">\n      <h1>Benvenuto</h1>\n      <h1>Welcome</h1>\n      <h1>Willkommen</h1>\n    </ion-slide>\n    <ion-slide class=\"slide2\">\n      <h1>Do you like travelling?</h1>\n    </ion-slide>\n    <ion-slide class=\"slide3\">\n      <img class=\"airplane\" src=\"../../assets/air.png\" alt=\"ciao\" />\n      <h1>What are you waiting for?</h1>\n      <h1>Enjoy!</h1>\n      <ion-button fill=\"clear\" (click)=\"goTabs()\"\n        >Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon\n      ></ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/slider/slider-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/slider/slider-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SliderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageRoutingModule", function() { return SliderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.page */ "./src/app/slider/slider.page.ts");




const routes = [
    {
        path: '',
        component: _slider_page__WEBPACK_IMPORTED_MODULE_3__["SliderPage"]
    }
];
let SliderPageRoutingModule = class SliderPageRoutingModule {
};
SliderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SliderPageRoutingModule);



/***/ }),

/***/ "./src/app/slider/slider.module.ts":
/*!*****************************************!*\
  !*** ./src/app/slider/slider.module.ts ***!
  \*****************************************/
/*! exports provided: SliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageModule", function() { return SliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-routing.module */ "./src/app/slider/slider-routing.module.ts");
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.page */ "./src/app/slider/slider.page.ts");







let SliderPageModule = class SliderPageModule {
};
SliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderPageRoutingModule"]
        ],
        declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]]
    })
], SliderPageModule);



/***/ }),

/***/ "./src/app/slider/slider.page.scss":
/*!*****************************************!*\
  !*** ./src/app/slider/slider.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide1 {\n  height: 100vh;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#f39c12), color-stop(#ff7266), color-stop(#ff68b3), color-stop(#bc81ed), to(#1698fa));\n  background-image: linear-gradient(to top, #f39c12, #ff7266, #ff68b3, #bc81ed, #1698fa);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.slide1,\n.slide2,\n.slide3 h1 {\n  font-size: 20px;\n  color: #fff;\n}\n\n.airplane {\n  width: 200px;\n  height: 150px;\n}\n\n.slide2 {\n  height: 100vh;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f39c12), color-stop(#ff7266), color-stop(#ff68b3), color-stop(#bc81ed), to(#1698fa));\n  background-image: linear-gradient(to bottom, #f39c12, #ff7266, #ff68b3, #bc81ed, #1698fa);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.slide3 {\n  height: 100vh;\n  background-image: -webkit-gradient(linear, right bottom, left top, from(#f39c12), color-stop(#ff7266), color-stop(#ff68b3), color-stop(#bc81ed), to(#1698fa));\n  background-image: linear-gradient(to left top, #f39c12, #ff7266, #ff68b3, #bc81ed, #1698fa);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hcm9tYXR0ZW8vRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0L01vYmlsZS1TSkFpcmxpbmVzL3NyYy9hcHAvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDRKQUFBO0VBQUEsc0ZBQUE7RUFRQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ05GOztBRFNBOzs7RUFHRSxlQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSw0SkFBQTtFQUFBLHlGQUFBO0VBUUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNiRjs7QURlQTtFQUNFLGFBQUE7RUFDQSw2SkFBQTtFQUFBLDJGQUFBO0VBUUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNuQkYiLCJmaWxlIjoic3JjL2FwcC9zbGlkZXIvc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZTEge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gdG9wLFxuICAgICNmMzljMTIsXG4gICAgI2ZmNzI2NixcbiAgICAjZmY2OGIzLFxuICAgICNiYzgxZWQsXG4gICAgIzE2OThmYVxuICApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNsaWRlMSxcbi5zbGlkZTIsXG4uc2xpZGUzIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFpcnBsYW5lIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2xpZGUyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICAjZjM5YzEyLFxuICAgICNmZjcyNjYsXG4gICAgI2ZmNjhiMyxcbiAgICAjYmM4MWVkLFxuICAgICMxNjk4ZmFcbiAgKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2xpZGUzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGxlZnQgdG9wLFxuICAgICNmMzljMTIsXG4gICAgI2ZmNzI2NixcbiAgICAjZmY2OGIzLFxuICAgICNiYzgxZWQsXG4gICAgIzE2OThmYVxuICApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiIsIi5zbGlkZTEge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjM5YzEyLCAjZmY3MjY2LCAjZmY2OGIzLCAjYmM4MWVkLCAjMTY5OGZhKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zbGlkZTEsXG4uc2xpZGUyLFxuLnNsaWRlMyBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5haXJwbGFuZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNsaWRlMiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMzljMTIsICNmZjcyNjYsICNmZjY4YjMsICNiYzgxZWQsICMxNjk4ZmEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNsaWRlMyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgI2YzOWMxMiwgI2ZmNzI2NiwgI2ZmNjhiMywgI2JjODFlZCwgIzE2OThmYSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/slider/slider.page.ts":
/*!***************************************!*\
  !*** ./src/app/slider/slider.page.ts ***!
  \***************************************/
/*! exports provided: SliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPage", function() { return SliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SliderPage = class SliderPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
    goTabs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward("tabs/tab1");
        });
    }
};
SliderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
SliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-slider",
        template: __webpack_require__(/*! raw-loader!./slider.page.html */ "./node_modules/raw-loader/index.js!./src/app/slider/slider.page.html"),
        styles: [__webpack_require__(/*! ./slider.page.scss */ "./src/app/slider/slider.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
], SliderPage);



/***/ })

}]);
//# sourceMappingURL=slider-slider-module-es2015.js.map