import {instructions} from '../InstructionSet8051';
import {AreTwoArraysEqual,DecimalNumToHexString, toComplement} from '../Utils';

function parseAsm(code){
    
    var previous ;
    var is_substr = false;
    var result =  [];

    for(var i=0;i<code.length;i++){

        if(code[i]===";"){
            if(is_substr===true){
                result.push(code.substr(previous,i-previous)); 
            }
            return result;
        }
        if((code[i]===" "||code[i]===",")&&is_substr===true){
            result.push(code.substr(previous,i-previous));    
            is_substr = false;
        }
        if(i===code.length-1){
            if(is_substr)
                result.push(code.substr(previous,i-previous+1)); 
            else if(code[i]!==" "){
                result.push(code[i]);
            }
        }
        if(code[i]!==" "&&code[i]!==","&&is_substr===false){
            previous = i;
            is_substr = true;
        }

    }

    return result;
}

function parseNumberOprend(str,error){

    str = str.toLowerCase();
    var number_base = str[str.length-1]; // hex or decimal or  binary

    if(number_base==="h")
    {
        return parseInt(str.substring(0,str.length-1),16);
    }
    if(number_base==="b"){
        return parseInt(str.substring(0,str.length-1),2);
    }
    if(number_base.charCodeAt()>="0".charCodeAt(0)&&number_base.charCodeAt(0)<="9".charCodeAt(0)){
        return parseInt(str.substring(0,str.length),10);
    }

    return NaN;

}


// also substitude predefined oprend 

function getTypeOfOprend(instr,preDefine,label){

    var oprend_type = [];

    for(var i=1;i<instr.length;i++){


        switch(instr[i]){
            case "A":
                oprend_type.push("A");
                break;
            case "R0":
                oprend_type.push("R0");
                break;
            case "R1":
                oprend_type.push("R1");
                break;
            case "R2":
                oprend_type.push("R2");
                break;
            case "R3":
                oprend_type.push("R3");
                break;
            case "R4":
                oprend_type.push("R4");
                break;
            case "R5":
                oprend_type.push("R5");
                break;
            case "R6":
                oprend_type.push("R6");
                break;
            case "R7":
                oprend_type.push("R7");
                break;
            default:
                if(instr[i][0]==="#"){
                    if(preDefine.has(instr[i].substr(1,instr[i].length-1))){
                        instr[i] = "#"+preDefine.get(instr[i].substr(1,instr[i].length-1));
                    }
                    oprend_type.push("Immediate");
                }
                else if(!isNaN(parseNumberOprend(instr[i]))){
                    oprend_type.push("Address");
                }
                else if(preDefine.has(instr[i])){
                    instr[i] = preDefine.get(instr[i]);
                    oprend_type.push("Address");
                }
                else if(label.has(instr[i])){
                    oprend_type.push("Label");
                }
                else{
                    oprend_type.push("Unknown");
                }
        }
    }
    return oprend_type;
}

function getOpcode(mnemonic,oprend_type){

    

    for(var i=0;i<instructions.length;i++){

        if(instructions[i].mnemonic===mnemonic&&AreTwoArraysEqual(instructions[i].Oprend,oprend_type)){

            return i;

        }
    }

    return NaN;
}


function parseByTypeOfOprend(instr,type,buffer,rom){

    var result = "";

    for(var i=0;i<type.length;i++){

        switch(type[i]){

            case "Immediate":
                result+=DecimalNumToHexString(parseNumberOprend(instr[i+1].substring(1,instr[i+1].length)),2);
                break;
            case "Address":
                result+=DecimalNumToHexString(parseNumberOprend(instr[i+1]),2);
                break;
            case "Label":
                buffer.set(instr[i+1],rom);
                break;
            default:
                break;
        }


    }
    return result;

}

export function asm_to_opcode(asm_string,error){
    
    var lines_pre = asm_string.split('\n');
    var lines_arr = [];
    var temp;
    
    lines_pre.forEach(line=>{
        temp = parseAsm(line);
        lines_arr.push(temp);
    });

    var current_rom =  -1;
    var preDefine = new Map();
    var Label = new Map();
    var ROM = new Map();
    var Buffer = new Map();

    for(var i=0;i<lines_arr.length;i++){

        if(lines_arr[i].length===0){
            continue;
        }
        if(lines_arr[i][0][lines_arr[i][0].length-1]===":"){
            if(Label.has(lines_arr[i][0].substr(0,lines_arr[i][0].length-1))){
                error("duplicated label in line "+String(i+1));
            }
            if(lines_arr[i].length===1){
                Label.set(lines_arr[i][0].substr(0,lines_arr[i][0].length-1),0);
            }
            else{
                Label.set(lines_arr[i][0].substr(0,lines_arr[i][0].length-1),0);
                lines_arr[i] = lines_arr[i].slice(1,lines_arr[i].length);
                i--;
                continue;
            }

        }

    }
    
    for(var i=0;i<lines_arr.length;i++){

        if(lines_arr[i].length===0){
            continue;
        }
        // equ 
        if(lines_arr[i].length===3&&lines_arr[i][1]==="EQU"){

            var equ_oprend = lines_arr[i][2];

            preDefine.set(lines_arr[i][0],equ_oprend);

        }
        // org
        else if(lines_arr[i][0]==="ORG"){
            if(lines_arr[i].length!==2){
                error("error occurs in line "+String(i+1));
                return;
            }
            temp = parseNumberOprend(lines_arr[i][1]);
            // console.log(temp);
            if(isNaN(temp)){
                error("invalid oprend in line "+String(i+1));
            }

            current_rom = temp;

        }
        // db
        else if(lines_arr[i][0]==="DB"){

        }
        // label
        else if(lines_arr[i][0][lines_arr[i][0].length-1]===":"){
            if(lines_arr[i].length===1){
                Label.set(lines_arr[i][0].substr(0,lines_arr[i][0].length-1),current_rom);
            }
            else{
                Label.set(lines_arr[i][0].substr(0,lines_arr[i][0].length-1),current_rom);
                lines_arr[i] = lines_arr[i].slice(1,lines_arr[i].length);
                i--;
                continue;
            }
        }
        // instruction
        else{
            if(current_rom===-1){
                error("missing org directive");
                return;
            }
            var type_of_current_oprend =getTypeOfOprend(lines_arr[i],preDefine,Label);

            //console.log(type_of_current_oprend);

            var index_of_instruction = getOpcode(lines_arr[i][0],type_of_current_oprend); 
            if(isNaN(index_of_instruction)){
                error("invalid operation in line "+String(i+1));
                return;
            }
            var opcode_temp = instructions[index_of_instruction].Opcode;

            current_rom+= parseInt(instructions[index_of_instruction].NumberOfBytes);
            ROM.set(current_rom,opcode_temp+parseByTypeOfOprend(lines_arr[i],type_of_current_oprend,Buffer,current_rom));

        }

    }

    console.log(ROM);
    console.log(Label);
    console.log(Buffer);

    for(var [key,value] of Buffer){

        var target_address=Label.get(key);
        var shift = target_address-value;
        console.log(shift);
        ROM.set(value,ROM.get(value)+DecimalNumToHexString(toComplement(shift),2));
    }


    return lines_arr;

}

