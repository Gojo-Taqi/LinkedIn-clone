import React from 'react'
import './headerRight.css'

export default function HeaderRight() {
    return (
        <div className="header">

            <div className="header_right">
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">home</i>
                    <h3>Home</h3>
                </div>
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">people</i>
                    <h3>Jobs</h3>
                </div>
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">message</i>
                    <h3>Messages</h3>
                </div>
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">notifications</i>
                    <h3>Notifications</h3>
                </div>
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">account_box</i>
                    <h3>Me</h3>
                </div>
                <div className="headerOption">
                    <i className="material-icons headerOption_icon">logout</i>
                    <h3>Logout</h3>
                </div>
            </div>
        </div>
        //   <!-- End of navigation bar -->
    )
}