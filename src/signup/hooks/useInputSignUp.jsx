import { useState, useCallback } from 'react';

export default function useInputSignUp() {
    const [signUpInputs, setSignUpInputs] = useState({
        nickname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const [errorTexts, setErrorTexts] = useState({
        nicknameError: '',
        emailError: '',
        passwordError: '',
        passwordConfirmError: '',
    })

    const onChangeSignUpInputs = useCallback((e) => {
        const { name, value } = e.target
        setSignUpInputs({
            ...signUpInputs,
            [name]: value
        })
    }, [signUpInputs])

    const handleSignUp = useCallback(() => {
        // if(username)
    }, [])


    return {
        onChangeSignUpInputs
    }
}