import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="header1">
                <img src="logo4.png" alt="logo" className="logo1" />
                <h1 className="title1">Event Mapper</h1>
            </div>
            <div className='about'>
                <p>
                Welcome to a transformative journey through the timeless events. Explore our extensive collection of data on various events, uncover profound insights, and engage with our chatbot for personalized assistance. Join us on a path of wisdom and inspiration, where every event holds a story waiting to be discovered.</p>
            </div>
            <div className='navigate'>
                <Link to="/" className='links'>Home<p className='link1'>|</p></Link>
                <Link to="/Read" className='links'>Chat With Us<p className='link1'>|</p></Link>
                <Link to="/Myths" className='links'>Events<p className='link1'>|</p></Link>
                <Link to="/About" className='links'>About us<p className='link1'>|</p></Link>
                <Link to="/Signin" className='links'>Login</Link>
            </div>
            <div className='contact'>
                Contact us :  +91 98484681711
            </div>
            <div className='copyright'>
                &copy; <p className='cp'>copyright</p> ,All rights Reserved
            </div>
        </div>
    )
}
