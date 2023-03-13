import Head from 'next/head'
import Image from 'next/image'
import MUHeader from '../components/header'
import Background from '../assets/bg.jpg'
import MUPage from '../components/page'
import { FlexDivider, MediaFlexDivider, PageTitle } from '../components/util'
import { Quadrant, Bin } from '../components/util'
import Person from '../assets/person.svg'
import Accordian from '../components/accordian'
import Piano from '../assets/piano2.jpg'
import Flute from '../assets/flute.jpeg'
import Violin from '../assets/violin.jpg'
import Trombone from '../assets/trombone.jpg'
import Viola from '../assets/viola.jpg'
import Guitar from '../assets/guitar.jpg'
import Cello from '../assets/cello.jpg'
import Tuba from '../assets/tuba.jpg'
import Trumpet from '../assets/trumpet.jpg'
import Clarinet from '../assets/clarinet.jpg'
import Community from '../assets/community.png'

function HomeCard(props: { children: React.ReactNode, title: string }) {
    return (
        <div className='text-center w-[16rem]'>
            <div className='bg-blue-600 rounded-t-lg py-3'>
                <h3 className='text-3xl'>{props.title}</h3>
            </div>
            <div className='text-lg text-black bg-white w-full rounded-b-lg'>{props.children}</div>
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
            <div className={`text-white bg-blue-800 flex items-center justify-center min-h-screen pb-5 bg-[url('../assets/community.png')] bg-center`}>
                <h1 className='font-bold text-5xl lg:text-7xl text-center p-5 mx-10 text-black'>Join our ever-growing community of volunteers, young students, and teachers.</h1>
            </div>
            <div className="min-h-screen lg:bg-[url('../assets/person.svg')] bg-right bg-no-repeat mb-32">
                <PageTitle>Instruments We Teach</PageTitle>
                <div className='w-[60%] mx-auto flex-col flex gap-2'>
                    <Accordian image={Piano} title="Piano">
                        A popular and versatile instrument, the piano is one of the best choices for beginners because of its simplicity. Many people know famous composers and songs for the piano.
                    </Accordian>
                    <Accordian image={Flute} title="Flute">
                        The flute is a lightweight instrument capable of producing a clear and bright sound with a distinctive warmth, refinement, and subtlety to its tone.
                    </Accordian>
                    <Accordian image={Violin} title="Violin">
                        The violin is a bowed stringed instrument which gained popularity during the 16th century. The violin is known for its unique vocal quality and is often the focus in many symphony orchestras.
                    </Accordian>
                    <Accordian image={Trombone} title="Trombone">
                        A brass instrument that requires excellent command of embouchure and breathing. It has a deep tone that makes it desirable in in symphony orchestras, jazz bands, and more.
                    </Accordian>
                    <Accordian image={Viola} title="Viola">
                        While similar in appearance to the violin, the viola acts as the sweeter inner voice of any orchestra.
                    </Accordian>
                    <Accordian image={Guitar} title="Guitar">
                        The guitar is a portable instrument perfect for solos and performances. It is fashionable and great to learn and play.
                    </Accordian>
                    <Accordian image={Cello} title="Cello">
                        The cello is a low-pitched string instrument popular for its rich and warm tones. Its contrast to the violin and viola make it an excellent companion to its higher pitched siblings.
                    </Accordian>
                    <Accordian image={Tuba} title="Tuba">
                        The tuba is like the trumpet's older sibling. It produces a strong and richly deep tone, providing a backbone to many marching bands.
                    </Accordian>
                    <Accordian image={Trumpet} title="Trumpet">
                        A very famous marching band instrument, the trumpet's simple appearance is appealing, but also deceiving. Be prepared to learn a lot about embouchure before you can master this instrument.
                    </Accordian>
                    <Accordian image={Clarinet} title="Clarinet">
                        The clarinet is a sleek and beautiful instrument that is the core of many concert bands. Its interface lends it great opportunity for skill expression.
                    </Accordian>
                </div>
            </div>
        </MUPage >
    )
}