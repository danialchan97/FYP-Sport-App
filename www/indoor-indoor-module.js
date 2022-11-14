(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indoor-indoor-module"],{

/***/ "./src/app/indoor/indoor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/indoor/indoor.module.ts ***!
  \*****************************************/
/*! exports provided: IndoorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoorPageModule", function() { return IndoorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _indoor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indoor.page */ "./src/app/indoor/indoor.page.ts");







var routes = [
    {
        path: '',
        component: _indoor_page__WEBPACK_IMPORTED_MODULE_6__["IndoorPage"]
    }
];
var IndoorPageModule = /** @class */ (function () {
    function IndoorPageModule() {
    }
    IndoorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_indoor_page__WEBPACK_IMPORTED_MODULE_6__["IndoorPage"]]
        })
    ], IndoorPageModule);
    return IndoorPageModule;
}());



/***/ }),

/***/ "./src/app/indoor/indoor.page.html":
/*!*****************************************!*\
  !*** ./src/app/indoor/indoor.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Indoor Sports\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let sukan of sukans\">\n      <ion-icon name=\"md-arrow-dropright\"></ion-icon>\n      <ion-button color=\"primary\" (click)=\"goToSportCenterPage(sukan.sportID, sukan.sportName)\"> {{sukan.sportName}} </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/indoor/indoor.page.scss":
/*!*****************************************!*\
  !*** ./src/app/indoor/indoor.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZG9vci9pbmRvb3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/indoor/indoor.page.ts":
/*!***************************************!*\
  !*** ./src/app/indoor/indoor.page.ts ***!
  \***************************************/
/*! exports provided: IndoorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoorPage", function() { return IndoorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");






var IndoorPage = /** @class */ (function () {
    //storage: any;
    function IndoorPage(router, postPvdr, navCtrl, storage) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.sukans = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    IndoorPage.prototype.ngOnInit = function () {
    };
    IndoorPage.prototype.ionViewWillEnter = function () {
        this.sukans = [];
        this.start = 0;
        this.loadSport();
    };
    IndoorPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSport().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    IndoorPage.prototype.loadSport = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getIndoor',
            };
            _this.postPvdr.postData(body, 'indoorModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var sukan = _a[_i];
                    _this.sukans.push(sukan);
                }
                resolve(true);
            });
        });
    };
    IndoorPage.prototype.goToSportCenterPage = function (id, name) {
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
    IndoorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indoor',
            template: __webpack_require__(/*! ./indoor.page.html */ "./src/app/indoor/indoor.page.html"),
            styles: [__webpack_require__(/*! ./indoor.page.scss */ "./src/app/indoor/indoor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], IndoorPage);
    return IndoorPage;
}());



/***/ })

}]);
//# sourceMappingURL=indoor-indoor-module.js.map