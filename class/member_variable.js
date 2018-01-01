var Pocketmon = (function () {
    function Pocketmon(before, after) {
        this.before = before;
        this.after = after;
    }
    Pocketmon.prototype.evolution = function () {
        console.log(this.before + "\uAC00 \uC9C4\uD654\uD558\uBA74, " + this.after + "!!");
    };
    return Pocketmon;
}());
var pocketmon = new Pocketmon('피카츄', '라이츄');
pocketmon.evolution();
