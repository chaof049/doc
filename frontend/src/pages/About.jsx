import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
    const location = useLocation();
    const isHome = location.pathname == "/";

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
        <div className={`${isHome ? "py-12" : "pt-20 pb-12"}`}>
            {/* TITLE */}
            <div className="flex items-center mb-8">
                <div
                    className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}
                ></div>
                <span className={`mx-2 font-semibold text-3xl text-blue-900`}>
                    About Us
                </span>
                <div
                    className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#F11a22] flex-grow`}
                ></div>
            </div>
            <section id="about" className="px-14">
                <div className="flex items-start flex-col md:flex-row-reverse gap-2 lg:gap-10">
                    {/* LEFT SIDE OF HERO SECTION */}
                    <section className="flex-1 overflow-visible py-5">
                        <h1 className="text-4xl overflow-hidden mx-auto">
                            Colorectal{" "}
                            <span className="block overflow-visible">
                                Surgeon Nepal
                            </span>
                        </h1>
                        <p className="py-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Deleniti porro veniam quas dolor sapiente a ad
                            recusandae tempore asperiores neque.
                        </p>
                        <p className="pb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat iure tempore quam. Maxime deleniti
                            dolorum laudantium, commodi magnam minus
                            consequuntur eius quaerat fuga vel nam tempore sit
                            labore quam ducimus.
                        </p>
                        <Link to="/bookapp">
                            <button className="px-4 py-1 border-2 border-blue-900 bg-blue-900 hover:scale-95 rounded-2xl text-[#f4f3f3]">
                                BOOK AN APPOINTMENT
                            </button>
                        </Link>
                    </section>

                    {/* RIGHT SIDE OF HERO SECTION */}
                    <aside className="flex-1 flex justify-center">
                        <div className="max-w-screen-sm mx-auto">
                            <img
                                src="https://img.freepik.com/free-photo/collage-medical-issue-with-blood-stool_23-2150942858.jpg?w=1060&t=st=1704044615~exp=1704045215~hmac=1f652e1080530ac36f6b21f2c826418c12593b591ddddf16e6864e0a97f6e9fa"
                                alt="Colorectal Surgeon"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default About;
