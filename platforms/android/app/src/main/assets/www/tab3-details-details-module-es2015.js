(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/details/details.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/details/details.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"\n      ><ion-back-button (click)=\"ionViewWillLeave()\"></ion-back-button\n    ></ion-buttons>\n    <ion-title class=\"title\">Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-text>\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"arrow-round-up\"></ion-icon>Departure:\n        </h3>\n        {{departure}}\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"arrow-round-down\"></ion-icon>Destination:\n        </h3>\n        {{destination}}\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"alarm\" md=\"md-alarm\"></ion-icon>Duration:\n        </h3>\n        {{duration}}min\n        <h3 class=\"text-flight\"><ion-icon name=\"logo-usd\"></ion-icon>Price:</h3>\n        {{price}}$\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"logo-usd\"></ion-icon>IdAirplane:\n        </h3>\n        {{idAirplane}}\n        <!-- <h3 class=\"text-details\">\n          <ion-icon name=\"list-box\"></ion-icon>Model:{{airplane.model}}\n        </h3> -->\n        <h3 class=\"text-details\">\n          <ion-icon name=\"person\"></ion-icon>N.Seats:{{airplane?.numSeats}}\n        </h3>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/details/details-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab3/details/details-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/tab3/details/details.page.ts");




const routes = [
    {
        path: "",
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/details/details.module.ts":
/*!************************************************!*\
  !*** ./src/app/tab3/details/details.module.ts ***!
  \************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/tab3/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/tab3/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/tab3/details/details.page.scss":
/*!************************************************!*\
  !*** ./src/app/tab3/details/details.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: orange;\n  text-align: center;\n}\n\n.text-details {\n  color: #1698fa;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hcm9tYXR0ZW8vRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0L01vYmlsZS1TSkFpcmxpbmVzL3NyYy9hcHAvdGFiMy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90YWIzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBjb2xvcjogb3JhbmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1kZXRhaWxzIHtcbiAgY29sb3I6ICMxNjk4ZmE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiIsIi50aXRsZSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtZGV0YWlscyB7XG4gIGNvbG9yOiAjMTY5OGZhO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/details/details.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tab3/details/details.page.ts ***!
  \**********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_airplane_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/airplane.service */ "./src/services/airplane.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DetailsPage = class DetailsPage {
    constructor(airplaneService, activatedRoute, socket, toastCtrl) {
        this.airplaneService = airplaneService;
        this.activatedRoute = activatedRoute;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.departure = this.activatedRoute.snapshot.params.departure;
            this.destination = this.activatedRoute.snapshot.params.destination;
            this.duration = this.activatedRoute.snapshot.params.duration;
            this.price = this.activatedRoute.snapshot.params.price;
            this.idAirplane = this.activatedRoute.snapshot.params.idAirplane;
            this.airplane = yield this.airplaneService.getAirplaneById(this.idAirplane);
            this.socket.connect();
            this.socket.emit("set-airplane", this.airplane);
            this.socket.fromEvent("airplane-changed").subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.airplane = yield this.airplaneService.getAirplaneById(this.airplane._id);
                this.showToast(data["event"]);
            }));
        });
    }
    ionViewWillLeave() {
        this.socket.disconnect();
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                position: "top",
                duration: 2000
            });
            toast.present();
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: src_services_airplane_service__WEBPACK_IMPORTED_MODULE_3__["AirplaneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-details",
        template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/details/details.page.html"),
        styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/tab3/details/details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_airplane_service__WEBPACK_IMPORTED_MODULE_3__["AirplaneService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], DetailsPage);



/***/ }),

/***/ "./src/services/airplane.service.ts":
/*!******************************************!*\
  !*** ./src/services/airplane.service.ts ***!
  \******************************************/
/*! exports provided: AirplaneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplaneService", function() { return AirplaneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AirplaneService = class AirplaneService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = `http://localhost:3004/airplanes`;
    }
    getAirplaneById(id) {
        return this.httpClient
            .get(`${this.apiURL}/?id=${id}`)
            .toPromise();
    }
};
AirplaneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AirplaneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AirplaneService);



/***/ })

}]);
//# sourceMappingURL=tab3-details-details-module-es2015.js.map