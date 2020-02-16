(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">\n      SJAirlines\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"border-radius: 6px;\">\n    <ion-card-header>\n      <img src=\"../../assets/paradise.jpg\" alt=\"paradise\" />\n      <ion-card-subtitle>Join with us</ion-card-subtitle>\n      <ion-card-title class=\"titleCard\">Welcome to SJAirlines</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile, and\n      climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n  <ion-text>\n    <h1>Best Destinations</h1>\n  </ion-text>\n\n  <ion-card>\n    <ion-slides pager=\"true\" effect=\"fade\" style=\"background-color: bisque\">\n      <ion-slide>\n        <img src=\"../../assets/lon.jpg\" alt=\"londra\" />\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/dub.jpg\" alt=\"londra\" />\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/par.jpg\" alt=\"londra\" />\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/amst.jpeg\" alt=\"londra\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-footer>\n    <ion-toolbar>\n      <div class=\"footer\">\n        <ion-title class=\"titleCard\">About us</ion-title>\n        <ion-icon\n          class=\"icon1\"\n          ios=\"logo-whatsapp\"\n          md=\"logo-whatsapp\"\n        ></ion-icon>\n        <ion-icon class=\"icon2\" ios=\"logo-twitter\" md=\"logo-twitter\"></ion-icon>\n        <ion-icon\n          class=\"icon3\"\n          ios=\"logo-instagram\"\n          md=\"logo-instagram\"\n        ></ion-icon>\n        <ion-icon\n          class=\"icon4\"\n          ios=\"logo-facebook\"\n          md=\"logo-facebook\"\n        ></ion-icon>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-text {\n  color: #1698fa;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  color: orange;\n}\n\n.titleCard {\n  color: orange;\n}\n\n.footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n}\n\n.icon1,\n.icon2,\n.icon3,\n.icon4 {\n  width: 30px;\n  height: 30px;\n}\n\n.icon1 {\n  color: #1bbd1b;\n}\n\n.icon2 {\n  color: #00b7ff;\n}\n\n.icon3 {\n  color: #c13584;\n}\n\n.icon4 {\n  color: #006ed4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hcm9tYXR0ZW8vRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0L01vYmlsZS1TSkFpcmxpbmVzL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtBQ0dGOztBREFBOzs7O0VBSUUsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dCB7XG4gIGNvbG9yOiAjMTY5OGZhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4udGl0bGVDYXJkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaWNvbjEsXG4uaWNvbjIsXG4uaWNvbjMsXG4uaWNvbjQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmljb24xIHtcbiAgY29sb3I6IHJnYigyNywgMTg5LCAyNyk7XG59XG4uaWNvbjIge1xuICBjb2xvcjogcmdiKDAsIDE4MywgMjU1KTtcbn1cbi5pY29uMyB7XG4gIGNvbG9yOiAjYzEzNTg0O1xufVxuLmljb240IHtcbiAgY29sb3I6IHJnYigwLCAxMTAsIDIxMik7XG59XG4iLCJpb24tdGV4dCB7XG4gIGNvbG9yOiAjMTY5OGZhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnRpdGxlQ2FyZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmljb24xLFxuLmljb24yLFxuLmljb24zLFxuLmljb240IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmljb24xIHtcbiAgY29sb3I6ICMxYmJkMWI7XG59XG5cbi5pY29uMiB7XG4gIGNvbG9yOiAjMDBiN2ZmO1xufVxuXG4uaWNvbjMge1xuICBjb2xvcjogI2MxMzU4NDtcbn1cblxuLmljb240IHtcbiAgY29sb3I6ICMwMDZlZDQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page.prototype.ngOnInit = function () { };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab1",
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map