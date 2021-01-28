import React from 'react';
import BitRepresentation from './BitRepresentation';
import './Emulator.css';

function Emulator() {
    return (
        <div className="emulator-container">
            <div className="emulator-panel setting-panel">
                <span>Oscillator frequency</span>
                <input className="oscillator-frequency" placeholder="MHZ"></input>
            </div>
            <div className="emulator-panel cpu-status">
                <div className="show-bit-container"><span>A</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>B</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>PSW</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>SP</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container program-counter"><span>PC</span><BitRepresentation digit={16} number={128}/></div>
            </div>
            <div className="emulator-panel port-panel">
                <div className="show-bit-container"><span>P0</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>P1</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>P2</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>P3</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>P4</span><BitRepresentation digit={8} number={128}/></div>
                <div className="show-bit-container"><span>Serial</span><BitRepresentation digit={8} number={128}/></div>
            </div>
            <div className="emulator-panel debug-section">
                <div className="instruction-control">
                    <button className="btn btn-next">Next</button>
                    <button className="btn btn-reset">Reset</button>
                </div>
                <div className="instructions">
                    <div className="instruction"><span className="rom-address">ROM</span><span className="opcode">Opcode</span><span className="mnemonic">Mnemonic</span></div>
                    <div className="instruction current-instruction"><span className="rom-address">0030</span><span className="opcode">751F</span><span className="mnemonic">MOV</span></div>
                    <div className="instruction"><span className="rom-address">0032</span><span className="opcode">762C3F</span><span className="mnemonic">LCALL</span></div>
                    <div className="instruction"><span className="rom-address">0030</span><span className="opcode">751F</span><span className="mnemonic">MOV</span></div>
                    <div className="instruction"><span className="rom-address">0032</span><span className="opcode">762C3F</span><span className="mnemonic">LCALL</span></div>
                    <div className="instruction"><span className="rom-address">0030</span><span className="opcode">751F</span><span className="mnemonic">MOV</span></div>
                    <div className="instruction"><span className="rom-address">0032</span><span className="opcode">762C3F</span><span className="mnemonic">LCALL</span></div>
                    <div className="instruction"><span className="rom-address">0030</span><span className="opcode">751F</span><span className="mnemonic">MOV</span></div>
                    <div className="instruction"><span className="rom-address">0032</span><span className="opcode">762C3F</span><span className="mnemonic">LCALL</span></div>
                </div>
            </div>
        </div>
    )
}

export default Emulator;
