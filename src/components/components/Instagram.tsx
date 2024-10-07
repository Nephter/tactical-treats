import React from 'react'
import { Label } from '../ui/label'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const Instagram = () => {
  return (
    <div className="flex-col space-y-10 ">
      <div className="pt-20 w-full relative flex flex-col items-center justify-center text-white">
        <div className="">
          <Label className="text-2xl font-light">Follow us on Instagram</Label>
        </div>
        <div>
          <Label className="text-4xl font-semibold text-yellow-700">@Alpha_Pack_Provisions</Label>
        </div>
      </div >
      <div className="w-full flex relative items-center justify-center">
        <Carousel className="w-full border rounded-lg border-gray-500">
          <CarouselContent className="-ml-1">
            {/* It is assumed each CarouselItem is styled properly to be contained within the carousel */}
            {['/dog4.png', '/carousel1.jpeg', '/carousel4.jpeg', '/dog3.png', '/dog5.png'].map((src, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 relative" style={{ height: '300px' }}> {/* Set height as needed */}
                <div className="p-1 h-full">
                  <Card>
                    <CardContent className="flex items-center justify-center h-full">
                      <Image src={src} alt="dog" layout="fill" objectFit="cover" style={{ borderRadius: '6px' }} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Instagram
