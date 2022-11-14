(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-sport-center-view-sport-center-module"],{

/***/ "./src/app/view-sport-center/view-sport-center.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-sport-center/view-sport-center.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewSportCenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSportCenterPageModule", function() { return ViewSportCenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_sport_center_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-sport-center.page */ "./src/app/view-sport-center/view-sport-center.page.ts");







var routes = [
    {
        path: '',
        component: _view_sport_center_page__WEBPACK_IMPORTED_MODULE_6__["ViewSportCenterPage"]
    }
];
var ViewSportCenterPageModule = /** @class */ (function () {
    function ViewSportCenterPageModule() {
    }
    ViewSportCenterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_sport_center_page__WEBPACK_IMPORTED_MODULE_6__["ViewSportCenterPage"]]
        })
    ], ViewSportCenterPageModule);
    return ViewSportCenterPageModule;
}());



/***/ }),

/***/ "./src/app/view-sport-center/view-sport-center.page.html":
/*!***************************************************************!*\
  !*** ./src/app/view-sport-center/view-sport-center.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{sportName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let sc of sCenter\">\n    <ion-card>\n      <img [src]=\"sc.img\"/>\n      <ion-card-title>\n        {{sc.name}}\n      </ion-card-title>\n\n      <ion-card-content>\n        <p>{{sc.location}}</p>\n        <p>Contact Number : <a href=\"tel:{{sc.number}}\" class=\"button button-positive\">{{sc.number}}</a>\n        </p>\n        <a href=\"{{sc.link}}\">Click here for more info</a><br>\n        <ion-button (click)=\"navme(sc.location)\">Navigate</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/view-sport-center/view-sport-center.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/view-sport-center/view-sport-center.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3BvcnQtY2VudGVyL3ZpZXctc3BvcnQtY2VudGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view-sport-center/view-sport-center.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-sport-center/view-sport-center.page.ts ***!
  \*************************************************************/
/*! exports provided: ViewSportCenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSportCenterPage", function() { return ViewSportCenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/post-provider */ "./src/providers/post-provider.ts");






var ViewSportCenterPage = /** @class */ (function () {
    function ViewSportCenterPage(launchNavigator, route, storage, router, postPvdr) {
        var _this = this;
        this.launchNavigator = launchNavigator;
        this.route = route;
        this.storage = storage;
        this.router = router;
        this.postPvdr = postPvdr;
        this.sCenter = [];
        this.badmintons = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
        storage.get('sportName').then(function (name) {
            _this.sportName = name;
            console.log('Received Parameter: ' + _this.sportName);
        });
        storage.get('sportID').then(function (id) {
            _this.sportID = id;
            console.log('Received Parameter: ' + _this.sportID);
        });
    }
    ViewSportCenterPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    ViewSportCenterPage.prototype.ionViewWillEnter = function () {
        this.badmintons = [];
        this.start = 0;
        this.loadSportsCenter();
    };
    ViewSportCenterPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSportsCenter().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    ViewSportCenterPage.prototype.loadSportsCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                sportID: _this.sportID,
                aksi: 'getSportsCenter',
            };
            _this.postPvdr.postData(body, 'viewSportsCenterModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var sc = _a[_i];
                    _this.sCenter.push(sc);
                }
                resolve(true);
            });
        });
    };
    ViewSportCenterPage.prototype.ngOnInit = function () {
    };
    ViewSportCenterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-sport-center',
            template: __webpack_require__(/*! ./view-sport-center.page.html */ "./src/app/view-sport-center/view-sport-center.page.html"),
            styles: [__webpack_require__(/*! ./view-sport-center.page.scss */ "./src/app/view-sport-center/view-sport-center.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_5__["PostProvider"]])
    ], ViewSportCenterPage);
    return ViewSportCenterPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-sport-center-view-sport-center-module.js.map