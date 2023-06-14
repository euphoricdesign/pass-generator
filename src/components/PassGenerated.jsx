import { FaRegCopy } from "react-icons/fa";
import { GiClockwiseRotation } from "react-icons/gi";

export const PassGenerated = ({ textRef, randomString, copyToClipboard, generateString }) => {
  return (
    <div className='d-flex align-items-center w-100' style={{marginBottom: 30, marginTop: 6}}>
        {/* <p className='mt-0 mb-0 card w-100' style={{padding:6}}>{randomString}</p> */}
        <input className="card mt-0 mb-0 w-100 input-pass" style={{height: 40}} ref={textRef} type="text" value={randomString} readOnly />
        <button onClick={copyToClipboard} className='btn' style={{marginRight:10, marginLeft:10, background:'#FF3366', color: 'white'}}><FaRegCopy /></button>
        
        <button onClick={() => generateString(8)} className='btn' style={{background:'#FF3366', color: 'white'}}><GiClockwiseRotation /></button>
    </div>
  )
}
