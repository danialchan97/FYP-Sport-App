(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["football-football-module"],{

/***/ "./src/app/football/football.module.ts":
/*!*********************************************!*\
  !*** ./src/app/football/football.module.ts ***!
  \*********************************************/
/*! exports provided: FootballPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballPageModule", function() { return FootballPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _football_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./football.page */ "./src/app/football/football.page.ts");







var routes = [
    {
        path: '',
        component: _football_page__WEBPACK_IMPORTED_MODULE_6__["FootballPage"]
    }
];
var FootballPageModule = /** @class */ (function () {
    function FootballPageModule() {
    }
    FootballPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_football_page__WEBPACK_IMPORTED_MODULE_6__["FootballPage"]]
        })
    ], FootballPageModule);
    return FootballPageModule;
}());



/***/ }),

/***/ "./src/app/football/football.page.html":
/*!*********************************************!*\
  !*** ./src/app/football/football.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Football Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let foot of foots\">\n    <ion-card>\n      <img [src]=\"foot.img\"/>\n      <ion-card-title>\n        {{foot.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{foot.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{foot.number}}\" class=\"button button-positive\">{{foot.number}}</a>\n        </p>\n        <a href=\"{{foot.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('foot.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/football/football.page.scss":
/*!*********************************************!*\
  !*** ./src/app/football/football.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RiYWxsL2Zvb3RiYWxsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/football/football.page.ts":
/*!*******************************************!*\
  !*** ./src/app/football/football.page.ts ***!
  \*******************************************/
/*! exports provided: FootballPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballPage", function() { return FootballPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var FootballPage = /** @class */ (function () {
    function FootballPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.foots = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    FootballPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    FootballPage.prototype.ionViewWillEnter = function () {
        this.foots = [];
        this.start = 0;
        this.loadSportCenter();
    };
    FootballPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    FootballPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportCenterFootball',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var foot = _a[_i];
                    _this.foots.push(foot);
                }
                resolve(true);
            });
        });
    };
    FootballPage.prototype.ngOnInit = function () {
    };
    FootballPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-football',
            template: __webpack_require__(/*! ./football.page.html */ "./src/app/football/football.page.html"),
            styles: [__webpack_require__(/*! ./football.page.scss */ "./src/app/football/football.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], FootballPage);
    return FootballPage;
}());



/***/ })

}]);
//# sourceMappingURL=football-football-module.js.map