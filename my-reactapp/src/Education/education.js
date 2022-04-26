import React from 'react'
import './education.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EducationModal from './edu-modal'

const Education = () => {

    const [getEdu, setGetEdu] = useState([])

    useEffect(() => {
        const email = localStorage.getItem('email')
        const userData = { 'Email': email }
        const url = 'http://localhost:3333/user/eduOfUser'
        axios.post(url, userData)
            .then(response => setGetEdu(response.data))

    }, [])

    return (
        // <div className='education'>

        <div className='main-edu'>
            <div className='eduInfo'>
                <div className='eduModal'>
                    <EducationModal />
                </div>
                <h3>Education</h3>
                <div className='addEdu'>

                    {getEdu.map((eduData, eduIndex, eduIndex2, eduIndex3) => (
                        <>
                            <h5 key={eduIndex}>{eduData.nameOfInstitution}</h5>
                            <h6 key={eduIndex2}>{eduData.typeOfDegree}</h6>
                            <h6 key={eduIndex3}>{eduData.fieldOfStudy}</h6>
                            <hr />
                        </>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Education