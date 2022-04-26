// import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import React, { useState } from "react";
import axios from 'axios';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [edu , setEdu] = useState('')
    // const eduHandler = (e) =>{
    //     setEdu(e.target.value)
    // }
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [val3, setVal3] = useState('')

    const eduHandler1 = (e) => {
        setVal1(e.target.value)
    }
    const eduHandler2 = (e) => {
        setVal2(e.target.value)
    }
    const eduHandler3 = (e) => {
        setVal3(e.target.value)
    }

    function setValEdu() {
        const url = 'http://localhost:3333/user/addEdu/'
        const email = localStorage.getItem('email')

        axios.patch(url, {
            Email: email, Education: [{
                nameOfInstitution: val1,
                typeOfDegree: val2,
                fieldOfStudy: val3
            }]
        }).then((res) => {

            console.log(res);
            window.location.reload();
        }
        )
            .catch(err => {
                console.log(err)
                console.log('entered the catch loop')
            })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="edu-btn">
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Education</Modal.Title>
                </Modal.Header>
                <div class="modal-body">
                    <p>School*</p>
                    <input type="text"
                        placeholder="Ex: Boston University"
                        onChange={eduHandler1}
                        value={val1} />
                    <br />
                    <br />

                    <p>Degree*</p>
                    <input type="text"
                        placeholder="Ex: Bachelor's"
                        onChange={eduHandler2}
                        value={val2} />
                    <br />
                    <br />
                    <p>Field of study*</p>
                    <input type="text"
                        placeholder="Ex: Business / Engineering"
                        onChange={eduHandler3}
                        value={val3}
                    />
                    <br />
                    <br />

                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={setValEdu}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}