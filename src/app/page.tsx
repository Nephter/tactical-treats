
import Footer from "@/components/components/Footer";
import Instagram from "@/components/components/Instagram";
import { NavMenu } from "@/components/components/NavMenu";
import OurStory from "@/components/components/OurStory";
import Shop from "@/components/components/Shop";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';
import React from "react";
import Autoplay from "embla-carousel-react"
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main>

      {/* <div className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '210vh',
          backgroundImage: 'url(/CarbonFiber.jpeg)',
          backgroundSize: 'cover',
          filter: 'brightness(0.5)',
          zIndex: -1,
        }}
      /> */}

      <div className="flex-col h-[210vh] p-0 pb-10  bg-black shadow-xl shadow-yellow-700">

        {/* ----------NAV----------- */}
        <div className="relative py-2 pl-4  flex space-x-4 items-center w-full  bg-black ">
          <div className="w-[60px] h-[60px]  bg-yellow-700  rounded-full">
            <Image src="/logo.png" alt="logo" height={80} width={80} />
          </div>
          <div>
            <NavMenu />
          </div>
        </div>

        {/* ---------HERO IMAGE----------  */}
        <div className="relative flex w-full h-[600px] ">
          <div className="flex absolute items-center top-40 left-20">
            <Card className="relative bg-transparent rounded-2xl border-none " >
              <CardHeader className="relative">
                <CardTitle className="text-8xl font-bold tracking-tighter text-black">
                  <p>
                    ALPHA
                  </p>
                  <p>
                    PACK
                  </p>
                  <p>
                    PROVISIONS
                  </p>
                </CardTitle>
                <CardDescription className="text-xl text-white">Lead the pack</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div >
            <Image src="/kibble1.jpeg" alt="hero" width={2000} height={200} />
          </div>
        </div>

        {/* ---------SPONSORS---------- */}
        <div className="w-[96%] rounded-lg items-center justify-around relative border flex bg-white h-[90px] my-[480px] mx-auto ">
          <div className="relative flex ">
            <Image src="/sponsors/inc.webp" alt="dog" width={90} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/nyt.webp" alt="dog" width={170} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/oprah.webp" alt="dog" width={100} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/today.webp" alt="dog" width={80} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/vice.webp" alt="dog" width={100} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/guardian.webp" alt="dog" width={100} height={20} />
          </div>
          <div className="relative flex ">
            <Image src="/sponsors/forbes.webp" alt="dog" width={100} height={20} />
          </div>
        </div>

        {/* ----------Mission---------- */}
        <div className="w-full bg-black bg-opacity-70 flex-col ">

          {/* <div className="w-full items-center justify-center flex-col flex mt-[230px] mb-[110px]">
            <div className="w-1/2 items-center flex-col flex p-6 font-light rounded-md absolute bg-black translate-y-10" >
              < p className="text-3xl text-yellow-700 font-bold">Our Mission </p>
              <p className="text-white text-xl text-light text-center w-2/3">To arm your canine comrades with the ultimate arsenal of elite nutrition and high-octane gear, designed to dominate any battlefield. Ignite the spirit of the pack and charge fearlessly into the fray! </p>
            </div>
          </div> */}
          <Shop />

          <div className="flex bg-yellow-700 mt-40">
            <div className="flex-col flex items-center w-full p-12">
              <p className="font-semibold  text-2xl">Our Mission</p>
              <p className="text-white text-xl text-center text-light  w-2/3">To arm your canine comrades with the ultimate arsenal of elite nutrition and high-octane gear, designed to dominate any battlefield. Ignite the spirit of the pack and charge fearlessly into the fray! </p>
            </div>
            <Image src="/carousel2.jpeg" alt="dog" width={700} height={20} objectFit="cover" className="shadow-xl shadow-black" style={{ borderRadius: '8px 0 0 8px' }} />
          </div>

          <Instagram />

          <OurStory />



          <Footer />

        </div>
      </div>


    </main>
  );
}
