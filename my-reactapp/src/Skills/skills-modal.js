import { Button, Modal } from 'react-bootstrap'
import React, { useState } from "react";
import axios from 'axios';

const SkillsModal = () => {
    const [show, setShow] = useState(false);
    // let myVal = ''

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [givenSkill, setGivenSkill] = useState('')

    const skillHandler = (e) => {
        setGivenSkill(e.target.value)
        // console.log(givenSkill)
    }

    function SetvalSkill() {

        const skill = givenSkill
        const email = localStorage.getItem('email')
        // function for adding skills to its database
        axios.put('http://localhost:3333/user/addSkill/', { Email: email, Skills: skill }
        ).then((res) => {
            console.log(res.data.Skills)
            window.location.reload();
        }).catch((err) => console.log(err))
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Skills</Modal.Title>
                </Modal.Header>
                <div className='modal-body-skill'>
                    <br />
                    <p className='ver'>Enter Skill</p>
                    <input type="text"
                        className='inptt'
                        placeholder="Enter skill"
                        value={givenSkill}
                        onChange={skillHandler}
                    />
                    <br />
                    <br />

                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={SetvalSkill}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SkillsModal