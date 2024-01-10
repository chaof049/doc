import React from 'react'
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <footer className=" bg-blue-950">
        <div className=" w-full container mx-auto pl-4 pr-4  py-6 lg:py-8 ">
          <div className="md:flex md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
             
                <img src="/logoncc.png" alt="Logo" className="h-14 w-auto ms-2" />
                <span className="text-white font-bold ps-5 text-[20px]">
                  Colorectal
                  <span className="block -mt-2 text-red-400">Surgeon</span>
                </span>
              
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Our Services
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-1">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Surgeon
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Piles
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Fistula
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Haemorroids
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    <a href="https://facebook.com" className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://instagram.com"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://whatsapp.com" className="hover:underline ">
                      WhatsApp
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="https://viber.com" className="hover:underline ">
                      Viber
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://.com/" className="hover:underline">
                NAVATATECH™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex  sm:justify-center gap-8 sm:mt-0">
              <BsWhatsapp className="text-white font-semibold text-md" />
              <BsFacebook className="text-white font-semibold text-md" />
              <BsInstagram className="text-white font-semibold text-md" />
              <BsTwitter className="text-white font-semibold text-md" />
            </div>
          </div>
        </div>
      </footer>

      
    </>
  )
}

export default Footer
