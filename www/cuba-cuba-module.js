(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuba-cuba-module"],{

/***/ "./src/app/cuba/cuba.module.ts":
/*!*************************************!*\
  !*** ./src/app/cuba/cuba.module.ts ***!
  \*************************************/
/*! exports provided: CubaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubaPageModule", function() { return CubaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cuba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuba.page */ "./src/app/cuba/cuba.page.ts");







var routes = [
    {
        path: '',
        component: _cuba_page__WEBPACK_IMPORTED_MODULE_6__["CubaPage"]
    }
];
var CubaPageModule = /** @class */ (function () {
    function CubaPageModule() {
    }
    CubaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cuba_page__WEBPACK_IMPORTED_MODULE_6__["CubaPage"]]
        })
    ], CubaPageModule);
    return CubaPageModule;
}());



/***/ }),

/***/ "./src/app/cuba/cuba.page.html":
/*!*************************************!*\
  !*** ./src/app/cuba/cuba.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cuba Page\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content class=\"card-background-page\">\n    <ion-card>\n      <img src=\"assets/shapes.svg\">\n      <div class=\"card-title\">KFC</div>\n      <ion-button (click)=\"navme('kfc')\">Navigate</ion-button>\n    </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/cuba/cuba.page.scss":
/*!*************************************!*\
  !*** ./src/app/cuba/cuba.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.9em;\n  width: 100%;\n  font-weight: bold;\n  color: #FB5356; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3ViYS9EOlxcWGFtcHBcXGh0ZG9jc1xcc3BvcnRhcHBcXGZpcnN0UHJvamVjdC9zcmNcXGFwcFxcY3ViYVxcY3ViYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFUSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBSDFCO0VBTVEsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBWHRCO0VBY1EsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1YmEvY3ViYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMzYlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkI1MzU2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cuba/cuba.page.ts":
/*!***********************************!*\
  !*** ./src/app/cuba/cuba.page.ts ***!
  \***********************************/
/*! exports provided: CubaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubaPage", function() { return CubaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");





var CubaPage = /** @class */ (function () {
    function CubaPage(launchNavigator, route, storage) {
        var _this = this;
        this.launchNavigator = launchNavigator;
        this.route = route;
        this.storage = storage;
        this.storage.get('sportID').then(function (res) {
            _this.sportID = res;
            console.log(_this.sportID);
        });
    }
    CubaPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    CubaPage.prototype.ngOnInit = function () {
    };
    CubaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuba',
            template: __webpack_require__(/*! ./cuba.page.html */ "./src/app/cuba/cuba.page.html"),
            styles: [__webpack_require__(/*! ./cuba.page.scss */ "./src/app/cuba/cuba.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], CubaPage);
    return CubaPage;
}());



/***/ })

}]);
//# sourceMappingURL=cuba-cuba-module.js.map