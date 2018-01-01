var pocketmons;
pocketmons = [
    { id: 1, name: '피카츄' },
    { id: 2, name: '꼬부기' }
];
function addPocketmon(pocketmon) {
    pocketmons[pocketmons.length] = pocketmon;
    console.log(pocketmons);
}
var newPocketmon = { id: 3, name: '파이리' };
addPocketmon(newPocketmon);
var sumValue = function (a, b) {
    return a + b;
};
var result = sumValue(1, 2);
console.log(result);
var Digimon = (function () {
    function Digimon(id, name) {
        this.id = id;
        this.name = name;
    }
    Digimon.prototype.whoIsHisFriend = function () {
        console.log(this.name + "\uC758 \uCE5C\uAD6C\uB294 \uD0DC\uC77C\uC774");
    };
    return Digimon;
}());
function digimonFriend(digimon) {
    digimon.whoIsHisFriend();
}
var agumon = new Digimon(1, '아구몬');
console.log(agumon);
digimonFriend(agumon);
