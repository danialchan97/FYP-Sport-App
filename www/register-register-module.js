(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n\n\t  <ion-item>\n\t    <ion-label position=\"floating\">Admin ID</ion-label>\n\t    <ion-input type=\"text\" [(ngModel)]=\"adminID\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n\t    <ion-label position=\"floating\">Admin Name</ion-label>\n\t    <ion-input type=\"text\" [(ngModel)]=\"adminName\"></ion-input>\n\t  </ion-item>\n\n\t  <ion-item>\n\t    <ion-label position=\"floating\">Password</ion-label>\n\t    <ion-input type=\"password\" [(ngModel)]=\"adminPass\"></ion-input>\n\t  </ion-item>\n\n\t  <ion-item>\n\t    <ion-label position=\"floating\">Confirm Password</ion-label>\n\t    <ion-input type=\"password\" [(ngModel)]=\"adminPass1\"></ion-input>\n\t  </ion-item>\n\n\t</ion-list>\n\n\t<div>\n\t  <ion-button expand=\"block\" padding color=\"tertiary\" (click)=\"register()\">Register</ion-button>\n\t  <ion-button expand=\"block\" padding color=\"tertiary\" fill=\"outline\" (click)=\"formLogin()\">Sign In</ion-button>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, postPvdr, toastCtrl) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.adminID = "";
        this.adminName = "";
        this.adminPass = "";
        this.adminPass1 = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.adminID == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'ID is required',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 2:
                        if (!(this.adminName == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Name is required',
                                duration: 3000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(this.adminPass == "")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Password is required',
                                duration: 3000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(this.adminPass != this.adminPass1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Password does not match!',
                                duration: 3000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 8:
                        body = {
                            adminID: this.adminID,
                            adminName: this.adminName,
                            adminPass: this.adminPass,
                            aksi: 'register'
                        };
                        this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/home']);
                                        return [4 /*yield*/, this.toastCtrl.create({
                                                message: 'Register succesful',
                                                duration: 3000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toastCtrl.create({
                                            message: alertpesan,
                                            duration: 3000
                                        })];
                                    case 3:
                                        toast = _a.sent();
                                        toast.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map