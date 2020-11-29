let numbers = [];
while(numbers.length <=19){
    numbers.push(Number(prompt("Enter number ")));
}

document.write("Numbers- " + numbers );

let smallest = Math.min.apply(Math, numbers);
document.write("<br> Smallest- " + smallest);

let biggest = Math.max.apply(Math, numbers);
document.write("<br> Biggest- " + biggest);

let total = 0;

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

document.write("<br> Total sum- " + total);

let average= total/numbers.length;
document.write("<br> Average- " + average);