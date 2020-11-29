let numbers = [];
while(numbers.length <=19){
    numbers.push (prompt("Enter number "));
    numbers.sort((a, b) => a - b);
}

document.write("Numbers- " + numbers );

let smallest = numbers[0];
document.write("<br> Smallest- " + smallest);

let biggest = numbers[19];
document.write("<br> Biggest- " + biggest);

let total = 0;
    total += numbers;
    
document.write("<br> Total sum- " + total);

let average= total/20;
document.write("<br> Average- " + average);
