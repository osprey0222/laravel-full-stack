import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Events from '../pages/Events'
import Auth from '../pages/Auth'

const App = () => {
    const links = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Upcoming Events',
            path: '/events',
        },
        {
            name: 'Login',
            path: '/login',
        },
    ]


    return (
        <Router>
            <Navbar links={links} />
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<Auth />} />
            </Routes>

            <Footer />
        </Router >
    );
}

export default App;
