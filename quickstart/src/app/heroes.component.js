"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HEROES = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return (_this.heroes = heroes); });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(["/detail", this.selectedHero.id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: "my-heroes",
        templateUrl: "./heroes.component.html",
        styleUrls: ["./heroes.component.css"],
        template: "\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li\n        *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\"\n      >\n        <span class=\"badge\">{{ hero.id }}</span> {{ hero.name }}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedHero\">\n      <h2>{{ selectedHero.name | uppercase }} is my hero</h2>\n      <button (click)=\"gotoDetail()\">View Details</button>\n    </div>\n  ",
        styles: [
            "\n      .selected {\n        background-color: #cfd8dc !important;\n        color: white;\n      }\n      .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #eee;\n        margin: 0.5em;\n        padding: 0.3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .heroes li.selected:hover {\n        background-color: #bbd8dc !important;\n        color: white;\n      }\n      .heroes li:hover {\n        color: #607d8b;\n        background-color: #ddd;\n        left: 0.1em;\n      }\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607d8b;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: 0.8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "
        ],
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [Object, hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map