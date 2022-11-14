(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squash-squash-module"],{

/***/ "./src/app/squash/squash.module.ts":
/*!*****************************************!*\
  !*** ./src/app/squash/squash.module.ts ***!
  \*****************************************/
/*! exports provided: SquashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquashPageModule", function() { return SquashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _squash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./squash.page */ "./src/app/squash/squash.page.ts");







var routes = [
    {
        path: '',
        component: _squash_page__WEBPACK_IMPORTED_MODULE_6__["SquashPage"]
    }
];
var SquashPageModule = /** @class */ (function () {
    function SquashPageModule() {
    }
    SquashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_squash_page__WEBPACK_IMPORTED_MODULE_6__["SquashPage"]]
        })
    ], SquashPageModule);
    return SquashPageModule;
}());



/***/ }),

/***/ "./src/app/squash/squash.page.html":
/*!*****************************************!*\
  !*** ./src/app/squash/squash.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Squash Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let squash of squashs\">\n    <ion-card>\n      <img [src]=\"squash.img\"/>\n      <ion-card-title>\n        {{squash.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{squash.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{squash.number}}\" class=\"button button-positive\">{{squash.number}}</a>\n        </p>\n        <a href=\"{{squash.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('squash.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/squash/squash.page.scss":
/*!*****************************************!*\
  !*** ./src/app/squash/squash.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxdWFzaC9zcXVhc2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/squash/squash.page.ts":
/*!***************************************!*\
  !*** ./src/app/squash/squash.page.ts ***!
  \***************************************/
/*! exports provided: SquashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquashPage", function() { return SquashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var SquashPage = /** @class */ (function () {
    function SquashPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.squashs = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    SquashPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    SquashPage.prototype.ionViewWillEnter = function () {
        this.squashs = [];
        this.start = 0;
        this.loadSportCenter();
    };
    SquashPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    SquashPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportCenterSquash',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var squash = _a[_i];
                    _this.squashs.push(squash);
                }
                resolve(true);
            });
        });
    };
    SquashPage.prototype.ngOnInit = function () {
    };
    SquashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-squash',
            template: __webpack_require__(/*! ./squash.page.html */ "./src/app/squash/squash.page.html"),
            styles: [__webpack_require__(/*! ./squash.page.scss */ "./src/app/squash/squash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], SquashPage);
    return SquashPage;
}());



/***/ })

}]);
//# sourceMappingURL=squash-squash-module.js.map