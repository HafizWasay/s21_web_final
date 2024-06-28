import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { ImSad2 } from "react-icons/im";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col mt-20 gap-y-16'>
      <div className='flex items-center justify-center gap-x-28'>
        <div className='border border-black rounded-lg w-[1/2] p-12 bg-[#80C4E9] items-center justify-center'>
          <h1>Total Tasks</h1>
          <h1 className='text-2xl font-bold'>05</h1>
        </div>
        <div className='border border-black rounded-lg w-[1/2] p-12 bg-[#FF7F3E]'>
          <h1>Completed</h1>
          <h1 className='text-2xl font-bold'>03</h1>
        </div>
        <div className='border border-black rounded-lg w-[1/2] p-12 bg-[#91DDCF]'>
          <h1>Pending</h1>
          <h1 className='text-2xl font-bold'>02</h1>
        </div>
      </div>
      <div className='flex justify-center gap-x-6'>
        <Input className=' w-[600px] border border-black rounded-lg'></Input>
        <Button className='rounded-lg gap-x-2'>Create Task<span><FaPlus className='text-purple-900' /></span></Button>
      </div>
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
      <Card className='flex items-center justify-between border border-black rounded-lg mt-4'>
        <CardContent className='flex mt-5'>
          <p>This is sample task 1</p>
        </CardContent>
        <CardFooter className='gap-x-5 flex mt-5'>
          <Button className='gap-x-3 bg-[#91DDCF] text-black'><span><ImSad2 className='text-yellow-700' /></span>Mark as incomplete</Button>
          <Button><RiDeleteBin5Line /></Button>
        </CardFooter>
      </Card>
      <Card className='flex items-center justify-between border border-black rounded-lg mt-4'>
        <CardContent className='flex mt-5'>
          <p>This is sample task 1</p>
        </CardContent>
        <CardFooter className='gap-x-5 flex mt-5'>
          <Button className='gap-x-3 bg-[#91DDCF] text-black'><span><ImSad2 className='text-yellow-700' /></span>Mark as incomplete</Button>
          <Button><RiDeleteBin5Line /></Button>
        </CardFooter>
      </Card>
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
      <div className='flex mx-[700px] w-[640px] items-center justify-end'>
        <Button className='flex text-black bg-white w-[150px] border border-black rounded-lg  '>
          <Link href='/nextpage/nextpage' className='flex gap-x-3'>
            Next <span><FaHandPointRight className='text-orange-300 text-xl'/></span>
          </Link>
         </Button>
      </div>
    </div>

  )
}

export default page