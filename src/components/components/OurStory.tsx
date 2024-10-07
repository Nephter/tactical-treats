import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import Image from 'next/image'

const OurStory = () => {
  return (
    <div className="flex-col w-full mt-28 rounded-sm bg-yellow-700 ">
      {/* <div className="pt-20 text-5xl font-semibold text-black w-full flex justify-center">
        <p>How it all started</p>
      </div> */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex">
            <Image src="/carousel3.jpeg" alt="dog" width={700} height={20} objectFit="cover" className="shadow-xl shadow-black" style={{ borderRadius: '0 8px 8px 0' }} />
            <div className="flex-col p-12">
              <p className="font-semibold text-2xl">Our Story</p>
              <p className="text-gray-700">Every success story starts with a good boy</p>
              <p className="pt-4">In the heart of Colorado’s rugged terrain, two former military dog handlers, Eagle-star and Tomahawk, found themselves constantly discussing the limited options available for dog gear that could withstand the harsh conditions of their frequent hiking and training outings with their canine partners. This shared frustration sparked an idea...</p>
              <div className="w-full flex relative justify-end pt-16">
                <Button className="bg-yellow-700 ring-1 ring-inset" >Read Article</Button>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className=" border border-gray-500 max-w-[1000px] w-[1000px] bg-black  text-white">
          <Image src="/dog2.png" alt="dog" width={200} height={20} />

          <DialogHeader>
            <DialogTitle className="text-2xl">Our Story</DialogTitle>
            <DialogDescription>
              Every success story starts with a good boy
            </DialogDescription>
          </DialogHeader>
          <p className="font-light">In the heart of Colorado’s rugged terrain, two former military dog handlers, Eagle-star and Tomahawk, found themselves constantly discussing the limited options available for dog gear that could withstand the harsh conditions of their frequent hiking and training outings with their canine partners. This shared frustration sparked an idea—why not create their own?

            Drawing from their expertise in canine nutrition and the rigorous demands of tactical training, they began experimenting in Tomahawk’s kitchen, developing recipes that were both highly nutritious and incredibly durable. They called their creation Bravo Bites.

            Bravo Bites wasn’t just another dog food brand; it was a mission-driven venture to empower dogs and their owners everywhere to push the limits of adventure. Each recipe was packed with high-quality proteins, essential fats, and antioxidants to ensure peak performance in the most challenging environments.

            Word of Bravo Bites spread quickly within the local community. Eagle-star and Tomahawk started receiving orders not just from fellow veterans but from outdoor enthusiasts, search and rescue teams, and law enforcement agencies. The feedback was overwhelmingly positive, with stories of dogs displaying improved endurance and vitality.

            Fuelled by their early success and passionate testimonials, Eagle-star and Tomahawk expanded Bravo Bites. They established a small manufacturing unit right in the foothills of the Rockies, where they could maintain their commitment to quality while embracing the spirit of Colorado’s outdoor culture.

            As Bravo Bites grew, so did their product line. They introduced Tactical Grub Packs, convenient, ready-to-eat meal packets for dogs on the go, and Ranger Rewards, treats formulated for quick energy boosts during long treks.

            Today, Bravo Bites stands at the forefront of tactical dog nutrition, a testament to Eagle-star and Tomahawk's vision and dedication. They've not only created a product but a community of adventurous spirits who believe that no peak is too high, and no valley too deep, when shared with a loyal four-legged friend.

            Their motto, "Fuel for the Bold," continues to inspire dog owners to embark on new adventures, confident that Bravo Bites will keep their canine companions strong and spirited, no matter the challenge.</p>
        </DialogContent>
      </Dialog>
    </div>

  )
}

export default OurStory