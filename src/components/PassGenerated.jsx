import { FaRegCopy } from "react-icons/fa";
import { GiClockwiseRotation } from "react-icons/gi";
import { useGeneratePass } from "../hooks/useGeneratePass";
import { useRef, useState } from "react";

export const PassGenerated = () => {
    const [value, setValue] = useState(8)

    const {randomString, textRef, generateString, copyToClipboard, handleChangeCheckbox, uppercase, lowercase, special, numbers, generateNewString} = useGeneratePass(value)



    const handleRangeChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <div className='d-flex align-items-center w-100' style={{marginBottom: 10, marginTop: 6}}>
                <input className="card mt-0 mb-0 w-100 input-pass" style={{height: 40, fontWeight: 'bold', color: '#888098', fontSize:15}} ref={textRef} type="text" value={randomString} readOnly />
                <button onClick={copyToClipboard} className='btn' style={{marginRight:10, marginLeft:10, background:'rgb(0 117 255)', color: 'white'}}><FaRegCopy /></button>

                <button onClick={() => generateString(value)} className='btn' style={{background:'rgb(0 117 255)', color: 'white'}}><GiClockwiseRotation /></button>
            </div>
            
            <p className={value < 8 && generateNewString ? 'visible' : 'not-visible'}>Demasiado Corta</p>

            <input
                type="range"
                value={value}
                min={6}
                max={30}
                onChange={handleRangeChange}
                className="w-100"
            />
            <p>Valor seleccionado: {value}</p>

            <ul style={{listStyle: 'none', padding:0, fontWeight: 'bold', marginTop: '1rem'}}>
                <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
                    A - Z
                    <div className="form-check form-switch">
                        <input onChange={handleChangeCheckbox} className="form-check-input" type="checkbox" name="uppercase" checked={uppercase} />
                    </div>
                </li>
                <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
                    a - z
                    <div className="form-check form-switch">
                        <input onChange={handleChangeCheckbox} className="form-check-input" type="checkbox" name="lowercase" checked={lowercase} />
                    </div>
                </li>
                <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
                    !&@%#
                    <div className="form-check form-switch">
                        <input onChange={handleChangeCheckbox} className="form-check-input" type="checkbox" name="special" checked={special} />
                    </div>
                </li>
                <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
                    0 - 9
                    <div className="form-check form-switch">
                        <input onChange={handleChangeCheckbox} className="form-check-input" type="checkbox" name="numbers" checked={numbers} />
                    </div>
                </li>
            </ul>
        </>

    )

}
