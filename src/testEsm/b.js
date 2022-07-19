/**
 * named export, 그룹으로 묶어서 내보내기가 된다.
 */
function printA(){
    return console.log("i'm printA of b.js")
}

function printB(){
    return console.log("i'm printB of b.js")
}

export function printC(){
    return console.log("i'm printC of b.js");
}

export {printA, printB};    