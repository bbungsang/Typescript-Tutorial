// 함수 타입으로 사용된 인터페이스, 함수의 매개변수 리스트와 리턴타입 정의
// 이 때, 함수는 인터페이스에 정의된 매개변수 리스트와 리턴타입을 준수해야 한다.
interface SquareFunc {
  (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10));
