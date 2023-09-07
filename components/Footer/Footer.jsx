import React from 'react'
import { MdOutlineForwardToInbox } from 'react-icons/md'
import { TfiLayers } from "react-icons/tfi"
import { FiPhoneCall,FiGithub } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFigma } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-[#030611]'>
            <div className="max-w-[1500px] mx-auto">
                <div className="md:w-[50%] w-[90%] mx-auto flex items-center flex-col">
                    <h1 className="mt-12 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[20%] md:w-[40%] w-[60%] mx-auto">About Me</h1>
                    <p className='my-4 text-contentc text-[20px] text-center px-[20px] my-6'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

                    <div className="flex space-x-4 text-white items-center">
                        <span className='sm:text-[25px] text-[18px]'><MdOutlineForwardToInbox /> </span> <p className='md:text-[35px] sm:text-[25px] text-[20px]'>kharmangi129@gmail</p> <span className='sm:text-[25px] text-[18px]'><TfiLayers /></span>

                    </div>
                    <div className="flex space-x-4 text-white items-center">
                        <span className='sm:text-[25px] text-[18px]'><FiPhoneCall /> </span> <p className='md:text-[35px] sm:text-[25px] text-[20px]'>+92 355 4229889</p> <span className='sm:text-[25px] text-[18px]'><TfiLayers /></span>
                    </div>
                    <p className='text-base text-white my-8'>You may also find me on these platforms!</p>
                    <div className="text-white text-[20px] flex gap-[10px] my-4">
                        <span><FiGithub /></span> <span><SlSocialTwitter /></span> <span><FaFigma /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;