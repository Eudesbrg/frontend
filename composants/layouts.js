import Link from 'next/link'
import Head from 'next/head'


export default function Layouts ({children}) {
    return (
        <div className="bg-green-200">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js"/>
            </Head>
            <nav className="bg-transparent shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between md:text-center">
                            
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>

                            
                            <div className="text-xl font-semibold text-gray-700">
                                <Link href="/">
                                    <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Service +</a>
                                </Link>
                            </div>

                            
                            <div className="md:hidden">
                                <button type="button" class="flex items-center focus:outline-none">
                                    <div className="p-1 overflow-hidden border-2 border-gray-400 rounded-lg">Sign In</div>
                                </button>
                            </div>
                        </div>


                        <div className="flex-1 md:flex md:items-center md:justify-between hidden">
                            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                <Link href="/">
                                    <a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Services urgentes</a>
                                </Link>
                                <Link href="/">
                                    <a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">A propos</a>
                                </Link>
                                <Link href="/">
                                    <a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Contact</a>
                                </Link>
                                <Link href="/">
                                    <a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Partenaires</a>
                                </Link>
                            </div>

                            <div className="flex items-center mt-4 md:mt-0">
                            <button className="flex mx-4 lg:mx-4 sm:mx-0 text-gray-600 space-x-0.5 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span className="text-lg ">{'Fr'}</span> 
                            </button>

                            <button type="button" className="hidden lg:flex items-center focus:outline-none">
                                <div className="p-1 overflow-hidden rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-green-600 border-green-600 hover:text-white hover:bg-green-600 active:bg-green-700 focus:ring-green-300">Connexion</div>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-transparent dark:bg-gray-800">
                <div className="px-6 py-8 mx-auto">
                    <div className="text-center">
                        <Link href="/">
                            <a className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Service +</a>
                        </Link>

                        <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div class="flex flex-col sm:items-center sm:justify-center mt-6">
                            <Link href="/">
                                <a class="sm:mx-2 px-5 w-full sm:order-2 sm:w-auto py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">Get started</a>
                            </Link>
                        </div>
                    </div>

                    <hr class="my-10 dark:border-gray-500" />

                    <div class="flex flex-col sm:flex-row items-center sm:justify-between">
                        <p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

                        <div class="flex mt-3 -mx-2 sm:mt-0">
                            <a href="#" class="mx-2 text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                            <a href="#" class="mx-2 text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                            <a href="#" class="mx-2 text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    )
}