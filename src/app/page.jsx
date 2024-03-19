import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen ">
        <div className="lg:w-3/5 w-full ">
          <div className="m-auto  lg:w-96 min-h-[450px] mt-52 ">
            <Image src="/icon-minedu.svg" width={150} height={150} alt="Icono Ministerio de Educación" />

            <h2 className="object-fill mt-6 text-lg font-semibold">
              Información de acceso
            </h2>
            <p className="text-gray-400 text-sm font-extralight">
              Elige la prueba que te corresponde
            </p>

            <div className="mt-7">
              <div className="w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] ">
                <Image src="/libro.svg" width={50} height={50} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </div>
              <div className="w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] ">
                <Image src="/libro.svg" width={50} height={50} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </div>

              <div className="w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] ">
                <Image src="/libro.svg" width={50} height={50} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
          <img src="/main-eae.png" className="object-fill w-full   h-full" alt="Foto eae" />
        </div>
      </div>

    </>
  );
}
