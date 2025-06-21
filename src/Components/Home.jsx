import React from "react";
import shopping_background from './../images/shopping_background.jpg';
import shop1 from './../images/shop1.jpg';
import shop2 from './../images/shop2.jpg';
import About from "./About";
import Info from "./Info";
import Contact from "./Contact";
const Home = () => {
  return (
    <>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={shopping_background} className="w-100 mt-0 d-block" height='550px' />
          </div>

          <div className="carousel-item active">
            <img src={shop1} className="w-100 mt-0 d-block" height='550px' />
          </div>

          <div className="carousel-item active">
            <img src={shop2} className="w-100 mt-0 d-block" height='550px' />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
      </div>

      <About />
      <Info />
      <Contact />
    </>
  );
};

export default Home;
