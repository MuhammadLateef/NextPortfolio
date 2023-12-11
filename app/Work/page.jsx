import React from 'react'
import Image from 'next/image';
import work1 from "../../public/Assets/images/Home/work/work1.png";
import work2 from "../../public/Assets/images/Home/work/work2.png";
import work3 from "../../public/Assets/images/Home/work/work3.png";
import work4 from "../../public/Assets/images/Home/work/readmore.svg";
const page = () => {
    return (
        <div>
            <div className='bg-dark' id='work'>
                <div className="max-w-[85rem] mx-auto">
                    <h1 className="mt-4 mb-4 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:md:w-[20%] w-[40%] mx-auto">Work</h1>
                    <div className="w-[90%] mx-auto text-center">
                        <p className=' my-4 text-contentc text-[20px]'>Some of the noteworthy projects I have built:</p>
                    </div>
                    <div className="">
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] md:mt-0 mt-4">
                              <Image width={1000} height={100} className='w-full' src={work3} alt='img'/>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>Rupani foundation</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>Rupani Foundation Pakistan is implementing innovative, community-driven development solutions to respond to development challenges for over 16 years, reaching out to vulnerable populations in Pakistan, irrespective of their race, religion, ethnicity, or gender. </p>
                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row-reverse flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] lg:mt-0 mt-4">
                              <Image width={1000} height={100} className='w-full' src={work2} alt='img'/>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>National Association of Muslim Ceratable Clinics</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>The National Association of Muslim Charitable Clinics (NAOMCC), an initiative of Ibn Sina Foundation, a nationwide community-based, non-profit, 501 (c)(3), Muslim charitable clinics alliance operating in the country. The aim is to unite healthcare organizations and clinics to share common interests and collaborate in concerted efforts to uplift communities.</p>
                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                        <div className="w-[100%] my-[50px] mx-auto flex lg:flex-row flex-col justify-between items-center" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <div className="lg:w-[45%] w-full p-[32px] rounded-[12px] bg-[#1F2937] lg:mt-0 mt-4">
                              <Image width={1000} height={100} className='w-full' src={work1} alt='img'/>
                            </div>
                            <div className="lg:w-[45%] w-[90%] lg:mt-0 mt-8">
                                <h2 className='text-[20px] font-semibold text-contentc'>Nibble</h2>
                                <p className='text-contentc text-[16px] mt-[24px]'>Recognized as a symbol of trust and excellence, Nibble Software Technologies is a reward to its clients. We are a one-stop solution for all IT needs like website, CRM, travel portal, travel APIs, mobile apps and digital marketing needs. With a team of professionals, we further aim to strive for exceptional results in terms of work and ethics. We believe that our smart marketing strategies will fetch higher exposure, more clients and generate business, help you achieve your goals. We professional team for every need of our clients.</p>
                                <div className="flex flex-wrap mt-[24px] items-start justify-start">
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>React</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Next.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Javascript</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Nest.js</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Material UI</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Tailwind css</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Bootstrapt</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Git</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Solidity</a>
                                    <a href="#" className='text-contentc text-[14px] mt-2 mr-4 font-medium bg-[#1F2937] rounded-full py-[4px] px-[20px]'>Smart Contracts</a>
                                </div>
                                <Image width={100} height={100} className='h-10 w-10 mt-[24px]' src={work4} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;