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
                                    <li>
                                        <span className='font-semibold'>Expertise in Modern Frontend Technologies:
                                        </span>
                                        Showcase your proficiency in the latest frontend technologies such as React, Next, or Laravel etc.</li>
                                    <li>Highlight your ability to create responsive and visually appealing user interfaces.</li>
                                    <li>
                                        <span className='font-semibold'>Experience with Cross-Browser Compatibility: </span>
                                        Emphasize your skills in ensuring cross-browser compatibility to provide a consistent user experience across different browsers.</li>

                                    <li>

                                        <span className='font-semibold'>Collaboration and Communication Skills: </span>
                                        Emphasize your ability to collaborate with cross-functional teams, including designers, backend developers, and project managers.</li>
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
                                    <li>Led and motivated cross-functional teams to achieve project milestones and exceed client expectations.</li>
                                    <li>Successfully managed end-to-end project lifecycles, ensuring timely delivery within scope and budget.</li>
                                    <li>Provided technical guidance and mentorship to team members, fostering skill development and knowledge sharing.</li>
                                    <li>Ensured adherence to coding standards and best practices for high-quality deliverables.</li>
                                </ul>
                            </div>
                            <div className="md:w-[20%] w-full">
                                <p className='text-contentc text-base'>Jul 2022 - Oct 2023</p>
                            </div>
                        </div>
                        <div className="w-[70%] transition duration-delay-200 hover:scale-105 hover:bg-[#575960] my-[50px] mx-auto bg-[#1F2937] p-[32px] rounded-[12px] flex md:flex-row flex-col justify-between items-start" style={{ boxShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.15)', }}>
                            <Image width={100} height={100} className='w-32' src={UpworkLogo} alt='img' />
                            <div className="md:w-[50%] w-full md:mt-0 mt-4">
                                <h2 className='mb-4 text-contentc text-[20px] font-semibold'>Full Stack Developer</h2>
                                <ul className='space-y-2 list-disc ml-4 text-contentc text-base'>
                                    <li>Proficient in both frontend and backend technologies, specializing in frameworks such as React or Angular for the frontend and Node.js or Django for the backend.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Demonstrated ability to develop end-to-end solutions, from designing interactive user interfaces to implementing robust server-side logic.</li>
                                    <li>Extensive experience in database design and management, including expertise in SQL and NoSQL databases (e.g., MongoDB, MySQL, PostgreSQL).</li>
                                    <li>Developed RESTful APIs and integrated third-party APIs to enhance functionality and connectivity of web applications.</li>
                                    <li>Ensured seamless communication between frontend and backend components for a cohesive user experience.</li>
                                </ul>
                            </div>
                            <div className="md:w-[20%] w-full">
                                <p className='text-contentc text-base'>Dec 2023 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
