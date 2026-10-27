console.log("Solução com while:\n");

var num = 1;

while (num <= 50) {
  if (num % 2 > 0) {
    console.log(num);
  }
  num++;
}

console.log("\nSolução com doWhile:\n");

num = 1;

do {
  if (num % 2 > 0) {
    console.log(num);
  }
  num++;
} while (num <= 50);

console.log("\nSolução com for:\n");

num = 1;

for (num; num <= 50; num++) {
  if (num % 2 > 0) {
    console.log(num);
  }
}
