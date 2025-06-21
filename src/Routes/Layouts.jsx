import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layouts