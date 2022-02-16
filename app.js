function add(n1, n2) {
    return n1 + n2;
}
// function who doesnt return anything is void
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// we can point to a function with a variable and make sure it will point to a function. 
// let combineValues: Function;
// more precise
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// tests:
// combineValues = 5;
// combineValues = printResult;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
