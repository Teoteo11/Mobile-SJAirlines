(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">\n      Bookings\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"card\">\n    <ion-list>\n      <ion-item (click)=\"openModal()\"\n        >{{airportSelectedDeparture?.city}} {{ airportSelectedDeparture?.name ||\n        'Departure' }}</ion-item\n      >\n    </ion-list>\n  </ion-card>\n  <ion-card class=\"card\">\n    <ion-list>\n      <ion-item (click)=\"openModal2()\"\n        >{{airportSelectedDestination?.city}} {{\n        airportSelectedDestination?.name || 'Destination' }}</ion-item\n      >\n    </ion-list>\n  </ion-card>\n  <ion-card class=\"card\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Check In</ion-label>\n        <ion-datetime\n          [(ngModel)]=\"checkIn\"\n          displayFormat=\"MM DD YY\"\n          placeholder=\"Select Date\"\n        ></ion-datetime>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card class=\"card\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Check Out</ion-label>\n\n        <!-- <ion-toggle></ion-toggle> -->\n        <ion-datetime\n          [(ngModel)]=\"checkout\"\n          displayFormat=\"MM DD YY\"\n          placeholder=\"Select Date\"\n        ></ion-datetime>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-list>\n    <div class=\"button-check\">\n      <ion-button class=\"btn-color\" (click)=\"launchTab3Page()\"\n        >Check the flights</ion-button\n      >\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: "", component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]],
        entryComponents: [_modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-check {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.btn-color {\n  background-color: #1698fa;\n  border-radius: 6px;\n}\n\n.card {\n  padding: 10px;\n  border: 2px solid #1698fa;\n}\n\n.title {\n  text-align: center;\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hcm9tYXR0ZW8vRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0L01vYmlsZS1TSkFpcmxpbmVzL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY2hlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY5OGZhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNjk4ZmE7XG59XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4iLCIuYnV0dG9uLWNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY5OGZhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzE2OThmYTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogb3JhbmdlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let Tab2Page = class Tab2Page {
    constructor(navCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__["ModalPage"]
            });
            yield myModal.present();
            const { data } = yield myModal.onWillDismiss();
            if (data) {
                this.airportSelectedDeparture = data.airport;
                // console.log(this.airportSelectedDeparture);
            }
        });
    }
    openModal2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__["ModalPage"]
            });
            yield myModal.present();
            const { data } = yield myModal.onWillDismiss();
            if (data) {
                this.airportSelectedDestination = data.airport;
                // console.log(this.airportSelectedDestination);
            }
        });
    }
    launchTab3Page() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.checkIn);
            const url = `/tabs/tab3/${this.airportSelectedDeparture._id}/${this.airportSelectedDestination._id}?${Boolean(this.checkIn) && this.checkIn.toString() !== ""
                ? `checkIn=${new Date(this.checkIn).getTime()}`
                : ""}${Boolean(this.checkout) && this.checkout.toString() !== ""
                ? `&checkOut=${new Date(this.checkout).getTime()}`
                : ""}`;
            yield this.navCtrl.navigateForward(url);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tab2",
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map