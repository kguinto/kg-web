"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var KGFooterComponent = (function () {
    function KGFooterComponent() {
        this.email = 'mailto:kirklouieguinto@gmail.com';
    }
    return KGFooterComponent;
}());
KGFooterComponent = __decorate([
    core_1.Component({
        selector: 'kg-footer',
        template: "\n<footer class=\"container-fluid text-white\" style=\"background-color: #111111; overflow: hidden\">\n      <div class=\"container row pt-1 pb-1\">\n        <div class=\"col-md-4 col-lg-4 px-2\">\n          <img src=\"assets/kirk.jpg\" class=\"rounded-circle img-fluid mx-auto px-2 d-block\" alt=\"...\" style=\"max-width: 15%; min-width: 10rem; height: auto;\">\n        </div>\n        <div class=\"col-md-4 col-lg-4\">\n          <div class=\"mx-auto d-block\">\n            <p>\n              Kirk Louie Guinto\n              <br>kirk<lml-shaka></lml-shaka>\n              <br>\n              <a href={{email}} target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n              <a href=\"https://twitter.com/kirklouiie\" target=\"_blank\"> <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a>\n              <a href=\"https://github.com/kguinto\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n              <a href=\"https://www.linkedin.com/in/kirklouieguinto/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n              <br>\n              \t&#169; 2017\n            </p>\n          </div>\n        </div>\n         \n      </div>\n      \n    </footer>\n",
    })
], KGFooterComponent);
exports.KGFooterComponent = KGFooterComponent;
//# sourceMappingURL=kg-footer.component.js.map