import React from 'react'
import Product from './Product'
import Footer from './Footer'

const Home = () => {
    return (

        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src='./image/1.jpg' className="card-img " alt="..." height="500px" />
                <div className="card-img-overlay  d-flex flex-column justify-content-center">
                    <div className="container">

                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text">CHECK OUTALL THE TREND</p>
                        <p className="card-text">Last updated 3 mins ago</p>

                    </div>
                </div>
            </div>
            <Product />
            <Footer />
        </div>
    )
}

export default Home
