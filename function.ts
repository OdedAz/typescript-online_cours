function add (n1: number, n2: number): number{
    return n1 + n2;
}

// function who doesnt return anything is void
function printResult(num:number): void{
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}
printResult(add(5, 12));

// we can point to a function with a variable and make sure it will point to a function. 
// let combineValues: Function;
// more precise
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8,8))

// tests:
// combineValues = 5;
// combineValues = printResult;

addAndHandle(10, 20, (result) => {
    console.log(result)
})