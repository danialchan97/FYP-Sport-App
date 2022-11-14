(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anj-anj-module"],{

/***/ "./src/app/anj/anj.module.ts":
/*!***********************************!*\
  !*** ./src/app/anj/anj.module.ts ***!
  \***********************************/
/*! exports provided: AnjPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnjPageModule", function() { return AnjPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _anj_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anj.page */ "./src/app/anj/anj.page.ts");







var routes = [
    {
        path: '',
        component: _anj_page__WEBPACK_IMPORTED_MODULE_6__["AnjPage"]
    }
];
var AnjPageModule = /** @class */ (function () {
    function AnjPageModule() {
    }
    AnjPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_anj_page__WEBPACK_IMPORTED_MODULE_6__["AnjPage"]]
        })
    ], AnjPageModule);
    return AnjPageModule;
}());



/***/ }),

/***/ "./src/app/anj/anj.page.html":
/*!***********************************!*\
  !*** ./src/app/anj/anj.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Anj Test\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let event of events\">\n    <ion-card>\n  \n      <ion-card-title>\n        {{event.sportID}}\n      </ion-card-title>\n      \n    </ion-card> \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/anj/anj.page.scss":
/*!***********************************!*\
  !*** ./src/app/anj/anj.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fuai9hbmoucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/anj/anj.page.ts":
/*!*********************************!*\
  !*** ./src/app/anj/anj.page.ts ***!
  \*********************************/
/*! exports provided: AnjPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnjPage", function() { return AnjPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AnjPage = /** @class */ (function () {
    function AnjPage(router, postPvdr) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.events = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    AnjPage.prototype.ngOnInit = function () {
    };
    AnjPage.prototype.ionViewWillEnter = function () {
        this.events = [];
        this.start = 0;
        this.loadEvent();
    };
    AnjPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadEvent().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    AnjPage.prototype.loadEvent = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'view',
            };
            _this.postPvdr.postData(body, 'anj.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var event_1 = _a[_i];
                    console.log(event_1);
                    _this.events.push(event_1);
                }
                resolve(true);
            });
        });
    };
    AnjPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anj',
            template: __webpack_require__(/*! ./anj.page.html */ "./src/app/anj/anj.page.html"),
            styles: [__webpack_require__(/*! ./anj.page.scss */ "./src/app/anj/anj.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], AnjPage);
    return AnjPage;
}());



/***/ })

}]);
//# sourceMappingURL=anj-anj-module.js.map