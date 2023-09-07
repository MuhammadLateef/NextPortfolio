import React from 'react'
import mainImage from "../../public/Assets/images/Home/AboutUs.png"
import Image from 'next/image'
const page = () => {
    return (
        <div>
            <div className="bg-[#111827] py-8">
                <div className=" max-w-[85rem] mx-auto min-h-screen">
                    <h1 className="my-12 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:w-[20%] w-[40%] mx-auto">About Me</h1>
                    <div className="w-[100%] py-8 flex lg:flex-row flex-col justify-between items-center text-contentc">
                        <div className="lg:w-[40%] w-[100%] lg:my-0 my-4 flex flex-col justify-between items-center">
                            <Image width={10000} height={1000} className="sm:max-w-lg max-w-[80%] h-auto" src={mainImage} alt='img' />
                        </div>
                        <div className="lg:w-[50%] w-[90%]">
                            <h3 className='text-5xl font-bold text-heading font-semibold'>Curious about me? Here you have it:</h3>
                            <p className="mt-4 text-[16px] leading-[24px]">I'm a passionate, Self Proclamied Desi who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>

                            <p className="mt-4 text-[16px] leading-[24px]">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

                            <p className="mt-4 text-[16px] leading-[24px]">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                            <p className="mt-4 text-[16px] leading-[24px]">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                                <p className='mt-3 font-semibold  leading-[24px]'>Finally, some quick bits about me.</p>
                            <ul className='ml-4 grid grid-cols-2  leading-[24px] mt-3'>
                                <li className='list-disc grid-cols-2'>B.E. in Computer Engineering</li>
                                <li className='list-disc grid-cols-2'>Avid learner</li>
                                <li className='list-disc grid-cols-2'>Full time freelancer</li>
                                <li className='list-disc grid-cols-2'>Aspiring indie hacker</li>
                            </ul>
                            <p className='mt-3 leading-[24px]'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page