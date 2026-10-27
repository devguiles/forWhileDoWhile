// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

var antecessor = 0;
var anterior = 1;

console.log(antecessor);
console.log(anterior);

for (var i = 2; i < 10; i++) {
  var atual = antecessor + anterior;
  console.log(atual);
  // var ajudante = antecessor;
  antecessor = anterior;
  anterior = atual;
}
