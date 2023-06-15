import { PassGenerated } from "./components/PassGenerated";

import { useGeneratePass } from "./hooks/useGeneratePass";

import './PasswordGenerator.css'

export const PasswordGenerator = () => {

    return (
        <div className='card' style={{width:650, height: 450, margin:'10% auto', background:'#344055', color: 'white'}}>
            <h1 className='card-header' style={{fontSize:38, textAlign: 'center'}}>Password Generator</h1>

            <div className='card-body' style={{padding: '22px 30px 30px 30px'}}>
                <PassGenerated />

                {/* <p style={{color:'#3454D1', marginTop:30}}>Ver historial de contraseñas</p> */}
            </div>
        </div>
    )
}
