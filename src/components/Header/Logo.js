import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from "@/public/profile-img.png"

function Logo() {
  return (
    <Link href="/" className='flex items-center text-dark'>
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
            <Image src={profileImg} alt='Prashant lalwani' className='w-full h-auto rounded-full'></Image>
        </div>
        <span className='font-bold text-xl'>Prashant</span>
    </Link>
  )
}

export default Logo