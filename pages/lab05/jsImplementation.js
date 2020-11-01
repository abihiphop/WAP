function myFunctionTest(expected, function2test) {
    let result = function2test().toString();
    expected = expected.toString();
    if (expected == result) {
        return "<p style='color:green'>TEST SUCCEEDED</p>";
    } else {
        return "<p style='color:red'>TEST FAILED.</p>  Expected <b>" + expected + "</b> found <b>" + result + "</b>";
    }
}

function maximum(number1, number2) {
    return parseInt(number1) >= parseInt(number2) ? number1 : number2;
}

//2 
function maxOfThree(x, y, z) {
    max = 0;
    x = parseInt(x), y = parseInt(y), z = parseInt(z);
    if (x > y) max = x;
    else max = y;
    if (z > max) max = z;
    return max;
}

function isVoul(ch) {
    if (ch.match(/[aeiouAEIOU]/))
        return true;
    else return false;
}

function sumArray(arr) {
    var result = 0;
    var arr = arr.split(",");
    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }
    return result;
}

function multiplyArray(arr) {
    var result = 1;
    var arr = arr.split(",");
    for (let i = 0; i < arr.length; i++)
        result *= parseInt(arr[i]);
    return result;
}

function reverse(str) {
    var result = "";
    for (let i = str.length - 1; i >= 0; i--)
        result += str[i];
    // OR 
    // return str.split("").reverse().join("");
    return result;
}

function findLongestWord(strArray) {
    var strArray = strArray.split(",");
    var longest = strArray[0];
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longest.length)
            longest = strArray[i];
    }
    return longest;
}

function filterLongWords(strArray, index) {
    var strArray = strArray.split(",");
    var newArr = new Array();
    var j = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > index) {
            newArr[j] = strArray[i];
            j++;
        }

    }
    return newArr;
}
const a = [1, 3, 5, 3, 10];

function mulitply_by_10(arr){
    var arr = arr.split(",");
    return arr.map(function (elt) { return elt * 10 });
}

function filter_elts_with_three(arr){
    var arr = arr.split(",");
    return arr.filter(function (elt) { return elt == 3; });
}

function reduceToProduct(arr){
    var arr = arr.split(",");
    return arr.reduce(function (elt, base) { return base * elt });
}


// const lambda_map_mult_by_10 = a.map(function (elt) { return elt * 10 });
// const lambda_filter_elts_with_three = a.filter(function (elt) { return elt == 3; });
// const lambda_reduce_product_of_elts = a.reduce(function (elt, base) { return base * elt });


let x = ["abrha", "abasdfebe", "yasdfadsf", "b"];
console.log(lambda_filter_elts_with_three);
// console.log("Expected output of myarr() is 20  " + myFunctionTest(20, function () {
//     return maximum(10,20);
// }));

function mainFunction(string, expected, functionality) {
    var message = " <p> Expected output of <b>" + string + "</b> is <b>" + expected + "</b> " +
        myFunctionTest(expected, functionality) + "</p>";
    document.getElementById("answerDisplay").innerHTML = message;

}


