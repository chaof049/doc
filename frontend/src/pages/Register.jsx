import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const onSubmit = async (data) => {
        console.log(data);
        await axios
            .post("http://localhost:8000/users", data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <section className="bg-gray-50 pt-20 pb-12">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[90vh] lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create and Register account
                            </h1>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 md:space-y-4"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-1 text-sm font-medium text-gray-900"
                                    >
                                        {" "}
                                        Username
                                    </label>
                                    <input
                                        type="name"
                                        {...register("userName", {
                                            required: true,
                                        })}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block mb-1 text-sm font-medium text-gray-900"
                                    >
                                        {" "}
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        {...register("phoneNo", {
                                            required: true,
                                        })}
                                        id="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-1 text-sm font-medium text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="xyz@.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-1 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-gray-500"
                                        >
                                            I accept the{" "}
                                            <a
                                                className="font-medium text-blue-800 hover:underline"
                                                href="#"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-blue-900 hover:underline"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
