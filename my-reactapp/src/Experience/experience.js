import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ExperienceModal from './experience-modal'

const Experience = () => {

    const [getExp, setGetExp] = useState([])

    useEffect(() => {
        const email = localStorage.getItem('email')
        const userData = { 'Email': email }
        const url = 'http://localhost:3333/user/expOfUser'
        axios.post(url, userData)
            .then(response => setGetExp(response.data))

    }, [])
    return (

        <div className='main-edu'>
            <div className='eduInfo'>
                <div className='eduModal'>
                    <ExperienceModal />
                </div>
                <h3>Employment And Experience</h3>
                <div className='addEdu'>
                    {getExp.map((expData, expIndex) => (
                        <>
                            <h5 key={expIndex}>{expData.nameOfCompany}</h5>
                            <h6 key={expIndex}>{expData.titleOfJob}</h6>
                            <h6 key={expIndex}>{expData.duration}</h6>
                        </>
                    ))}

                    <hr />
                </div>
            </div>

        </div>
    )
}

export default Experience