console.log("Solução com while:\n");

var num = 1;
var soma = 0;

while (num <= 100) {
  soma += num;
  console.log(soma);
  num++;
}

console.log("\nSolução com doWhile:\n");

soma = 0;
num = 1;

do {
  soma += num;
  console.log(soma);
  num++;
} while (num <= 100);

console.log("\nSolução com for:\n");

num = 1;
soma = 0;

for (num; num <= 100; num++) {
  soma += num;
  console.log(soma);
}
