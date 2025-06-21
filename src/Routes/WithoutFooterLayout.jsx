import React from 'react'
import Navbar from '../Components/Navbar'

const WithoutFooterLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}

        </>
    )
}

export default WithoutFooterLayout