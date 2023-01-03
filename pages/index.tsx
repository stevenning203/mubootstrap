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
            <div className='h-screen bg-blue-800'>
                <h1 className='text-white font-lighter text-center text-5xl'>Making Music Possible, <br /> for Every Child</h1>
            </div>
        </MUPage>
    )
}