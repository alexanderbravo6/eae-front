import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function HomaPage() {
  return (
    <>
      <div className="flex items-center w-full h-full min-h-[640px]">
        <div className="lg:w-3/5 w-full    ">
          <div className=" mx-auto  w-[80vw] max-h-96 min-h-96 lg:w-[460px] lg:overflow-auto">
            <Image src="/icon-minedu.svg" width={150} height={150} alt="Icono Ministerio de Educación" />

            <h2 className="object-fill mt-6 text-lg font-semibold">
              Información de acceso
            </h2>
            <p className="text-gray-400 text-sm font-extralight">
              Elige la prueba que te corresponde
            </p>

            <div className="mt-7">

              <Link href="/seguridad/prueba/1" className="hover:bg-[#97e4e4] w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] rounded-md ">
                <Image src="/icon-prueba-comprension.svg" width={40} height={40} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </Link>


              <Link href="/seguridad/prueba/2" className="hover:bg-[#97e4e4] w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] rounded-md ">
                <Image src="/icon-prueba-matematica.svg" width={40} height={40} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </Link>
              <Link href="/seguridad/prueba/3" className="hover:bg-[#97e4e4] w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] rounded-md ">
                <Image src="/icon-prueba-conocimientos.svg" width={40} height={40} alt="libro icon" />
                <div>
                  <p className="font-bold" >
                    Prueba de comprensión lectora
                  </p>
                  <span>
                    Primer ciclo de estudios
                  </span>
                </div>
              </Link>



            </div>
          </div>
          <Footer />
        </div>
        <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
          <img src="/main-eae.png" className="object-fill w-full   h-full" alt="Foto eae" />
        </div>
      </div>

    </>
  );
}
