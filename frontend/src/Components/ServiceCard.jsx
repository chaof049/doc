import React from 'react'

const ServiceCard = (props) => {
    return (
        <div className='h-fit p-2 overflow-hidden'>
            <div className="max-w-[18rem] bg-white border border-gray-200 rounded-2xl" style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 256, 0.2)', }}>
                <img className="rounded-t-lg h-44 w-full hover:scale-105" src={props.image} />
                <div className="p-5">
                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{props.description}.</p>
                    <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard
