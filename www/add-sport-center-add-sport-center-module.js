(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sport-center-add-sport-center-module"],{

/***/ "./src/app/add-sport-center/add-sport-center.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-sport-center/add-sport-center.module.ts ***!
  \*************************************************************/
/*! exports provided: AddSportCenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSportCenterPageModule", function() { return AddSportCenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_sport_center_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-sport-center.page */ "./src/app/add-sport-center/add-sport-center.page.ts");







var routes = [
    {
        path: '',
        component: _add_sport_center_page__WEBPACK_IMPORTED_MODULE_6__["AddSportCenterPage"]
    }
];
var AddSportCenterPageModule = /** @class */ (function () {
    function AddSportCenterPageModule() {
    }
    AddSportCenterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_sport_center_page__WEBPACK_IMPORTED_MODULE_6__["AddSportCenterPage"]]
        })
    ], AddSportCenterPageModule);
    return AddSportCenterPageModule;
}());



/***/ }),

/***/ "./src/app/add-sport-center/add-sport-center.page.html":
/*!*************************************************************!*\
  !*** ./src/app/add-sport-center/add-sport-center.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        New Sport Center\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n      <ion-item>\n        <ion-label position=\"floating\">Sport Center Name </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\"> Address </ion-label>\n        <ion-textarea [(ngModel)]=\"location\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Contact Number </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Website (if any) </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"link\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\"> Image </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"img\"></ion-input>\n      </ion-item>\n\n      \n      \n\n      <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"!id\" (click)=\"addSportCenter()\" fill=\"outline\">Submit</ion-button>\n      <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"id>=1\" (click)=\"updateProses()\" fill=\"outline\">Update</ion-button>\n    \n    </ion-content>\n"

/***/ }),

/***/ "./src/app/add-sport-center/add-sport-center.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/add-sport-center/add-sport-center.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zcG9ydC1jZW50ZXIvYWRkLXNwb3J0LWNlbnRlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/add-sport-center/add-sport-center.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-sport-center/add-sport-center.page.ts ***!
  \***********************************************************/
/*! exports provided: AddSportCenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSportCenterPage", function() { return AddSportCenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddSportCenterPage = /** @class */ (function () {
    function AddSportCenterPage(router, postPvdr) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.sports = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
        this.name = "";
        this.location = "";
        this.number = "";
        this.link = "";
        this.img = "";
    }
    AddSportCenterPage.prototype.ngOnInit = function () {
    };
    AddSportCenterPage.prototype.ionViewWillEnter = function () {
        this.sports = [];
        this.start = 0;
        this.loadSport();
    };
    AddSportCenterPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadSport().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    AddSportCenterPage.prototype.loadSport = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getAllSport',
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var sport = _a[_i];
                    _this.sports.push(sport);
                }
                resolve(true);
            });
        });
    };
    AddSportCenterPage.prototype.test = function () {
        name: this.name;
        location: this.location;
        number: this.number;
        link: this.link;
        img: this.img;
        console.log(this.name);
        console.log(this.location);
        console.log(this.link);
        console.log(this.number);
        console.log(this.link);
        console.log(this.img);
    };
    AddSportCenterPage.prototype.addSportCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'addSportCenter',
                name: _this.name,
                location: _this.location,
                number: _this.number,
                link: _this.link,
                img: _this.img
            };
            _this.postPvdr.postData(body, 'process-api.php').subscribe(function (data) {
                _this.router.navigate(['/home']);
                console.log('OK');
                console.log(_this.name);
                console.log(_this.location);
                console.log(_this.link);
                console.log(_this.number);
                console.log(_this.link);
                console.log(_this.img);
            });
        });
    };
    AddSportCenterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-sport-center',
            template: __webpack_require__(/*! ./add-sport-center.page.html */ "./src/app/add-sport-center/add-sport-center.page.html"),
            styles: [__webpack_require__(/*! ./add-sport-center.page.scss */ "./src/app/add-sport-center/add-sport-center.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], AddSportCenterPage);
    return AddSportCenterPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-sport-center-add-sport-center-module.js.map