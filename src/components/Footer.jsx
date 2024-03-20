import React from 'react'

function Footer() {
    return (
        <footer className=" absolute w-full lg:w-3/5 bottom-0  left-0 z-20  p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Minedu - DIFOID
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a target='_blank' href="https://www.minedu.gob.pe/superiorpedagogica/que-es-la-eae/" className="hover:underline me-4 md:me-6">EAE</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Manual del estudiante</a>
                </li>

            </ul>
        </footer>
    )
}

export default Footer