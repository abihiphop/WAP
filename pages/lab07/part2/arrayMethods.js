function myFunctionTest(expected, function2test) {
    let result = function2test();
    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

// sum
function sum(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log("Expected output of sum([4,3,2,1]) is 10  " + myFunctionTest(10, function () {
    return sum([4, 3, 2, 1]);
}));

// multiply
function multiply(arr) {
    return arr.reduce((a, b) => a * b);
}
console.log("Expected output of multiply([5,4,6,7]) is 840  " + myFunctionTest(840, function () {
    return multiply([5, 4, 6, 7]);
}));

// Reverse String
function reverse(str) {    
    return str.split("").reverse().join('');
}
console.log("Expected output of reverse('abrha') is ahrba " + myFunctionTest('ahrba', function () {
    return reverse('abrha');
}));


function findLongestWords(arr, i) {
    return arr.filter(word => word.length>i);

}
console.log("Expected output of findLongestWord(['Happiness','is','vital','for','humanbeing'],3) is ['Happiness','vital','humanbeing']  " +
    myFunctionTest(['Happiness','vital','humanbeing'], function () {
        return findLongestWords(['Happiness','is','vital','for','humanbeing'], 3);
    }));
