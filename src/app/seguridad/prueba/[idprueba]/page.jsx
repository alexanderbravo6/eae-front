'use client'
import { Input } from '@nextui-org/react'
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react'

function Page({ params }) {
  const router = useRouter();

  return (
    <>
      <Input type="email" variant="flat" label="Número de documento de identidad" />
      <div className='mt-8 flex gap-4 items-center'>

        <Button
          onPress={() => {
            router.push(`../persona/1/2`)
          }}
          className='bg-[#04C8C8] px-8 ' color="primary">
          Buscar
        </Button>
        <Link className='px-8 text-white hover:bg-gray-300 hover:text-black bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href="/">
          Regresar
        </Link>
      </div>
    </>
  )
}

export default Page