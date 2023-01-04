import Head from 'next/head'
import Image from 'next/image'
import MUHeader from '../components/header'
import Background from '../assets/bg.jpg'
import MUPage from '../components/page'

/**
 * 
 * @returns index page
 */
export default function Home() {
    return (
        <MUPage>
            <div className="bg-[url('../assets/piano.png')] bg-no-repeat bg-cover bg-center flex h-screen">
                <div className='mt-[40%] lg:mt-[12%] md:mt-[25%] sm:mt-[35%]
                ml-[5%] flex-col justify-center items-center'>
                    <h1 className='w-[100%] text-white font-lighter text-left text-4xl lg:text-7xl md:text-5xl font-lato tracking-[.02em] leading-tight  pb-[30px]'>Making Music Possible, <br /> for Every Child</h1>
                    <form action='/register'>
                        <button className='h-10 bg-[#3399ff] hover:bg-blue-800 text-white tracking-[.1em] font-bold p-2.5 px-4 w-40 font-lato .text-xl rounded-lg transition duration-[450ms]'>Register</button>
                    </form>
                </div>
            </div>
        </MUPage>
    )
}