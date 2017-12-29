// 변수와 인터페이스
interface IPocketmonList {
  id: number;
  name: string;
}
let pocketmons: IPocketmonList[];
pocketmons = [
  {id: 1, name: '피카츄'},
  {id: 2, name: '꼬부기'}
];
function addPocketmon(pocketmon: IPocketmonList) {
  pocketmons[pocketmons.length] = pocketmon;
  console.log(pocketmons);
}
const newPocketmon = {id: 3, name: '파이리'};
addPocketmon(newPocketmon);

// 함수와 인터페이스
interface ISumValue {
  (a: number, b: number): number;
}
const sumValue: ISumValue = function (a: number, b: number) {
  return a+b;
};
let result = sumValue(1,2);
console.log(result);

// 클래스 인터페이스
interface IDigimon {
  id: number;
  name: string;

  whoIsHisFriend(): void;
}
class Digimon implements IDigimon {
  constructor (
    public id: number,
    public name: string
  ){}

  whoIsHisFriend() {
    console.log(`${this.name}의 친구는 태일이`);
  }
}
function digimonFriend(digimon: Digimon): void {
  digimon.whoIsHisFriend();
}
const agumon = new Digimon(1, '아구몬');
console.log(agumon);
digimonFriend(agumon);