import React from 'react'

const Info = () => {
    return (
        <>
            {/* TITLE */}
            <div className={`flex items-center mb-8 pt-12`}>
                <div className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}></div>
                <span className={`mx-2 font-semibold text-3xl text-blue-900`}>Our Notable Partners</span>
                <div className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#F11a22] flex-grow`}></div>
            </div>
            {/* <p className='text-center text-blue-900 text-3xl font-semibold pb-8 '>---   Our Notable Partners ---</p> */}
            <section id='info' className='bg-slate-200 px-14 mb-8 mt-4 py-12'>
                <div className='w-full'>
                    {/* <div className='w-full flex justify-center'> */}
                    <div className=' grid grid-cols-3 w-full place-items-center justify-center'>
                        <img className='w-36 h-full' src='../../nccnepal.png' />
                        <img className='w-44 h-20' src='../../bajra.jpg' />
                        <img className='w-36 h-20' src='https://static1.squarespace.com/static/5a1f012fc027d8b65276b7e4/t/5a1f1cf5f9619ad38acd79c9/1511988481093/216549---Everest---Logo---Hospice.png' />
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default Info
