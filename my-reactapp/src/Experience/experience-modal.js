import { Button, Modal } from 'react-bootstrap'
import React, { useState } from "react";
import axios from 'axios';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);

    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [val3, setVal3] = useState('')

    const empHandler1 = (e) => {
        setVal1(e.target.value)
    }
    const empHandler2 = (e) => {
        setVal2(e.target.value)
    }
    const empHandler3 = (e) => {
        setVal3(e.target.value)
    }
    const postEmp = () => {

        const email = localStorage.getItem('email')
        const url = 'http://localhost:3333/user/addEmp'

        axios.patch(url, {
            Email: email, Employment: [{
                nameOfCompany: val1,
                titleOfJob: val2,
                duration: val3
            }]
        })
            .then((res) => {
                console.log(res)
                window.location.reload();
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow2} className="edu-btn">
                Edit
            </Button>

            <Modal show={show} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Experience</Modal.Title>
                </Modal.Header>
                <div class="modal-body">
                    <p>Name Of Company*</p>
                    <input type="text"
                        placeholder="Ex: Jaguar/ Starbucks India"
                        onChange={empHandler1}
                        val={val1} />
                    <br />
                    <br />

                    <p>Job Title*</p>
                    <input type="text"
                        placeholder="Ex: Manager/ Intern"
                        onChange={empHandler2}
                        value={val2} />
                    <br />
                    <br />
                    <p>Field of Work*</p>
                    <input type="text"
                        placeholder="Ex: Human Resource/ Sales"
                        onChange={empHandler3}
                        value={val3} />

                    <br />
                    <br />

                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={postEmp}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}