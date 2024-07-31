let marks = [88,64,97,44,52];

let sum = 0;
for (let i of marks) {
    sum += i;
}

let avg = sum/marks.length;
console.log(`class average  marks is = ${avg}`);