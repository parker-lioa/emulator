import React, { useState } from "react";
import "./Assembler.css";
import { asm_to_opcode } from '../lib/AssemblerImp'

const Assembler = ()=>{

    const [AsmCode,setAsmCode] = useState(""); 
    const [errorMessage,setErrorMessage] = useState("");

    const handleChange = (e)=>{
        setAsmCode(e.target.value);
    }

    const handleClick = (e)=>{
        setErrorMessage("");
        console.log(asm_to_opcode(AsmCode,asmError));
    }

    const asmError = (error)=>{
        setErrorMessage(`error because ${error}`);
    }

    return(
        <div className="assembler-container">
            <div className="heading">
                Code
            </div>
            <div className="code-area">
                <textarea value={AsmCode} onChange={handleChange} className="code">

                </textarea>
                <div className="run-and-error">
                    <button onClick={handleClick} className="btn">Run</button>
                    <span className="error-message">{errorMessage}</span>
                </div>
            </div>
        </div>
    )
}

export default Assembler;


