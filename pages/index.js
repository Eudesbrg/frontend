import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layouts from '../composants/layouts'
import connexionPhoto from '../public/images/connexion.png'

const pageTitle = 'Service +'

export default function Home() {
  return (
    <Layouts>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <div className="container mx-auto grid grid-cols-2 pt-20">
            <div className="space-y-4 self-center">
                <h1 className="text-5xl">Perferens commune scholarum propensior deiectas.</h1>
                <p className="text-base">
                  Dein Syria per speciosam interpatet diffusa planitiem. hanc nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia advecticiis ita adfluere copiis et internis, et Laodicia et Apamia itidemque Seleucia iam inde a primis auspiciis florentissimae
                </p>
                <div className="block">
                  <Link href="/">
                      <a className="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-green-600 border-green-600 hover:text-white hover:bg-green-600 active:bg-green-700 focus:ring-green-300">Commencer à utiliser service +</a>
                  </Link>
                </div>
            </div>
            <div className="">
              <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-blue-300 from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <Image src={connexionPhoto} alt="image"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </Layouts>
  )
}
