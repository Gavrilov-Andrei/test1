import React from "react"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../constanst/const"


const Login: React.FC = () => { 
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailDirty, setIsEmailDirty] = useState(false)
  const [isPasswordDirty, setIsPasswordDirty] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('Емейл не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [isFormValid, setIsFormValid] = useState(false)
  const navigate = useNavigate()
  const [isFormSubmitted, setFormSubmitted] = useState(false)



  useEffect(() => { 

      const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
      if(!regexEmail.test(email.toLocaleUpperCase())) {
         setEmailErrorMessage('Некорректный емейл')
      } else {
          setEmailErrorMessage('')
        }
  },[email])


  useEffect(() => { 

    if (handlePasswordChange.length < 3 || handlePasswordChange.length > 8) { 
        setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
         if (!handlePasswordChange) {
            setPasswordError('Пароль не может быть пустым ')
         }
    } else {
             setPasswordError ('')
      }
},[password])


useEffect(() => {
    if(emailErrorMessage || passwordError) {
        setIsFormValid(false) 
    } else {
        setIsFormValid(true)
    }

},[emailErrorMessage, passwordError])

  
  useEffect(() => {

    if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD) { 
       setFormSubmitted(true)
    }
    
  },[email, password])


  const todoPageHandler = () => {
    if(isFormSubmitted) { 
        navigate('AddTodo')
    }
  }
 

  const handleEmailChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }  


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setPassword(e.target.value)      
  }


  const blureHandler = (e: { target: { name: any } }) => {
      switch (e.target.name) {
          case 'email':
              setIsEmailDirty(true)
              break
              case 'password':
              setIsPasswordDirty(true)
              break
      }
  }

    return ( 

        <form className='Login'> 

            <h1>Registration</h1>

                {(isEmailDirty && emailErrorMessage) && <h5 style={{color:'red'}}>{emailErrorMessage}</h5>}

                <input 
                onChange={handleEmailChange}
                onBlur={blureHandler} 
                name='email' 
                type='text'  
                placeholder='Enter your email'
                />

                {(isPasswordDirty && passwordError) && <h5 style={{color:'red'}}>{passwordError}</h5>}

                <input 
                onChange={handlePasswordChange} 
                value={password} 
                onBlur={blureHandler} 
                name='password'
                type='password' 
                placeholder='Enetr your password'
                />

                <button 
                onClick={todoPageHandler}
                disabled={isFormValid} 
                type='submit'
                >
                Registration
                </button>
        </form>
    )
}
export default Login