function add(n1: number, n2: number){
    const result = n1 + n2
    return result
}
// union types example: number | string
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}


type Combineable = number | string;
type ConvertionDescriptor = 'as-number' | 'as-text';

function combine2 (
    input1: Combineable, 
    input2: Combineable,
    resultConversion: ConvertionDescriptor
){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
}
const combinedAges = combine(30, 26)
const combinedAges2 = combine2('30', 26, 'as-text')
const combinedNames = combine2('Max', 'Anna', 'as-text')

console.log(combinedAges)
console.log(combinedAges2)
console.log(combinedNames)