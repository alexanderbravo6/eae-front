import Footer from '@/components/footer'
import Image from 'next/image'
import React from 'react'

function layout({ children }) {
    return (
        <>
            <div className="flex  w-full h-full items-center  ">
                <div className="lg:w-3/5 w-full    ">
                    <div className='flex items-center '>
                        <div className=" mx-auto  w-[80vw] max-h-[430px] min-h-[430px] lg:w-[460px] lg:overflow-auto p-3">
                            <Image src="/icon-minedu.svg" width={150} height={150} alt="Icono Ministerio de Educación" />
                            <h2 className="object-fill mt-6 text-lg font-semibold">
                                Información de acceso
                            </h2>
                            <p className="text-gray-400 text-sm font-extralight">
                                Elige la prueba que te corresponde
                            </p>
                            <div className="mt-7">
                                {children}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>

                <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
                    <img src="/main-eae.png" className="object-fill w-full   h-full" alt="Foto eae" />
                </div>
            </div>


        </>
    )
}

export default layout