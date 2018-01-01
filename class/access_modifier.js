var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pikachu = (function () {
    function Pikachu(name, attack, secret) {
        this.name = name;
        this.attack = attack;
        this.secret = secret;
    }
    return Pikachu;
}());
var pikachu = new Pikachu('피카츄', '백만볼트', '인기투표 1위');
console.log(pikachu.name);
console.log(pikachu.attack); // Error: Property 'attack' is protected and only accessible within class 'Pikachu' and its subclasses.
console.log(pikachu.secret); // Error: Property 'secret' is private and only accessible within class 'Pikachu'.
var Pichu = (function (_super) {
    __extends(Pichu, _super);
    function Pichu(name, attack, secret) {
        var _this = _super.call(this, name, attack, secret) || this;
        console.log(_this.name);
        console.log(_this.attack);
        console.log(_this.secret); // Error: Property 'secret' is private and only accessible within class 'Pikachu'.
        return _this;
    }
    return Pichu;
}(Pikachu));
var pichu = new Pichu('피츄', '십만볼트', '귀여워서 사망');
