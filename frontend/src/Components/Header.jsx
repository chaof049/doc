import React from "react";
import header_data from "./data.js";
import { Link } from "react-router-dom";
import HambergerMenu from "./HambergerMenu.jsx";
import Dropdown from "./Dropdown.jsx";
import { useEffect } from "react";

const Header = () => {
    const returnedToken = localStorage.getItem("token");
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
    });

    function handleMouseHoverIn(title) {
        const hoverDocument = document.getElementById(`linkto${title}`);
        hoverDocument.classList.add("hoverAnim");
    }

    function handleMouseHoverOut(title) {
        const hoverDocument = document.getElementById(`linkto${title}`);
        hoverDocument.classList.remove("hoverAnim");
    }

    const data = returnedToken ? true : false;

    return (
        <>
            <nav
                className={`overflow-visible top-0 left-0 fixed z-[99] w-full bg-[#fcfcfc] bg-opacity-40 dark:bg-gray-900 text-[14px]`}
                onClick={checkPage}
            >
                <div
                    className={`flex px-3 py-3 justify-between sm:px-14 sm:py-2 items-center`}
                >
                    <div className="flex gap-6 items-center">
                        <Link to="/">
                            <div className="flex items-center text-slate-600">
                                <img
                                    src="../../logoncc.png"
                                    alt="Logo"
                                    className="h-14 w-auto"
                                />
                                <span className="text-blue-900 font-bold ps-5 text-[20px] md:hidden xl:block">
                                    Colorectal
                                    <span className="text-red-400 block -mt-2">
                                        Surgeon
                                    </span>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className={`hidden md:flex`} id="navs">
                        {header_data.map((item) => {
                            return (
                                <div key={item.title}>
                                    <Link to={`${item.path}`}>
                                        <button
                                            className={` items-center lg:pr-3 lg:pl-1 mr-3 lg:mr-4  rounded-[4px] border-[#dfdede] text-[#555555] dark:text-gray-100 font-medium hover:text-blue-900`}
                                        >
                                            <span
                                                className={`hidden sm:block`}
                                                onMouseEnter={() =>
                                                    handleMouseHoverIn(
                                                        item.title
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    handleMouseHoverOut(
                                                        item.title
                                                    )
                                                }
                                                id={`linkto${item.title}`}
                                            >
                                                {item.title}
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {data ? (
                        <div className="hidden md:flex">
                            <Dropdown />
                        </div>
                    ) : (
                        <div className="hidden md:flex">
                            <div className="">
                                <Link to="/login">
                                    <button className="px-4 py-1 mr-2 border-2 border-slate-600 rounded-2xl text-[#232323] dark:text-gray-100">
                                        LOGIN
                                    </button>
                                </Link>
                            </div>
                            <div className="">
                                <Link to="/bookapp">
                                    <button className="px-4 py-1 border-2 border-slate-600 bg-blue-900 rounded-2xl text-white">
                                        BOOK AN APPOINTMENT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    <HambergerMenu />
                </div>
            </nav>
        </>
    );
};

export default Header;
