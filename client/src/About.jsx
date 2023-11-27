import React from "react"
import Navbar from "./Navbar"
import './aboutcss.css'
import AboutPic from './assets/img/about-pic.jpg'
import Play from './assets/img/play.png'
import BannerBg from './assets/img/banner-bg.jpg'
import BannerPerson from './assets/img/banner-person.png'
import { Link } from "react-router-dom"

function About (){
    return (
        <>
        <Navbar/>
        <section className="about-section about-page spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-pic">
                        <img src={AboutPic} alt=""/>
                        <a href="https://www.youtube.com/watch?v=SlPhMPnQ58k" className="play-btn video-popup">
                            <img src={Play} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-text">
                        <h2>Story About Us</h2>
                        <p className="first-para">With a passion for health and wellbeing, our fitness journey is more than just a story - it's a collective commitment to fostering a community where each individual's path to wellness is celebrated. From shared victories to personal transformations, we are here to inspire, support, and guide you every step of the way. </p>
                        <p className="second-para">Join us in shaping a narrative of strength, resilience, and the pursuit of a healthier, happier life.</p>
                        <div className="at-author">
                            <h4>Joe Goldberg</h4>
                            <span>CEO - Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End -->

    <!-- About Counter Section Begin --> */}
    <div className="about-counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="about-counter-text">
                        <div className="single-counter">
                            <h1 className="counter-num count">98</h1>
                            <p>Programs</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">14</h1>
                            <p>Locations</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">50</h1>
                            <span>k+</span>
                            <p>Members</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">34</h1>
                            <p>Coaches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="banner-section set-bg" data-setbg={BannerBg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-text">
                        <h2 className="text-dark">Get training today</h2>
                        <p className="text-dark">Transform your fitness journey starting today with personalized training sessions tailored to achieve your goals and enhance your well-being.</p>
                        <Link to='/contact' className="primary-btn banner-btn">Contact Now</Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src={BannerPerson} alt=""/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About