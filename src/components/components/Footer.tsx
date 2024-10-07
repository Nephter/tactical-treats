import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { EmailForm } from './EmailForm'

const Footer = () => {
  return (
    <div className="pt-[105px]  w-full flex relative items-center justify-center ">
      <Card className="border-none w-full bg-black  text-white pb-20">
        <CardHeader>
          <CardTitle className="text-yellow-700">
            Stay briefed on the latest
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmailForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default Footer