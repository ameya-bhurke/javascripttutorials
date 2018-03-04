function fibonacci(count) {
    var output = new Array();
    output.push(1);
    var current = 1;
    var previous = 1;
    for(var i = 1; i < count; i++) {
        output.push(current);
        var temp = previous;
        previous = current;
        current = current + temp;
    }
    return output;
}

function printFibonacci(count) {
    var output = fibonacci(count);
    console.log(output.toString());
}

printFibonacci(5);