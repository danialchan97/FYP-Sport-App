(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-admin-home-admin-module"],{

/***/ "./src/app/home-admin/home-admin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/home-admin/home-admin.module.ts ***!
  \*************************************************/
/*! exports provided: HomeAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageModule", function() { return HomeAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-admin.page */ "./src/app/home-admin/home-admin.page.ts");







var routes = [
    {
        path: '',
        component: _home_admin_page__WEBPACK_IMPORTED_MODULE_6__["HomeAdminPage"]
    }
];
var HomeAdminPageModule = /** @class */ (function () {
    function HomeAdminPageModule() {
    }
    HomeAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_admin_page__WEBPACK_IMPORTED_MODULE_6__["HomeAdminPage"]]
        })
    ], HomeAdminPageModule);
    return HomeAdminPageModule;
}());



/***/ }),

/***/ "./src/app/home-admin/home-admin.page.html":
/*!*************************************************!*\
  !*** ./src/app/home-admin/home-admin.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Admin Home, {{adminName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-button href=\"/add-sport-center\">Add</ion-button>\n<ion-button (click)=\"logout()\">Logout</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-admin/home-admin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/home-admin/home-admin.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYWRtaW4vaG9tZS1hZG1pbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home-admin/home-admin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/home-admin/home-admin.page.ts ***!
  \***********************************************/
/*! exports provided: HomeAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPage", function() { return HomeAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");






var HomeAdminPage = /** @class */ (function () {
    function HomeAdminPage(router, postPvdr, toastCtrl, storage, navCtrl) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Event',
                url: '/event',
                icon: 'calendar'
            },
        ];
    }
    HomeAdminPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('session').then(function (res) {
            _this.admin = res;
            _this.adminName = _this.admin.adminName;
            console.log(_this.adminName);
        });
    };
    HomeAdminPage.prototype.addSportsCenter = function () {
        this.route.navigate(['/addSportCenter']);
    };
    HomeAdminPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/home']);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Logout Successfully',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! ./home-admin.page.html */ "./src/app/home-admin/home-admin.page.html"),
            styles: [__webpack_require__(/*! ./home-admin.page.scss */ "./src/app/home-admin/home-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], HomeAdminPage);
    return HomeAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-admin-home-admin-module.js.map