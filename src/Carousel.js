import React, { useState, useEffect } from 'react'
import pic from './pictures/Picture1.png'
import YouTubeIcon from '@material-ui/icons/YouTube';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import TimerIcon from '@material-ui/icons/Timer';
import './carousel.css'
export const Carousel = () => {
    const [size, setSize] = useState(window.innerWidth);
    const func = () => {
        setSize(window.innerWidth)
    }
    window.onresize = func;

    return (
        <>
            {
                size > 768 ?
                    <div id="carouselExampleControls" className=" carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="single-box">
                                            <div className="card" >
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch </h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="single-box">
                                            <div className="card">
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch</h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="single-box">
                                            <div className="card" >
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch</h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="card" >
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch</h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="card">
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch</h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="card" >
                                                <img className="card-img-top" src={pic} alt="Card image cap" />
                                                <figcaption className="card-caption">
                                                    <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                                </figcaption>
                                                <div className="card-body">
                                                    <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch</h5>
                                                    <div className="underline"></div>
                                                    <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                                    <div className="next-info">
                                                        <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                                        <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    : <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card" >
                                    <img className="card-img-top" src={pic} alt="Card image cap" />
                                    <figcaption className="card-caption">
                                        <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                    </figcaption>
                                    <div className="card-body">
                                        <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch </h5>
                                        <div className="underline"></div>
                                        <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                        <div className="next-info">
                                            <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                            <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card" >
                                    <img className="card-img-top" src={pic} alt="Card image cap" />
                                    <figcaption className="card-caption">
                                        <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                    </figcaption>
                                    <div className="card-body">
                                        <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch </h5>
                                        <div className="underline"></div>
                                        <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                        <div className="next-info">
                                            <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                            <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card" >
                                    <img className="card-img-top" src={pic} alt="Card image cap" />
                                    <figcaption className="card-caption">
                                        <h5><TimerIcon className="icon-time" /> 5 days to enroll</h5>
                                    </figcaption>
                                    <div className="card-body">
                                        <h5 className="card-title">IBPS PO & SBI PO Live Coaching in English Batch </h5>
                                        <div className="underline"></div>
                                        <p className="class-count"> <YouTubeIcon className="icon-utube" /> 240+ Live Classes</p>
                                        <div className="next-info">
                                            <p className="class-count"><BookmarkIcon className="icon-book" /> 9000+ Questions</p>
                                            <p className="class-count"><PlayForWorkIcon className="icon-play" /> 120+ Notes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}
