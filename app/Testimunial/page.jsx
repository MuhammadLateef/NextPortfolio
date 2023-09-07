import Image from 'next/image';
import React from 'react'
import logoavator from '../../public/Assets/images/Home/testimunials/icon-avatar.svg';
const cardsData = [
    {
        avator: logoavator,
        comment: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
        title: "Mr Rupani ",
        message: "Founder - xyz.com"
    },
    {
        avator: logoavator,
        comment: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
        title: "John Doe",
        message: "Founder - xyz.com"
    },
    {
        avator: logoavator,
        comment: "“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”",
        title: "John Doe",
        message: "Founder - xyz.com"
    },
]
const page = () => {
    return (
        <div className='bg-[#111827] py-8'>
            <div className="max-w-[1500px] mx-auto">
                <h1 className="mt-12 text-contentc text-[14px] font-medium rounded-full py-[4px] px-[20px] bg-[#374151] text-center lg:w-[8%] md:w-[20%] w-[40%] mx-auto">About Me</h1>
                <p className='my-4 text-contentc text-[20px] text-center px-[20px] my-6'>Nice things people have said about me:</p>
                <div className="flex lg:flex-row flex-col w-[90%] mx-auto gap-[30px]">
                    {
                        cardsData.map((title, id) => (
                            <div key={id} className=" bg-[#1E2836] flex flex-col items-center justify-between transition duration-delay-200 hover:scale-105 hover:bg-[#0A0D12] lg:w-[30%] justify-center items-center md:p-[48px] p-[25px] rounded-[12px]">
                                <Image src={title.avator} width={100} height={100} className='' alt="" />
                                <p className='text-base font-normal text-white my-[24px]'>{title.comment}</p>
                                <h3 className='text-[20px] font-semibold text-white'>{title.title}</h3>
                                <p className='text-[14px] text-white'>{title.message}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default page;