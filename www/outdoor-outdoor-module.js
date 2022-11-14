(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outdoor-outdoor-module"],{

/***/ "./src/app/outdoor/outdoor.module.ts":
/*!*******************************************!*\
  !*** ./src/app/outdoor/outdoor.module.ts ***!
  \*******************************************/
/*! exports provided: OutdoorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdoorPageModule", function() { return OutdoorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _outdoor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outdoor.page */ "./src/app/outdoor/outdoor.page.ts");







var routes = [
    {
        path: '',
        component: _outdoor_page__WEBPACK_IMPORTED_MODULE_6__["OutdoorPage"]
    }
];
var OutdoorPageModule = /** @class */ (function () {
    function OutdoorPageModule() {
    }
    OutdoorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_outdoor_page__WEBPACK_IMPORTED_MODULE_6__["OutdoorPage"]]
        })
    ], OutdoorPageModule);
    return OutdoorPageModule;
}());



/***/ }),

/***/ "./src/app/outdoor/outdoor.page.html":
/*!*******************************************!*\
  !*** ./src/app/outdoor/outdoor.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Outdoor Sports\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let sukan of sukans\">\n      <ion-icon name=\"md-arrow-dropright\"></ion-icon>\n      <ion-button color=\"primary\" (click)=\"goToSportCenterPage(sukan.sportID, sukan.sportName)\"> {{sukan.sportName}} </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/outdoor/outdoor.page.scss":
/*!*******************************************!*\
  !*** ./src/app/outdoor/outdoor.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGRvb3Ivb3V0ZG9vci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/outdoor/outdoor.page.ts":
/*!*****************************************!*\
  !*** ./src/app/outdoor/outdoor.page.ts ***!
  \*****************************************/
/*! exports provided: OutdoorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdoorPage", function() { return OutdoorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");






var OutdoorPage = /** @class */ (function () {
    function OutdoorPage(router, postPvdr, navCtrl, storage) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.sukans = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    OutdoorPage.prototype.ngOnInit = function () {
    };
    OutdoorPage.prototype.ionViewWillEnter = function () {
        this.sukans = [];
        this.start = 0;
        this.loadSport();
    };
    OutdoorPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSport().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    OutdoorPage.prototype.loadSport = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getOutdoor',
            };
            _this.postPvdr.postData(body, 'outdoorModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var sukan = _a[_i];
                    _this.sukans.push(sukan);
                }
                resolve(true);
            });
        });
    };
    OutdoorPage.prototype.goToSportCenterPage = function (id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        console.log(name);
                        return [4 /*yield*/, this.storage.set('sportName', name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('sportID', id)];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/view-sport-center']);
                        return [2 /*return*/];
                }
            });
        });
    };
    OutdoorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outdoor',
            template: __webpack_require__(/*! ./outdoor.page.html */ "./src/app/outdoor/outdoor.page.html"),
            styles: [__webpack_require__(/*! ./outdoor.page.scss */ "./src/app/outdoor/outdoor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], OutdoorPage);
    return OutdoorPage;
}());



/***/ })

}]);
//# sourceMappingURL=outdoor-outdoor-module.js.map