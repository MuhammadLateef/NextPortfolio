import Image from 'next/image';
import React from 'react';
import UpworkLogo from "../../public/Assets/images/Home/Experience/logo-upwork.png"

const page = () => {
    return (
        <div>
            <div className='bg-dark'>
                <div className="max-w-[85rem] mx-auto">
                    <h1 className="mt-4 mb-4 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:md:w-[20%] w-[40%] mx-auto">Experience</h1>
                    <div className="w-[90%] mx-auto text-center">
                        <p className=' my-4 text-contentc text-[20px]'>Here is a quick summary of my most recent experiences:</p>
                    </div>
                    <div className="">
                        <div className="w-[70%] transition duration-delay-200 hover:scale-105 hover:bg-[#575960] my-[50px] mx-auto bg-[#1F2937] p-[32px] rounded-[12px] flex md:flex-row flex-col justify-between items-start" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <Image width={100} height={100} className='w-32' src={UpworkLogo} alt='img' />
                            <div className="md:w-[50%] w-full md:mt-0 mt-4">
                                <h2 className='mb-4 text-contentc text-[20px] font-semibold'>Sr. Frontend Developer</h2>
                                <ul className='space-y-2 list-disc ml-4 text-contentc text-base'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className="md:w-[20%] w-full">
                                <p className='text-contentc text-base'>Nov 2021 - Present</p>
                            </div>
                        </div>
                        <div className="w-[70%] transition duration-delay-200 hover:scale-105 hover:bg-[#575960] my-[50px] mx-auto bg-[#1F2937] p-[32px] rounded-[12px] flex md:flex-row flex-col justify-between items-start" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <Image width={100} height={100} className='w-32' src={UpworkLogo} alt='img' />
                            <div className="md:w-[50%] w-full md:mt-0 mt-4">
                                <h2 className='mb-4 text-contentc text-[20px] font-semibold'>Team Lead</h2>
                                <ul className='space-y-2 list-disc ml-4 text-contentc text-base'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className="md:w-[20%] w-full">
                                <p className='text-contentc text-base'>Jul 2017 - Oct 2021</p>
                            </div>
                        </div>
                        <div className="w-[70%] transition duration-delay-200 hover:scale-105 hover:bg-[#575960] my-[50px] mx-auto bg-[#1F2937] p-[32px] rounded-[12px] flex md:flex-row flex-col justify-between items-start" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <Image width={100} height={100} className='w-32' src={UpworkLogo} alt='img' />
                            <div className="md:w-[50%] w-full md:mt-0 mt-4">
                                <h2 className='mb-4 text-contentc text-[20px] font-semibold'>Full Stack Developer</h2>
                                <ul className='space-y-2 list-disc ml-4 text-contentc text-base'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className="md:w-[20%] w-full">
                                <p className='text-contentc text-base'>Dec 2015 - May 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
