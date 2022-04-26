import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

function DeleteSkill() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [delSkill, setDelSkill] = useState([])

    const delskillHandler = (e) => {
        setDelSkill(e.target.value)
    }
    console.log(delSkill)


    const callDel = () => {
        const url = 'http://localhost:3333/user/delSkill'
        const email = localStorage.getItem('Email')
        const deleteSkillData = { Email: email, Skills: delSkill }

        axios.delete(url, deleteSkillData)
            .then((res) => {

                console.log(res.data)
                console.log('logged in');
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Skill to delete</Modal.Title>
                </Modal.Header>
                <div>
                    <p>Enter Skill to be deleted</p>
                    <input
                        type='text'
                        placeholder='Ex. Photography'
                        onChange={delskillHandler}
                        value={delSkill}

                    />
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={callDel}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteSkill