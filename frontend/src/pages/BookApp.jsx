import React, { useEffect } from "react";

const BookApp = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-center p-4 bg-gray-50 pt-20 ">
                <div className="mx-auto w-full max-w-[550px] bg-white px-6 py-8 rounded-xl">
                    <h1 className="text-center text-2xl text-blue-900 font-semibold">
                        Booking Appointment
                    </h1>
                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="mb-1 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="phone"
                                className="mb-1 block text-base font-medium text-[#07074D]"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="mb-1 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-3">
                                    <label
                                        htmlFor="date"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-3">
                                    <label
                                        htmlFor="time"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 pt-3">
                            <label className="mb-3 block text-base font-semibold text-[#07074D] sm:text-xl">
                                Address Details
                            </label>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="area"
                                            id="area"
                                            placeholder="Enter area"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Enter city"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-blue-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookApp;
