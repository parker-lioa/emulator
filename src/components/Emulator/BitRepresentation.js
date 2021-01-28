import React from 'react'
import {DecToBin} from '../../Utils';
import './BitRepresentation.css';

function BitRepresentation({digit,number}) {

    const binaryNum = DecToBin(digit,number)

    return (
        <div className="bit-grids">
            {binaryNum.map((item,key)=><div className="bit-grid" key={key}>{item}</div>)}
        </div>
    )
}

export default BitRepresentation