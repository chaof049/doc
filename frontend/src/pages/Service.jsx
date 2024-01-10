import React from "react";
import ServiceCard from "../Components/ServiceCard";
import card_data from "../Components/cardData.js";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { useEffect } from "react";

const Service = () => {
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

    const limitedServices = isHomePage ? card_data.slice(0, 3) : card_data;
    return (
        <div className={`${isHomePage ? "pt-12" : "pt-20 pb-12"} px-24`}>
            {/* TITLE */}
            <div className="flex items-center mb-8">
                <div
                    className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}
                ></div>
                <span className={`mx-2 font-semibold text-3xl text-[#194897]`}>
                    Our Services
                </span>
                <div
                    className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#f11a22] flex-grow`}
                ></div>
            </div>

            {/* <p className='text-center text-blue-900 text-3xl font-semibold pb-8 '>---   Our Services ---</p> */}
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-20 ">
                {limitedServices.map((item) => (
                    <Link key={item.id} to={`/service/${item.id}`}>
                        <ServiceCard
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    </Link>
                ))}
            </div>

            {isHomePage ? (
                <p className="w-full flex justify-center py-3 mt-7">
                    <Link to="/service">
                        <button className="flex items-center justify-center text-blue-900 font-semibold hover:text-blue-700">
                            VIEW ALL SERVICES{" "}
                            <span className="ml-1">
                                <FaArrowRight />
                            </span>
                        </button>
                    </Link>
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Service;
