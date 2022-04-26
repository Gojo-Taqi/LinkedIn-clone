import { Avatar } from "@mui/material";
import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'
import './main.css'

const Main = () => {

    const [getName, setGetName] = useState([])

    useEffect(() => {
        const email = localStorage.getItem('email')
        const userData = { 'Email': email }
        const url = 'http://localhost:3333/user/nameOfUser'
        axios.post(url, userData)
            .then(response => setGetName(response.data))

    }, [])

    return (
        <div className="main">
            <div className="image">
                <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" alt="bgimage"></img>
                <Avatar className="avatar" />
            </div>
            <div className="basic-info">
                <div className="info">
                    {/* <div>
                        {getName.map((nameData, nameIndex) => (
                            <h4 key={nameIndex}>{nameData}</h4>
                        ))}
                    </div> */}

                    <h4 className="name">{getName}</h4>
                    <p>Attended AMC Engineering College - India</p>
                    <p>Bengaluru, Karnataka, India <a href="localhost:3000">Contact Info</a></p>

                    {/* Modal for editing name and email */}
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Intro</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>First name*</p>
                                    <input type="text" placeholder="Enter Your First name" />
                                    <br />
                                    <br />

                                    <p>Last name*</p>
                                    <input type="text" placeholder="Enter Your Last name" />
                                    <br />
                                    <br />

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main