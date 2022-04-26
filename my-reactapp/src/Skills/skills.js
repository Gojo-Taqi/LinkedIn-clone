import React from 'react'
import { useState, useEffect } from 'react'
// import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import './skills.css'
import SkillsModal from './skills-modal'
import DeleteSkill from './deleteSkill'

const Skills = () => {
    const [getSkill, setGetSkill] = useState([])

    useEffect(() => {
        const email = localStorage.getItem('email')
        const userData = { 'Email': email }
        const url = 'http://localhost:3333/user/skillOfUser'
        axios.post(url, userData)
            .then(response => setGetSkill(response.data))

    }, [])

    // const deleteSkill = () => {
    //     const email = localStorage.getItem("email")
    //     const url = 'http://localhost:3333/user/delSkill'
    //     const fr = { 'Email': email, 'Skills': ["Athlete"] }
    //     // console.log('skill deleted ' + data)


    //     // console.log('skill deleted ' + data)
    //     axios.delete(url, fr)
    //         .then((res) =>
    //             console.log(res.data)
    //             // window.location.reload();
    //         )
    //         .catch((err) => console.log('Entered the catch   ' + err))
    // }


    return (
        <div className='skillCompHeading'>
            <span className='skillsSpan' ><h3>Skills and Endorsements</h3>
            </span>
            <span className='modalSkills'>
                <SkillsModal />
                <DeleteSkill />
            </span>
            <div className='skillsVal' >

                {getSkill.map((skillData, skillIndex) => (
                    <h5 key={skillIndex}>{skillData}
                        {/* <div className='skillDelete' ><AiFillDelete className='del' onClick={(das) => console.log("skill is " + das)} /></div> */}
                    </h5>
                ))}

            </div>
        </div>
    )
}

export default Skills
