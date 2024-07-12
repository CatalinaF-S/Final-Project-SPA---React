import React from "react";
import Carousel from "../components/Carousel";
import About from "../pages/About";

const Home = () => {
    return (
        <section className="home-section">
            <h2>Welcome to my page!</h2>
            <p>
                After a long time of working and making small arrangements,
                finally comes to light this project that I had in mind several
                years ago.
            </p>

            <Carousel />

            <article className="about-home-section">
                <About />
            </article>
        </section>
    );
};

export default Home;
