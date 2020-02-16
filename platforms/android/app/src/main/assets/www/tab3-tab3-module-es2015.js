(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">\n      Flights\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let flight of flights\">\n    <ion-card-content>\n      <ion-text>\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"arrow-round-up\"></ion-icon>Departure:\n        </h3>\n        {{flight?.departure}}\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"arrow-round-down\"></ion-icon>Destination:\n        </h3>\n        {{flight?.destination}}\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"alarm\" md=\"md-alarm\"></ion-icon>Duration:\n        </h3>\n        {{flight?.duration}}min\n        <h3 class=\"text-flight\"><ion-icon name=\"logo-usd\"></ion-icon>Price:</h3>\n        {{flight?.price}}$\n        <h3 class=\"text-flight\">\n          <ion-icon name=\"logo-usd\"></ion-icon>IdAirplane:\n        </h3>\n        {{flight?.idAirplane}}\n      </ion-text>\n    </ion-card-content>\n    <ion-button\n      (click)=\"launchDetail(flight.departure,flight.destination,flight.duration,flight.price,flight.idAirplane)\"\n      >Show details</ion-button\n    >\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  color: orange;\n}\n\n.text-flight {\n  color: #1698fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hcm9tYXR0ZW8vRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0L01vYmlsZS1TSkFpcmxpbmVzL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi50ZXh0LWZsaWdodCB7XG4gIGNvbG9yOiAjMTY5OGZhO1xufVxuIiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4udGV4dC1mbGlnaHQge1xuICBjb2xvcjogIzE2OThmYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_services_airport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/airport.service */ "./src/services/airport.service.ts");
/* harmony import */ var _services_flights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/flights.service */ "./src/services/flights.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let Tab3Page = class Tab3Page {
    constructor(activatedRoute, flightsService, airportService, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.flightsService = flightsService;
        this.airportService = airportService;
        this.navCtrl = navCtrl;
        this.flights = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = {
                params: Object.assign({}, this.activatedRoute.snapshot.params),
                query: Object.assign({}, this.activatedRoute.snapshot.queryParams)
            };
            if (!data.params.checkOut) {
                delete data.params.checkOut;
            }
            console.log("Data: ", data);
            try {
                // const airport = await this.airportService.getAirportById(
                //   data.params.departure
                // );
                // console.log("Aeroporto:", airport.name);
                (yield this.flightsService.getFlights(data)).forEach((flight) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const [departure, destination] = yield Promise.all([
                        this.airportService.getAirportById(flight.departure),
                        this.airportService.getAirportById(flight.destination)
                    ]);
                    [flight.departure, flight.destination] = [
                        departure.name,
                        destination.name
                    ];
                    this.flights.push(flight);
                }));
                return;
            }
            catch (err) {
                console.log("Err: ", err);
            }
        });
    }
    launchDetail(departure, destination, duration, price, idAirplane) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //details:idFlight
            yield this.navCtrl.navigateForward(`/details/${departure}/${destination}/${duration}/${price}/${idAirplane}`);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"] },
    { type: src_services_airport_service__WEBPACK_IMPORTED_MODULE_1__["AirportsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab3",
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"],
        src_services_airport_service__WEBPACK_IMPORTED_MODULE_1__["AirportsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], Tab3Page);



/***/ }),

/***/ "./src/services/flights.service.ts":
/*!*****************************************!*\
  !*** ./src/services/flights.service.ts ***!
  \*****************************************/
/*! exports provided: FlightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return FlightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FlightsService = class FlightsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // apiURL = `http://localhost:3004/flights`;
        this.apiURL = `https://api.sjairlines.tk/flights`;
    }
    getFlights(data) {
        Object.keys(data.params).forEach(key => data.params[key] === undefined && delete data.params[key]);
        Object.keys(data.query).forEach(key => data.query[key] === undefined && delete data.query[key]);
        console.log("params:", data);
        const queryString = Object.keys(data.query)
            .map(key => key + "=" + data.query[key])
            .join("&");
        console.log(queryString);
        return this.httpClient
            .get(`${this.apiURL}/${data.params.departure}/${data.params.destination}/1?${queryString}`)
            .toPromise();
    }
};
FlightsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FlightsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FlightsService);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map