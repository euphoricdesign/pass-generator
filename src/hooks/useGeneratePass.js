import { useEffect, useRef, useState } from "react";

export const useGeneratePass = () => {
    const [randomString, setRandomString] = useState('')

    const textRef = useRef(null);

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    
    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            let indice = Math.floor(Math.random() * charactersLength)
            result += characters.charAt(indice);
        }
        
        setRandomString(result)
    }
    
    const copyToClipboard = () => {
        if (textRef.current) {
          navigator.clipboard.writeText(textRef.current.value)
        }
    }

    useEffect(() => {
        generateString(8)
    }, [])


    return {
        randomString,
        textRef,
        generateString,
        copyToClipboard,


    }
}