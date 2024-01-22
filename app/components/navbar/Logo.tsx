"use client"

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter()
    return (
        <Image onClick={() => router.push("/")} src={"/images/logo.png"} alt="logo" className='hidden md:block cursor-pointer' height="100" width="100" />
    )
}
