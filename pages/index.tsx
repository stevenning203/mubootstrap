import Head from 'next/head'
import Image from 'next/image'
import MUHeader from '../components/header'
import Background from '../assets/bg.jpg'
import MUPage from '../components/page'
import { FlexDivider, MediaFlexDivider, PageTitle } from '../components/util'
import { Quadrant } from '../components/util'
import Person from '../assets/person.svg'
import Accordian from '../components/accordian'

function HomeButton(props: { label: string, dest: string, bg?: string }) {
    return (
        <form action={props.dest}>
            <button className={props.bg + ' text-white p-3 mt-10 mb-24 rounded-md'
        + ' transition ease-in-out delay-150 hover:scale-110 duration-300'}>
                {props.label}
            </button>
        </form>

    )
}

function HomeCard(props: { children: React.ReactNode, title: string }) {
    return (
        <div className='text-center w-[16rem]'>
            <div className='bg-blue-600 rounded-t-lg py-12'>
                <h3 className='text-3xl'>{props.title}</h3>
            </div>
            <div className='text-lg text-black bg-white w-full rounded-b-lg px-6 py-24'>{props.children}</div>
        </div>
    )
}

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
                    <h1 className='w-full text-white font-lighter text-left text-4xl lg:text-7xl md:text-5xl font-lato tracking-[.02em] leading-tight  pb-[30px]'>Making Music Possible, <br /> for Every Child</h1>
                    <form action='/register'>
                        <button className='from-blue-800 to-blue-600 bg-gradient-to-r text-white tracking-[.1em] px-4 py-3 font-noto text-xl rounded-lg transition-all duration-500 shadow-lg shadow-white'>Register</button>
                    </form>
                </div>
            </div>
            <div className='text-white bg-blue-800 justify-center min-h-screen pb-5'>
                <h1 className='font-bold text-3xl lg:text-5xl text-center p-5 break-all'>Join our ever-growing community of volunteers, young students, and teachers.</h1>
                <div className='flex flex-wrap mx-16 p-5 mb-5 rounded-lg gap-10 justify-center'>
                    <HomeCard title="Volunteer">Help us run our events</HomeCard>
                    <HomeCard title="Register">Become a student</HomeCard>
                    <HomeCard title="Teach">Spread your love for music</HomeCard>
                    <HomeCard title="Donate">Help Music Unbounded achieve our dreams</HomeCard>
                </div>
            </div>
            <div className="min-h-screen lg:bg-[url('../assets/person.svg')] bg-right bg-no-repeat mb-32">
                <PageTitle>Instruments We Teach</PageTitle>
                <div className='w-[60%] mx-auto flex-col flex gap-2'>
                    <Accordian title="Piano">
                        A popular and versatile instrument, the piano is one of the best choices for beginners because of its simplicity. Many people know famous composers and songs for the piano.
                    </Accordian>
                    <Accordian title="Flute">Flute</Accordian>
                    <Accordian title="Violin">Hello</Accordian>
                    <Accordian title="Trombone">Hello</Accordian>
                    <Accordian title="Viola">Hello</Accordian>
                    <Accordian title="Guitar">Hello</Accordian>
                    <Accordian title="Cello">Hello</Accordian>
                    <Accordian title="Tuba">Hello</Accordian>
                    <Accordian title="Trumpet">Hello</Accordian>
                    <Accordian title="Clarinet">Hello</Accordian>
                </div>
            </div>
        </MUPage >
    )
}