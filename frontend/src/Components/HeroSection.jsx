import React, { useState } from 'react'
import { FaHospitalSymbol } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const [showAll, setShowAll] = useState(false)

    const handleReadMore = () => {
        setShowAll(!showAll)
    }

    return (
        <>
            <section id="hero" className='px-14 pt-12'>
                <div className="flex flex-col-reverse md:flex-row items-center h-[93vh]">
                    {/* LEFT SIDE OF HERO SECTION */}
                    <section className="md:flex-1">
                        <h1 className='text-4xl overflow-hidden mx-auto font-medium'>What is Colorectal Surgeon?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti porro veniam quas dolor sapiente a ad recusandae tempore asperiores neque.</p>
                        <p className={`mb-3 ${showAll ? '' : 'line-clamp-1'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium voluptatem expedita? Repudiandae
                            voluptatibus, veritatis vel praesentium dicta qui aliquam doloribus repellendus odit saepe officiis. Labore, accusantium hic. Quibusdam, nemo.</p>
                        <div className='flex'>
                            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 " onClick={() => { handleReadMore() }}>
                                {showAll ? 'Read Less' : 'Read More'}
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                            <Link to="/bookapp">
                            <button className='ml-3 px-4 py-1 border-2 border-slate-600  shadow-[#ffffff] shadow-sm hover:shadow-md hover:shadow-[#ffffff] rounded-2xl text-[#232323]'>BOOK AN APPOINTMENT</button>
                            </Link>
                        </div>
                    </section>

                    {/* RIGHT SIDE OF HERO SECTION */}
                    <aside className='md:flex-1 flex justify-center relative'>
                        <div className='rounded-full w-full h-auto bg-[#b5b5b5] flex md:flex-[0.7] justify-center overflow-hidden'>
                            <img src='https://www.infodoctor.in/assets/frontend/images/banner.png' className=' pt-5 w-[70%]' />
                            <div className='p-2 bg-[#fefdfd] shadow-xl shadow-[#e9e9e9] rounded-md absolute bottom-16 left-12 flex text-left hover:scale-110'>
                                <div className='flex items-center justify-center text-4xl mr-2 text-red-500'><FaHospitalSymbol /></div>
                                <div className='md:text-[15px]'>
                                    <p>Dr.Binay Yadav</p>
                                    <p>MBBS,MS(Colorectal Surgeon)</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}

export default HeroSection




