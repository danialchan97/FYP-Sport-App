(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competition-competition-module"],{

/***/ "./src/app/competition/competition.module.ts":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.module.ts ***!
  \***************************************************/
/*! exports provided: CompetitionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPageModule", function() { return CompetitionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _competition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competition.page */ "./src/app/competition/competition.page.ts");







var routes = [
    {
        path: '',
        component: _competition_page__WEBPACK_IMPORTED_MODULE_6__["CompetitionPage"]
    }
];
var CompetitionPageModule = /** @class */ (function () {
    function CompetitionPageModule() {
    }
    CompetitionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_competition_page__WEBPACK_IMPORTED_MODULE_6__["CompetitionPage"]]
        })
    ], CompetitionPageModule);
    return CompetitionPageModule;
}());



/***/ }),

/***/ "./src/app/competition/competition.page.html":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Competition Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <ion-list *ngFor=\"let comp of comps\">\n      <ion-card>\n        <img [src]=\"comp.compImg\" />\n        <ion-card-title>\n          {{comp.compName}}\n        </ion-card-title>\n        \n        <ion-card-content>\n          <p>{{comp.compDetails}}</p>\n          <p>Date: {{comp.compDate}}</p>\n          <p>Time: {{comp.compTime}}</p>\n          <p>Venue: {{comp.compVenue}}</p>\n          <p>PIC: {{comp.compStaff}}</p>\n          <p>Contact Number : <a href=\"tel:{{comp.phoneNumber}}\" class=\"button button-positive\">{{comp.phoneNumber}}</a></p>\n          \n        </ion-card-content>\n      </ion-card> \n    </ion-list>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/competition/competition.page.scss":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9uL2NvbXBldGl0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/competition/competition.page.ts":
/*!*************************************************!*\
  !*** ./src/app/competition/competition.page.ts ***!
  \*************************************************/
/*! exports provided: CompetitionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPage", function() { return CompetitionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompetitionPage = /** @class */ (function () {
    function CompetitionPage(router, postPvdr) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.comps = [];
        this.limit = 13; // LIMIT GET PERDATA
        this.start = 0;
    }
    CompetitionPage.prototype.ngOnInit = function () {
    };
    CompetitionPage.prototype.ionViewWillEnter = function () {
        this.comps = [];
        this.start = 0;
        this.loadComp();
    };
    CompetitionPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadComp().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    CompetitionPage.prototype.loadComp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'viewComp',
            };
            _this.postPvdr.postData(body, 'competitionModel.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var comp = _a[_i];
                    _this.comps.push(comp);
                }
                resolve(true);
            });
        });
    };
    CompetitionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competition',
            template: __webpack_require__(/*! ./competition.page.html */ "./src/app/competition/competition.page.html"),
            styles: [__webpack_require__(/*! ./competition.page.scss */ "./src/app/competition/competition.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], CompetitionPage);
    return CompetitionPage;
}());



/***/ })

}]);
//# sourceMappingURL=competition-competition-module.js.map