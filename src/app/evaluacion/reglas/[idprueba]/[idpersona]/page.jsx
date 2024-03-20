'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function Page({params}) {
    const router = useRouter();
    return (
        <div className='lg:w-full w-[90%] h-full relative lg:mx-0 mx-[5%] '>
            <div className='lg:w-[791px]  overflow-auto max-h-[550px] min-h-[550px] h-[550px] m-auto absolute inset-0'>
                <div className='flex items-center justify-center'>
                    <Image src="/icon-minedu.svg" width={180} height={180} alt="Icono Ministerio de Educación" />
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 mt-6 gap-1'>
                    <div className='flex col-span-2  lg:col-span-3  items-center bg-[#DCF3F3] py-5 px-8 gap-3'>
                        <Image src="/icon-prueba-comprension.svg" width={45} height={45} alt="libro icon" />
                        <div>
                            <p className='font-bold text-lg'>
                                Prueba de Comprensión lectora
                            </p>
                            <span className='text-base' >Primer ciclo de estudios</span>
                        </div>
                    </div>
                    <div className='flex col-span-2 lg:col-span-2 items-center bg-[#DCF3F3] p-5 gap-3 '>
                        <Image src="/icon-person.svg" width={45} height={45} alt="icono de persona" />
                        <div>
                            <p className='text-gray-400'>
                                Espacios disponibles
                            </p>
                            <span className='font-bold'>400</span>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <h2 className='text-lg text-center font-bold'>
                        Instrucciones
                    </h2>
                    <div className='mt-4'>
                        <li>Esta prueba consta de treinta (30) preguntas. Cada pregunta presenta cuatro alternativas de respuesta.</li>
                        <li>El tiempo máximo para el desarrollo de la prueba es de 120 minutos. Puedes administrar dicho tiempo como consideres más conveniente. Un cronómetro te indicará el tiempo restante.</li>
                        <li>Al marcar una respuesta, esta queda grabada al presionar el botón “Siguiente”. Automáticamente, pasarás a la siguiente pregunta y NO podrás regresar a la pregunta anterior. Por ello, medita bien tu respuesta antes de marcar.</li>
                        <li>Si tu respuesta es en blanco, presiona el botón “Siguiente”. Si presionas este botón, pasarás automáticamente a la siguiente pregunta y tampoco podrás regresar a la pregunta anterior.</li>
                        <li>Si así lo deseas puedes utilizar lápiz y/o papel durante la prueba.</li>

                    </div>
                </div>
                <div className='mt-10 flex gap-4 items-center justify-center'>

                    <Button
                        onPress={() => {
                            router.push(`/evaluacion`)
                        }}
                        className='bg-[#04C8C8] px-8 ' color="primary">
                        Comenzar Evaluación
                    </Button>
                    <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`../../../seguridad/persona/1/2`}>
                        Regresar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page