import React from "react"
import Navbar from "./Navbar"
import './contactcss.css'
import Icon1 from './assets/img/icon/icon-1.png'
import Icon2 from './assets/img/icon/icon-2.png'
import Icon3 from './assets/img/icon/icon-3.png'
import { useState } from "react"
import axios from "axios"

function Contact (){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/comment', {name, email, message}).then(result=>{console.log(result)
        alert("Your request has been received.")
    }).catch(err=>console.log(err))
    }



    return (
        <>
        <Navbar/>
        
    <div className="map">
        <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1IhPqTO3xHOtMOuwb2RhSYapNu4KT61A&ehbc=2E312F"
            height="612" style={{border:'0'}} allowFullScreen=""></iframe>
    </div>
    <section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h4>Contacts Us</h4>
                        <div className="contact-address">
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="cw-text">
                                    <h5>Our Location</h5>
                                    <p>Queen's Road, Jaipur(Raj)</p>
                                </div>
                            </div>
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src={Icon2} alt=""/>
                                </div>
                                <div className="cw-text">
                                    <h5>Phone:</h5>
                                    <p>(+91) 9834232920</p>
                                </div>
                            </div>
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src={Icon3} alt=""/>
                                </div>
                                <div className="cw-text">
                                    <h5>Mail</h5>
                                    <p>fitbrick@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact-form">
                        <h4>Leave A Comment</h4>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your email" onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Your messages" onChange={(e)=>setMessage(e.target.value)}></textarea>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact