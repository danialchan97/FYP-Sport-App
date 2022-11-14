(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tennis-tennis-module"],{

/***/ "./src/app/tennis/tennis.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tennis/tennis.module.ts ***!
  \*****************************************/
/*! exports provided: TennisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisPageModule", function() { return TennisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tennis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tennis.page */ "./src/app/tennis/tennis.page.ts");







var routes = [
    {
        path: '',
        component: _tennis_page__WEBPACK_IMPORTED_MODULE_6__["TennisPage"]
    }
];
var TennisPageModule = /** @class */ (function () {
    function TennisPageModule() {
    }
    TennisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tennis_page__WEBPACK_IMPORTED_MODULE_6__["TennisPage"]]
        })
    ], TennisPageModule);
    return TennisPageModule;
}());



/***/ }),

/***/ "./src/app/tennis/tennis.page.html":
/*!*****************************************!*\
  !*** ./src/app/tennis/tennis.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tennis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Tennis Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let tennis of tenniss\">\n    <ion-card>\n      <img [src]=\"tennis.img\"/>\n      <ion-card-title>\n        {{tennis.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{tennis.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{tennis.number}}\" class=\"button button-positive\">{{tennis.number}}</a>\n        </p>\n        <a href=\"{{tennis.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('tennis.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tennis/tennis.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tennis/tennis.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlbm5pcy90ZW5uaXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tennis/tennis.page.ts":
/*!***************************************!*\
  !*** ./src/app/tennis/tennis.page.ts ***!
  \***************************************/
/*! exports provided: TennisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisPage", function() { return TennisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var TennisPage = /** @class */ (function () {
    function TennisPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.tenniss = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    TennisPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    TennisPage.prototype.ionViewWillEnter = function () {
        this.tenniss = [];
        this.start = 0;
        this.loadSportCenter();
    };
    TennisPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    TennisPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportCenterTennis',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var tennis = _a[_i];
                    _this.tenniss.push(tennis);
                }
                resolve(true);
            });
        });
    };
    TennisPage.prototype.ngOnInit = function () {
    };
    TennisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tennis',
            template: __webpack_require__(/*! ./tennis.page.html */ "./src/app/tennis/tennis.page.html"),
            styles: [__webpack_require__(/*! ./tennis.page.scss */ "./src/app/tennis/tennis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], TennisPage);
    return TennisPage;
}());



/***/ })

}]);
//# sourceMappingURL=tennis-tennis-module.js.map