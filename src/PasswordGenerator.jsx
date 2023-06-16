import { useEffect, useState } from "react";
import { PassGenerated } from "./components/PassGenerated";

import { useGeneratePass } from "./hooks/useGeneratePass";

import './PasswordGenerator.css'

export const PasswordGenerator = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`containerWithoutCardClass ${isLargeScreen ? 'card' : ''}`}>
            <h1 className='card-header pass-header'>Password Generator</h1>

            <div className='card-body' style={{padding: '22px 30px 30px 30px'}}>
                <PassGenerated />

                {/* <p style={{color:'#3454D1', marginTop:30}}>Ver historial de contraseñas</p> */}
            </div>
        </div>
    )
}
