(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basketball-basketball-module"],{

/***/ "./src/app/basketball/basketball.module.ts":
/*!*************************************************!*\
  !*** ./src/app/basketball/basketball.module.ts ***!
  \*************************************************/
/*! exports provided: BasketballPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketballPageModule", function() { return BasketballPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _basketball_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basketball.page */ "./src/app/basketball/basketball.page.ts");







var routes = [
    {
        path: '',
        component: _basketball_page__WEBPACK_IMPORTED_MODULE_6__["BasketballPage"]
    }
];
var BasketballPageModule = /** @class */ (function () {
    function BasketballPageModule() {
    }
    BasketballPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_basketball_page__WEBPACK_IMPORTED_MODULE_6__["BasketballPage"]]
        })
    ], BasketballPageModule);
    return BasketballPageModule;
}());



/***/ }),

/***/ "./src/app/basketball/basketball.page.html":
/*!*************************************************!*\
  !*** ./src/app/basketball/basketball.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Basketball Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let basketball of basketballs\">\n    <ion-card>\n      <img [src]=\"basketball.img\"/>\n      <ion-card-title>\n        {{basketball.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{basketball.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{basketball.number}}\" class=\"button button-positive\">{{basketball.number}}</a>\n        </p>\n        <a href=\"{{basketball.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('basketball.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/basketball/basketball.page.scss":
/*!*************************************************!*\
  !*** ./src/app/basketball/basketball.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2tldGJhbGwvYmFza2V0YmFsbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/basketball/basketball.page.ts":
/*!***********************************************!*\
  !*** ./src/app/basketball/basketball.page.ts ***!
  \***********************************************/
/*! exports provided: BasketballPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketballPage", function() { return BasketballPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var BasketballPage = /** @class */ (function () {
    function BasketballPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.basketballs = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    BasketballPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    BasketballPage.prototype.ionViewWillEnter = function () {
        this.basketballs = [];
        this.start = 0;
        this.loadSportCenter();
    };
    BasketballPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    BasketballPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportCenterBasketball',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var basketball = _a[_i];
                    _this.basketballs.push(basketball);
                }
                resolve(true);
            });
        });
    };
    BasketballPage.prototype.ngOnInit = function () {
    };
    BasketballPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basketball',
            template: __webpack_require__(/*! ./basketball.page.html */ "./src/app/basketball/basketball.page.html"),
            styles: [__webpack_require__(/*! ./basketball.page.scss */ "./src/app/basketball/basketball.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], BasketballPage);
    return BasketballPage;
}());



/***/ })

}]);
//# sourceMappingURL=basketball-basketball-module.js.map