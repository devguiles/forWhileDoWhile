console.log("Solução com while:\n");
var num = 2;

while (num <= 20) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
}

console.log("\nSolução com doWhile:\n");

num = 2;

do {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
} while (num <= 20);

console.log("\nSolução com for:\n");

num = 2;

for (num; num <= 20; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}
