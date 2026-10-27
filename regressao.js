console.log("Solução com while:\n");

var num = 10;

while(num >= 0) {
    console.log(num);
    num--
}

console.log("\nSolução com doWhile:\n");

num = 10;

do {
    console.log(num);
    num--;
} while (num >= 0);

console.log("\nSolução com for:\n");

num = 10;

for(num; num >= 0; num--) {
    console.log(num);
}