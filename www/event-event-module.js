(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");







var routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]
    }
];
var EventPageModule = /** @class */ (function () {
    function EventPageModule() {
    }
    EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
        })
    ], EventPageModule);
    return EventPageModule;
}());



/***/ }),

/***/ "./src/app/event/event.page.html":
/*!***************************************!*\
  !*** ./src/app/event/event.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Event Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-list *ngFor=\"let event of events\">\n    <ion-card>\n      <img [src]=\"event.eventImg\" />\n      <ion-card-title>\n        {{event.eventName}}\n      </ion-card-title>\n      \n      <ion-card-content>\n        <p>{{event.eventDetails}}</p>\n        <p>Date : {{event.eventDate}}</p>\n        <p>Time : {{event.eventTime}}</p>\n        <p>Contact Number : <a href=\"tel:{{event.phoneNumber}}\" class=\"button button-positive\">{{event.phoneNumber}}</a></p>\n        <a href=\"{{event.eventLink}}\">Click here for more info</a>\n      </ion-card-content>\n    </ion-card> \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/event/event.page.scss":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/event/event.page.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EventPage = /** @class */ (function () {
    function EventPage(router, postPvdr) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.events = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    EventPage.prototype.ngOnInit = function () {
    };
    EventPage.prototype.ionViewWillEnter = function () {
        this.events = [];
        this.start = 0;
        this.loadEvent();
    };
    EventPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadEvent().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    EventPage.prototype.loadEvent = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'viewEvent',
            };
            _this.postPvdr.postData(body, 'eventModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var event_1 = _a[_i];
                    _this.events.push(event_1);
                }
                resolve(true);
            });
        });
    };
    EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.page.html */ "./src/app/event/event.page.html"),
            styles: [__webpack_require__(/*! ./event.page.scss */ "./src/app/event/event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], EventPage);
    return EventPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-event-module.js.map