(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["takraw-takraw-module"],{

/***/ "./src/app/takraw/takraw.module.ts":
/*!*****************************************!*\
  !*** ./src/app/takraw/takraw.module.ts ***!
  \*****************************************/
/*! exports provided: TakrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakrawPageModule", function() { return TakrawPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _takraw_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./takraw.page */ "./src/app/takraw/takraw.page.ts");







var routes = [
    {
        path: '',
        component: _takraw_page__WEBPACK_IMPORTED_MODULE_6__["TakrawPage"]
    }
];
var TakrawPageModule = /** @class */ (function () {
    function TakrawPageModule() {
    }
    TakrawPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_takraw_page__WEBPACK_IMPORTED_MODULE_6__["TakrawPage"]]
        })
    ], TakrawPageModule);
    return TakrawPageModule;
}());



/***/ }),

/***/ "./src/app/takraw/takraw.page.html":
/*!*****************************************!*\
  !*** ./src/app/takraw/takraw.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Takraw Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let takraw of takraws\">\n    <ion-card>\n      <img [src]=\"takraw.img\"/>\n      <ion-card-title>\n        {{takraw.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{takraw.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{takraw.number}}\" class=\"button button-positive\">{{takraw.number}}</a>\n        </p>\n        <a href=\"{{takraw.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('takraw.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/takraw/takraw.page.scss":
/*!*****************************************!*\
  !*** ./src/app/takraw/takraw.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rha3Jhdy90YWtyYXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/takraw/takraw.page.ts":
/*!***************************************!*\
  !*** ./src/app/takraw/takraw.page.ts ***!
  \***************************************/
/*! exports provided: TakrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakrawPage", function() { return TakrawPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var TakrawPage = /** @class */ (function () {
    function TakrawPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.takraws = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    TakrawPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    TakrawPage.prototype.ionViewWillEnter = function () {
        this.takraws = [];
        this.start = 0;
        this.loadSportCenter();
    };
    TakrawPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    TakrawPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportCenterTakraw',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var takraw = _a[_i];
                    _this.takraws.push(takraw);
                }
                resolve(true);
            });
        });
    };
    TakrawPage.prototype.ngOnInit = function () {
    };
    TakrawPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-takraw',
            template: __webpack_require__(/*! ./takraw.page.html */ "./src/app/takraw/takraw.page.html"),
            styles: [__webpack_require__(/*! ./takraw.page.scss */ "./src/app/takraw/takraw.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], TakrawPage);
    return TakrawPage;
}());



/***/ })

}]);
//# sourceMappingURL=takraw-takraw-module.js.map