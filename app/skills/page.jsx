import Image from 'next/image';
import React from 'react'
const skillData = [
    {
        logo: "/Assets/images/Home/skills/icon-javscript.svg",
        title: "JavaScript",
    },
    {
        logo: "/Assets/images/Home/skills/icon-typescript.svg",
        title: "TypeScript",
    },
    {
        logo: "/Assets/images/Home/skills/icon-react.svg",
        title: "React",
    },
    {
        logo: "/Assets/images/Home/skills/icon-nextjs.svg",
        title: "Next Js",
    },
    {
        logo: "/Assets/images/Home/skills/icon-nodejs.svg",
        title: "Node Js",
    },
    {
        logo: "/Assets/images/Home/skills/solidity.svg",
        title: "Solidity",
    },
    {
        logo: "/Assets/images/Home/skills/icon-nest.svg",
        title: "Nest Js",
    },
    {
        logo: "/Assets/images/Home/skills/Etherium.svg",
        title: "Etherium",
    },
    {
        logo: "/Assets/images/Home/skills/bitcoin.svg",
        title: "Bitcoin",
    },

    {
        logo: "/Assets/images/Home/skills/icon-mongodb.svg",
        title: "Mongodb",
    },
    {
        logo: "/Assets/images/Home/skills/icon-sass.svg",
        title: "Saas/Scss",
    },
    {
        logo: "/Assets/images/Home/skills/icon-tailwindcss.svg",
        title: "Tailwind css",
    },
    {
        logo: "/Assets/images/Home/skills/Metamask.svg",
        title: "Metamask",
    },
    {
        logo: "/Assets/images/Home/skills/blockchain.svg",
        title: "Blockchain",
    },
    {
        logo: "/Assets/images/Home/skills/Githup.svg",
        title: "Git",
    },

]
const page = () => {
    return (
        <div className='bg-dark'>
            <h1 className="mt-20 mb-4 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:w-[20%] w-[40%] mx-auto">Skills</h1>
            <div className="w-[90%] mx-auto text-center">
                <p  className=' my-4 text-contentc text-[20px]'>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="max-w-[85rem] mx-auto flex md:justify-between justify-around flex-wrap items-center">
                {
                    skillData.map((items, id) => (
                        <div key={id} className="lg:w-[12%] md:w-[20%] sm:w-[23%] w-[40%] md:my-8 mt-8 md:mx-2 mx-4">
                            <div className=" flex items-center flex-col">
                             <a href="#"><Image width={10} height={10} className='h-20 w-20' src={items.logo} alt='img' /></a>   
                                <p className='font-semibold my-4 text-contentc'>{items.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page;