
// value == undefined && inverse == false => none
// value == undefined && inverse == true  => block
// value != undefined && inverse == false => block
// value != undefined && inverse == true  => none
export function valueToDisplay(value, inverse = false) {
    let first = inverse ? "block" : "none";
    let second = !inverse ? "block" : "none";
    return value !== undefined ? second : first;
}