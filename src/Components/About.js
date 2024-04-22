import React from "react";
import '../index.css';
import aboutbackgroundnew from "../Images/about background new..png"

function About() {
    return (
        <div>
            <div className="aboutimage-container"> {/* Wrap the image in a container */}
                <img src={aboutbackgroundnew} alt="Background" className="aboutimage" />
            </div>
            <div className="page-content">
                <h3 className="about--heading">About Us</h3>
                <p className="aboutparagraph">
                    7Bridges is not just an exclusive travel enterprise; it is a gateway to a world of unparalleled beauty and adventure situated in the picturesque Kashmir Valley, nestled in the northern part of the majestic Himalayas. Our name pays homage to the iconic seven bridges of Srinagar, the capital city, symbolizing connectivity and exploration. We specialize in curating a bespoke array of expeditions, each designed to enchant and captivate the senses. From thrilling Wildlife & Birdwatching escapades to mesmerizing Photography journeys, immersive Heritage & Craft explorations, and exhilarating Ecology adventures, we offer something unique for every traveller seeking authentic experiences. At 7Bridges, we understand that travel is not just about visiting places but also about forging meaningful connections with the land and its people. That's why each tour is meticulously crafted to provide not only a distinctive experience but also a profound sense of connection and belonging. As luxury travel facilitators, we find satisfaction in delivering personalized attention and unparalleled experiences that inspire and rejuvenate every traveller who embarks on a journey with us. Come, let us take you on a transformative journey filled with unforgettable moments and lifelong memories amidst the awe-inspiring beauty of Kashmir and its surrounds.
                </p>
            </div>
        </div>
    )
}

export default About;