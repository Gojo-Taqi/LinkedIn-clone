import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import LoginCss from './login.module.css'
import { Button } from 'react-bootstrap'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('')

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const checkUser = (e) => {
        e.preventDefault()

        const loginData = { "Email": email, "Password": password }
        const url = "http://localhost:3333/user/login/"
        axios.post(url, loginData)
            .then((response) => {

                if (response.data === "User found") {
                    setLoginStatus(response.data)
                    localStorage.setItem("email", email)
                    console.log(localStorage.getItem(email))
                    // window.location.replace('/app')
                }
                else if (response.data === "No such user exist") {
                    // setLoginStatus("Email or password is wrong!"
                    console.log(response.data)
                }

            }
            )
    }
    function signUp() {
        const loc = window.location.href = 'http://localhost:3000/signup'
        window.addEventListener('click', loc)
    }

    return (
        <div className={LoginCss.body}>
            <span>
                <Button className={LoginCss.signUp} onClick={signUp} >Sign up</Button>
            </span>

            <div className={LoginCss.wrapper}>

                <h5>Login</h5>
                <form className={LoginCss.inp}>
                    <input
                        type='text'
                        value={email}
                        onChange={emailHandler}
                        placeholder='Email'
                    >
                    </input>

                    <input
                        type='password'
                        value={password}
                        onChange={passwordHandler}
                        placeholder='Password'
                    >
                    </input>
                    <br />
                    <Button
                        type='submit'
                        onClick={checkUser}
                        variant='primary'
                    >
                        Login
                    </Button>
                </form>
                <div>{loginStatus}</div>

            </div>
        </div>

    )
}




export default Login