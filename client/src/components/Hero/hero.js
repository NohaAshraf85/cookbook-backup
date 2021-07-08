import React from "react";
import "./hero.css";

function Hero() {
    return(
        <div className="container-fluid hero d-flex" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL
                + "/assets/pexels-ray-piedra-1565982.jpg"})`
          }}  >
            <div className="row text-center introText mx-auto mt-auto mb-auto w-100">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h2 className="intro">“Cooking is like love. It should be entered into with abandon or not at all.”
                </h2>
                <h2 className="intro">– Harriet Van Horne</h2>
                <br />
                <h2 className="intro">Let's Get Cooking</h2>
                <a className="btn btn-light px-5" href="#">Find a random recipe</a>
            </div>
        </div>
        </div>

    )
}

export default Hero;