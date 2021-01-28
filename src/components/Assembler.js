import React from "react";
import "./Assembler.css";

const Assembler = ()=>{

    return(
        <div className="assembler-container">
            <div className="heading">
                Code
            </div>
            <div className="code-area">
                <textarea className="code">

                </textarea>
                <div className="run-and-error">
                    <button className="btn">Run</button>
                    <span className="error-message">Error message</span>
                </div>
            </div>
        </div>
    )
}

export default Assembler;