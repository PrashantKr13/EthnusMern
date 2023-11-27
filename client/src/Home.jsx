import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import coverPage from './assets/img/cover_page.jpeg'
import servicePic from './assets/img/services/service-pic.jpg'
import registerPic from './assets/img/register-pic.jpg'
import Navbar from './Navbar';
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useMyContext } from './Logged.jsx';
import axios from 'axios';


// Container Component
const Container = () => {
  return (
    <div className="container1">
        <img className="mx-auto d-block" src={coverPage}/>
        <div className="content">
            <h2 className="mx-auto d-block">We are Professionals</h2>
            <h1 className="mx-auto d-block"> For your Dream Fitness</h1>
        </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  return (
    <section className="services-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="services-pic">
                        <img src={servicePic} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="services-item bg-gray">
                                    
                                    <h4>Strategies</h4>
                                    <p>Welcome to a world of proven fitness strategies designed to transform your journey towards a healthier lifestyle.</p>
                                </div>
                                <div className="services-item bg-gray pd-b">
                                    
                                    <h4>Workout</h4>
                                    <p>Elevate your fitness journey with dynamic and effective workout routines tailored to your goals. Experience a diverse range of workouts that empower you to unleash your full potential and achieve lasting fitness.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="services-item">

                                    <h4>Yoga</h4>
                                    <p>Immerse yourself in the serenity of yoga, where mind, body, and spirit unite in harmonious balance. Our yoga sessions are crafted to cultivate strength, flexibility, and inner peace.</p>
                                </div>
                                <div className="services-item pd-b">

                                    <h4>Weight Loss</h4>
                                    <p>Embark on a transformative journey towards a healthier weight with our dedicated weight loss programs. Our experienced coaches guide you through personalized plans.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};


// Register Section Component
const RegisterSection = () => {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/freeTrial', {fname, lname, email, phone}).then(result=>{console.log(result)
        alert("Your request has been received.")
    }).catch(err=>console.log(err))
    }
  return (
    <section className="register-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="register-text">
                        <div className="section-title">
                            <h2>Register Now</h2>
                            <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
                        </div>
                        <form onSubmit={handleSubmit} action="#" className="register-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="name">First Name</label>
                                    <input type="text" id="name" onChange={(e)=>setFname(e.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="email">Your email address</label>
                                    <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" onChange={(e)=>setLname(e.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="mobile">Mobile No*</label>
                                    <input type="text" id="mobile" onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <button type="submit" className="register-btn">Get Started</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="register-pic">
                        <img src={registerPic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
    const [email, setEmail] = useState()

    const handleSubscriber = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/subscriber', {email}).then(result=>{console.log(result)
        alert("You are now a subscriber.")
    }).catch(err=>console.log(err))
    }

  return (
    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="contact-option">
                        <span>Phone</span>
                        <p>(+91) 9834232920</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-option">
                        <span>Address</span>
                        <p>Queen's Road, Jaipur(Raj)</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-option">
                        <span>Email</span>
                        <p>fitbrick@hotmail.com</p>
                    </div>
                </div>
            </div>
            <div className="subscribe-option set-bg" data-setbg="assets/img/footer-signup.jpg">
                <div className="so-text">
                    <h4>Subscribe To Our Mailing List</h4>
                    <p>Sign up to receive the latest information </p>
                </div>
                <form className="subscribe-form" onSubmit={handleSubscriber}>
                    <input type="text" placeholder="Enter Your Mail" onChange={(e)=>setEmail(e.target.value)}/>
                    <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
                </form>
            </div>
            <div className="copyright-text">
                <ul>
                    <li><a href="#">Terms&Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                
                <div className="footer-social">
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram/></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

// Main App Component
const Home = () => {
    
    const { isLogged, setisLogged } = useMyContext()


  return (
    <>
    {isLogged?
    <div>
      <Navbar />
      <Container />
      <ServicesSection />
      <RegisterSection />
      <Footer />
    </div>:
    <div>You are not Logged in</div>}
    </>
  );
};

export default Home;
