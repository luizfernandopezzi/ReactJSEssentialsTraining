import React from 'react'
import {Link, useLocation, Outlet} from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link to=''>Home</Link>
            <Link to='about'>About</Link>
            <Link to='events'>Events</Link>
            <Link to='contact'>Contact</Link>
        </nav>
    )
}

function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <Nav />
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    )
}

function Services(){
    return(
        <div>
            <h2>Our Services</h2>
        </div>
    )
}

function CompanyHistory(){
    return(
        <div>
            <h2>Our History</h2>
        </div>
    )
}

function Location(){
    return(
        <div>
            <h2>Our Location</h2>
        </div>
    )
}

function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

function Whoops404(){
    let location = useLocation();
    console.log(location)
    return(
        <div>
            <h1>This page does not exist! Resource not found at {location.pathname}.</h1>
        </div>
    )
}

const pagesExports = {Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location}

export default pagesExports;