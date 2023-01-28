import Head from 'next/head'
import Image from 'next/image'
import MUHeader from '../components/header'
import Background from '../assets/bg.jpg'
import MUPage from '../components/page'
import { FlexDivider, MediaFlexDivider } from '../components/util'
import { Quadrant } from '../components/util'

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
        <div className='text-white bg-[#1e40af]'>
            <h1 className='text-center p-10 font-lato text-4xl lg:text-6xl'>Join our ever-growing community of volunteers, <br /> young students, and teachers.</h1>
            <div className='flex flex-wrap'>
                <Quadrant bg="bg-[#3399ff]" title='Volunteer'>
                    <h3>Help us fundraise and support our events</h3>
                    <HomeButton bg="bg-[#1e40af]" label='Apply' dest='/volunteer' />
                </Quadrant>
                <MediaFlexDivider />
                <Quadrant title='Teach'>
                    <h3>Spread your love for music</h3>
                    <HomeButton bg="bg-[#3399ff]" label='Apply' dest='/teach' />
                </Quadrant>
                <FlexDivider />
                <Quadrant title='Register'>
                    <h3>Start your child's music journey</h3>
                    <HomeButton bg="bg-[#3399ff]" label='Register' dest='/register' />
                </Quadrant>
                <MediaFlexDivider />
                <Quadrant bg='bg-[#3399ff]' title='Donate'>
                    <h3>Help us run Music Unbounded</h3>
                    <HomeButton bg="bg-[#1e40af]" label='Learn More' dest='/donate' />
                </Quadrant>
            </div>
        </div>
    </MUPage>
    )
}