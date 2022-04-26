import axios from 'axios';
import React, { useState } from 'react'
import SignupCss from './signup.module.css'
import { Button } from 'react-bootstrap';

const Signup = () => {

    const [em, setEmail] = useState('')
    const [pass, setPassword] = useState('')
    const [pass2, setPassword2] = useState('')
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')

    const fnameHandler = (e) => {
        setfName(e.target.value)
    }
    const lnameHandler = (e) => {
        setlName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passHandler = (e) => {
        setPassword(e.target.value)
    }
    const pass2Handler = (e) => {
        setPassword2(e.target.value)
    }
    const checkUser = (e) => {
        if (pass === pass2) {

            e.preventDefault()

            const signupData = { "Email": em, "Password": pass, "FirstName": fname, "LastName": lname }
            const url = "http://localhost:3333/user/add/"
            axios.post(url, signupData)
                .then((response) => {
                    console.log("sign up successfull")
                    alert("Data added successfully")
                    console.log(response)
                }
                ).catch(err => console.log(err))
        }
        else {
            alert('Please enter valid credentials')
        }
    }

    return (
        <div className={SignupCss.body}>

            <div className={SignupCss.wrapper}>
                <h5>Signup</h5>
                <div>
                    <form>
                        <p>Enter First Name</p>
                        <input placeholder='First Name'
                            type='text'
                            onChange={fnameHandler}
                            value={fname} />
                        <hr />

                        <p>Enter Last Name</p>
                        <input placeholder='Last Name'
                            type='text'
                            onChange={lnameHandler}
                            value={lname} />
                        <br />
                        <hr />
                        <p>Enter Email Id</p>
                        <input placeholder='Enter Email Id' type='text' value={em} onChange={emailHandler} />
                        <hr />
                        <p>Enter Password</p>
                        <input placeholder='Password' type='password'
                            value={pass}
                            onChange={passHandler}
                        >
                        </input>
                        <div>
                            <input placeholder='Confirm Password'
                                type='password'
                                onChange={pass2Handler}
                                value={pass2} />
                            <br />
                        </div>
                        <div>
                            <Button type='submit' onClick={checkUser}>Submit</Button>
                        </div>
                    </form>

                </div>
            </div >
        </div>
    )
}

export default Signup