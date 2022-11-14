(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badminton-badminton-module"],{

/***/ "./src/app/badminton/badminton.module.ts":
/*!***********************************************!*\
  !*** ./src/app/badminton/badminton.module.ts ***!
  \***********************************************/
/*! exports provided: BadmintonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadmintonPageModule", function() { return BadmintonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badminton_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badminton.page */ "./src/app/badminton/badminton.page.ts");







var routes = [
    {
        path: '',
        component: _badminton_page__WEBPACK_IMPORTED_MODULE_6__["BadmintonPage"]
    }
];
var BadmintonPageModule = /** @class */ (function () {
    function BadmintonPageModule() {
    }
    BadmintonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badminton_page__WEBPACK_IMPORTED_MODULE_6__["BadmintonPage"]]
        })
    ], BadmintonPageModule);
    return BadmintonPageModule;
}());



/***/ }),

/***/ "./src/app/badminton/badminton.page.html":
/*!***********************************************!*\
  !*** ./src/app/badminton/badminton.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Badminton Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let badminton of badmintons\">\n    <ion-card>\n      <img [src]=\"badminton.img\"/>\n      <ion-card-title>\n        {{badminton.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{badminton.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{badminton.number}}\" class=\"button button-positive\">{{badminton.number}}</a>\n        </p>\n        <a href=\"{{badminton.link}}\">Click here for more info</a>\n        <ion-button (click)=\"navme('badminton.location')\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/badminton/badminton.page.scss":
/*!***********************************************!*\
  !*** ./src/app/badminton/badminton.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhZG1pbnRvbi9iYWRtaW50b24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/badminton/badminton.page.ts":
/*!*********************************************!*\
  !*** ./src/app/badminton/badminton.page.ts ***!
  \*********************************************/
/*! exports provided: BadmintonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadmintonPage", function() { return BadmintonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");





var BadmintonPage = /** @class */ (function () {
    function BadmintonPage(router, postPvdr, launchNavigator) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.launchNavigator = launchNavigator;
        this.badmintons = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    BadmintonPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    BadmintonPage.prototype.ionViewWillEnter = function () {
        this.badmintons = [];
        this.start = 0;
        this.loadSportCenter();
    };
    BadmintonPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    BadmintonPage.prototype.loadSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getSportsCenter',
            };
            _this.postPvdr.postData(body, 'viewSportsCenterModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var badminton = _a[_i];
                    _this.badmintons.push(badminton);
                }
                resolve(true);
            });
        });
    };
    BadmintonPage.prototype.ngOnInit = function () {
    };
    BadmintonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badminton',
            template: __webpack_require__(/*! ./badminton.page.html */ "./src/app/badminton/badminton.page.html"),
            styles: [__webpack_require__(/*! ./badminton.page.scss */ "./src/app/badminton/badminton.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"]])
    ], BadmintonPage);
    return BadmintonPage;
}());



/***/ })

}]);
//# sourceMappingURL=badminton-badminton-module.js.map