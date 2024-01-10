import React from "react";
import Service from "./Service";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Info from "../Components/Info";
import HeroSection from "../Components/HeroSection";
import About from "./About";
import { useEffect } from "react";

const Home = () => {
    function checkPage() {
        const navs = document.querySelectorAll("#navs span");
        navs.forEach((nav) => {
            nav.classList.remove("pageNow");
        });

        const path = window.location.pathname;
        if (path == "/") {
            document.getElementById("linktoHome").classList.add("pageNow");
        } else if (path == "/service") {
            document.getElementById("linktoService").classList.add("pageNow");
        } else if (path == "/gallery") {
            document.getElementById("linktoGallery").classList.add("pageNow");
        } else if (path == "/about") {
            document.getElementById("linktoAbout").classList.add("pageNow");
        } else if (path == "/contact") {
            document.getElementById("linktoContact").classList.add("pageNow");
        }
    }
    useEffect(() => {
        checkPage();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <HeroSection />
            <About />
            <Service />
            <Info />
            <Gallery />
            <Contact />
        </>
    );
};

export default Home;
