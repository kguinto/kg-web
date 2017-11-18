"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var KGHeaderComponent = (function () {
    function KGHeaderComponent() {
        this.email = 'mailto:kirklouieguinto@gmail.com';
    }
    return KGHeaderComponent;
}());
KGHeaderComponent = __decorate([
    core_1.Component({
        selector: 'kg-header',
        template: "\n<header class=\"container-fluid text-white\"\n  style=\"overflow: hidden;\n  \n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url('9.jpg') no-repeat;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;\n  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 59%, rgba(0, 0, 0, 1) 100%), url('assets/9.jpg') no-repeat;\n  background: linear-gradient(to bottom, rgba(8, 8, 8, .7) 10%, rgba(8, 8, 8, .8) 50%, rgba(8, 8, 8, .95) 100%), url('assets/9.jpg') repeat;\n  \n  \">\n  \n  <p>kirk<lml-shaka></lml-shaka>\n\n  <br>\n\n\n  </p>\n  <img src=\"assets/kirk.jpg\" class=\"rounded-circle img-fluid mx-auto d-block\" alt=\"...\" style=\"max-width: 15%; min-width: 20rem; height: auto;\">\n  \n  <br>\n  <h3 class=\"text-center\">\n    <a href={{email}} target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://twitter.com/kirklouiie\" target=\"_blank\"> <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://github.com/kguinto\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://www.linkedin.com/in/kirklouieguinto/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n  </h3>\n  <p class=\"text-center\">\n    Software-Engineer-in-training.<br>\n    In love with tech, language, and Marvel movies.<br>\n    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Honolulu, HI, USA\n  </p>\n  \n<h1 class=\"text-center display-1\"><strong>KIRK LOUIE GUINTO</strong></h1>\n</header>\n",
    })
], KGHeaderComponent);
exports.KGHeaderComponent = KGHeaderComponent;
//# sourceMappingURL=kg-header.component.js.map