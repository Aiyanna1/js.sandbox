function stringReverse (string){
    let reversed = '';
    
    for (let i = string.length; i>=0; i-- ) {
        reversed += string.charAt(i -1);
    }
    return reversed;
}

let stringToReverse = 'abcdefgh';
console.log(`The string '${stringToReverse}' 'in reverse it is' ${stringReverse (stringToReverse)}'`);