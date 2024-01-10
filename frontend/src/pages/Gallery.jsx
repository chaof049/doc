import React from "react";
import image_data from "../Components/imgData";
import ImageCard from "../Components/ImageCard";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

const Gallery = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

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

    const limitedImagess = isHomePage ? image_data.slice(0, 4) : image_data;
    return (
        <>
            <section className={`${isHomePage ? "pt-12" : "pt-20 pb-10"}`}>
                {/* TITLE */}
                <div className={`flex items-center mb-8`}>
                    <div
                        className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}
                    ></div>
                    <span
                        className={`mx-2 font-semibold text-3xl text-blue-900`}
                    >
                        Gallery
                    </span>
                    <div
                        className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#F11a22] flex-grow`}
                    ></div>
                </div>
                {/* <p className='text-center text-blue-900 text-3xl font-semibold pt-10 pb-5'>--- Our Galley Section ---</p> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 container mx-auto">
                    {limitedImagess.map((img, idx) => {
                        return (
                            <div key={idx}>
                                <ImageCard image={img.image} />
                            </div>
                        );
                    })}
                </div>
                {isHomePage ? (
                    <p className="w-full flex justify-center py-3 mt-7">
                        <Link to="/gallery">
                            <button className="flex items-center justify-center text-blue-900 font-semibold hover:text-blue-700">
                                VIEW ALL IMAGES{" "}
                                <span className="ml-1">
                                    <FaArrowRight />
                                </span>
                            </button>
                        </Link>
                    </p>
                ) : (
                    <></>
                )}
            </section>
        </>
    );
};

export default Gallery;
