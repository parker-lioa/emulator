
export function DecToBin(digit,number){

    var result = [];

    for(var i=digit-1;i>=0;i--){
        result[i] = number%2;
        number = parseInt(number/2);
    }

    return result;
}
