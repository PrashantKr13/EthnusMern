import React from "react"
import Navbar from "./Navbar"
import Tester from './assets/img/tester.jpg'
import Blog1 from './assets/img/blog/blog-1.jpg'
import Blog2 from './assets/img/blog/blog-2.jpg'
import Blog3 from './assets/img/blog/blog-3.jpg'
import Blog4 from './assets/img/blog/blog-4.jpg'
import Blog5 from './assets/img/blog/blog-5.jpg'
import Blog6 from './assets/img/blog/blog-6.jpg'
import Blog7 from './assets/img/blog/blog-7.jpg'
import Blog8 from './assets/img/blog/blog-8.jpg'
import Blog9 from './assets/img/blog/blog-9.jpg'
import './blogcss.css'

function Blog(){
    return (
        <>
        <Navbar></Navbar>
        {/* <div className="container1">
        <img className="mx-auto d-block" src={Tester}/> */}
        {/* <div className="content">
            <h2 className="mx-auto d-block">We are Professionals</h2>
            <h1 className="mx-auto d-block"> For your Dream Fitness</h1>
        </div> */}
    {/* </div> */}
    <section className="blog-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog1} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Gym</a>
                        </div>
                        <h4><a href="./blog-details.html">10 States At Risk of Rural Hospital Closures</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog2} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Sport</a>
                        </div>
                        <h4><a href="./blog-details.html">Diver who helped save Thai soccer team</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog3} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Body</a>
                        </div>
                        <h4><a href="./blog-details.html">Man gets life in prison for stabbing</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog4} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Running</a>
                        </div>
                        <h4><a href="./blog-details.html">Russia's first male synchronised swimmer</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog5} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Gym</a>
                        </div>
                        <h4><a href="./blog-details.html">NYC measles vaccination order prevails in court</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog6} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Sport</a>
                        </div>
                        <h4><a href="./blog-details.html">The Week in Pictures: April 11 - 18</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog7} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Gym</a>
                        </div>
                        <h4><a href="./blog-details.html">Man who pretended to be faces new charges</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog8} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Body</a>
                        </div>
                        <h4><a href="./blog-details.html">10 States At Risk of Rural Hospital Closures</a></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src={Blog9} alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <a href="#" className="tag">#Gym</a>
                        </div>
                        <h4><a href="./blog-details.html">Lenny Kravitz gives Arch Digest a look inside</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Blog