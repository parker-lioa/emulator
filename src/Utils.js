
export function DecToBin(digit,number){

    var result = [];

    for(var i=digit-1;i>=0;i--){
        result[i] = number%2;
        number = parseInt(number/2);
    }

    return result;
}


export function WordInsideString(str){

    var front_index = 0;
    var rear_index = 0;
    var result = [];

    while(front_index<str.length){

        if(str[front_index]===" "){
            front_index++;
            rear_index = front_index;
            console.log(front_index);
        }
        else if(str[rear_index]===" "|| rear_index=== str.length-1){
            result.push(str.substr(front_index,rear_index-front_index+1));
            front_index = rear_index+1;
            rear_index = front_index;
            console.log(2);
        }
        else{
            rear_index++; 
            console.log(3);
        }
    }

    return result;
}

export function AreTwoArraysEqual(a,b){

    if(a.length!==b.length){
        return false;
    }
    for(var i=0;i<a.length;i++){

        if(a[i]!==b[i]){
            return false;
        }
    }

    return true;

}

export function DecimalNumToHexString(num,format){

    var str_temp = num.toString(16);

    if(str_temp.length<format){
        
        while(str_temp.length!==format){

            str_temp = "0"+str_temp;

        }

    }
    else if(str_temp.length>format){

            str_temp = str_temp.substr(str_temp.length-format,format);

    }

    return str_temp;

}

export function toComplement(num){

    if(num>=0){
        return num;
    }
    
    return 256+num;

}