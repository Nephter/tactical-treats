import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'

const Shop = () => {
  return (
    <div className="flex-col space-y-10" >
      {/* <div className=" text-5xl font-semibold text-yellow-700 w-full flex justify-center">
        <p>Shop our shit</p>
      </div> */}

      <div className="flex w-full justify-around">
        <Card className="flex-col items-center text-center bg-black bg-opacity-70 border-none">
          <CardHeader>
            <CardTitle className="text-white">Gear</CardTitle>
            <CardDescription>Get the right gear for the job</CardDescription>
          </CardHeader>
          <CardContent>

            <Image src="/gear3.png" alt="gear" width={300} height={20} />

          </CardContent>
          <CardFooter>
            <Button className="mx-auto bg-yellow-700 cursor-pointer mt-5">Shop Gear</Button>
          </CardFooter>
        </Card>

        <Card className="flex-col items-center text-center bg-black bg-opacity-70 border-none">
          <CardHeader>
            <CardTitle className="text-white">Tac-Snac™</CardTitle>
            <CardDescription>Snacks made with read ingredients </CardDescription>
          </CardHeader>
          <CardContent>

            <Image src="/board2.png" alt="bones" width={300} height={200} />

          </CardContent>
          <CardFooter>
            <Button className="mx-auto bg-yellow-700 cursor-pointer mt-5">Shop Tidbits</Button>
          </CardFooter>
        </Card>
      </div>
    </div>

  )
}

export default Shop