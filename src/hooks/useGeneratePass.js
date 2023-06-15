import { useEffect, useRef, useState } from "react";

export const useGeneratePass = (value) => {
    
    const [randomString, setRandomString] = useState('')

    const [uppercase, setUppercase] = useState(true)
    const [lowercase, setLowercase] = useState(false)
    const [numbers, setNumbers] = useState(true)
    const [special, setSpecial] = useState(false)

    // const [strength, setStrength] = useState()

    const textRef = useRef(null);


    const handleChangeCheckbox = (e) => { // cuando presione cada switch/checkbox
        const checkboxName = e.target.name // extraigo del evento la propiedad name de dicho checkbox
        const isChecked = e.target.checked // y la propiedad checked que sera igual true 

        if (checkboxName === 'uppercase') {
            setUppercase(isChecked)
        } else if (checkboxName === 'lowercase') {
            setLowercase(isChecked) 
        } else if (checkboxName === 'special') {
            setSpecial(isChecked)
        } else if (checkboxName === 'numbers') {
            setNumbers(isChecked)
        }

    }

    const generateString = (length) => {
        let characters = ''

        if (uppercase) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }

        if (lowercase) {
            characters += 'abcdefghijklmnopqrstuvwxyz'
        }

        if (numbers) {
            characters += '0123456789'
        }

        if (special) {
            characters += '!@#$%^&*()'
        }

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
        generateString(value)
    }, [])


    return {
        randomString,
        textRef,
        generateString,
        copyToClipboard,
        handleChangeCheckbox,

        uppercase,
        lowercase,
        special,
        numbers

    }
}