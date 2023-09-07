import Image from 'next/image'
import Homepage from "./Home/page";
import Aboutus from "./AboutUs/page";
import Skills from "./skills/page";
import Expericence from "./Experience/page";
import Work from "./Work/page";
import Testamonial from "./Testimunial/page";
export default function Home() {
  return (

    <main className="">
        <Homepage />
        <Aboutus />
        <Skills />
        <Expericence />
        <Work />
        <Testamonial />
    </main>
  )
}
