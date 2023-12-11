import Image from 'next/image';
import React from 'react'
import HeroImage from "../../public/Assets/images/Home/heroimage.png";
import location from "../../public/Assets/images/Home/Desktop/location.svg";
import gitHub from "../../public/Assets/images/Home/Desktop/gitHub.svg";
import xtwitter from "../../public/Assets/images/Home/Desktop/xtwitter.svg";
import figma from "../../public/Assets/images/Home/Desktop/figma.svg";


const Hero = () => {
    return (
        <div>
            <div className="hero max-w-[85rem] lg:h-[90vh] mx-auto h-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={HeroImage} className="sm:max-w-sm max-w-[80%]" />
                    <div className=''>
                        <h1 className="text-5xl font-bold text-heading">Hi, I&apos;m Mummhad Latif 👋</h1>
                        <p className="text-contentc text-[16px] my-[8px] font-medium">I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 3 years, I still love it as if it was something new.</p>
                        <div className="mt-[60px] flex items-center text-contentc text-[16px] my-[8px] font-medium">
                            <Image  src={location} alt='img'/> &nbsp;&nbsp;<p>Gilgit, Pakistan</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-bghover"></div>&nbsp;&nbsp;&nbsp;&nbsp; <span className='text-contentc text-[16px] my-[8px] font-medium'>Available for new projects</span>
                        </div>
                        <div className="mt-[60px] flex items-center space-x-1">
                            <a href="#"><Image src={gitHub} alt='img'/></a>
                            <a href="#"><Image src={xtwitter} alt='img'/></a>  
                            <a href="#"><Image src={figma} alt='img'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            </div>
        </div>
    )
}

export default Hero;