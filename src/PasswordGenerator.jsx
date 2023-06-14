
import { OptionsList } from "./components/OptionsList";
import { PassGenerated } from "./components/PassGenerated";

import { useGeneratePass } from "./hooks/useGeneratePass";

import './PasswordGenerator.css'

export const PasswordGenerator = () => {

    const {randomString, textRef, generateString, copyToClipboard} = useGeneratePass()

    return (
        <div className='card' style={{width:650, height: 450, margin:'20px auto', background:'#011627', color: 'white'}}>
            <h1 className='card-header'>Password Generator</h1>

            <div className='card-body'>
                <PassGenerated 
                    textRef={textRef} 
                    randomString={randomString} 
                    copyToClipboard={copyToClipboard} 
                    generateString={generateString} 
                />

                <OptionsList />

                <p style={{color:'#FF3366', marginTop:30}}>Ver historial de contraseñas</p>
            </div>
        </div>
    )
}
