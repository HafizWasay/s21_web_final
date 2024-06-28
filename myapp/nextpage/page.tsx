
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { FcLike } from 'react-icons/fc'
import { RiDeleteBin5Line } from 'react-icons/ri'

const nextpage = () => {
  return (
    <div className='justify-center mx-[580px]'>
        <Card className='flex items-center justify-between border border-black rounded-lg mt-4'>
        <CardContent className='flex mt-5'>
          <p>This is sample task 1</p>
        </CardContent>
        <CardFooter className='gap-x-5 flex mt-5'>
          <Button className='gap-x-3 bg-[#FF7F3E] text-black'><span><FcLike /></span> Marks as Completed</Button>
          <Button><RiDeleteBin5Line /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default nextpage