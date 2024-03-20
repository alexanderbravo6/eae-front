'use client'
import React from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function page({ params }) {
  const router = useRouter();
  return (
    <>
      <RadioGroup
        className='gap-4'
        label="¿Cual es su apellido materno?"
        orientation="horizontal"
      >
        <Radio value="buenos-aires">MATEO</Radio>
        <Radio value="sydney">ALCALA</Radio>
        <Radio value="san-francisco">AQUINO</Radio>
      </RadioGroup>
      <RadioGroup
        className='mt-8 gap-4'
        label="¿En que mes naciste?"
        orientation="horizontal"
      >
        <Radio value="buenos-aires">ENERO</Radio>
        <Radio value="sydney">OCTUBRE</Radio>
        <Radio value="san-francisco">DICIEMBRE</Radio>

      </RadioGroup>
      <div className='mt-10 flex gap-4 items-center'>

        <Button
          onPress={() => {
            router.push(`../../reglas/1/2`)
          }}
          className='bg-[#04C8C8] px-8 ' color="primary">
          Validar
        </Button>
        <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`../../prueba/${params.idprueba}`}>
          Regresar
        </Link>
      </div>
    </>
  )
}

export default page