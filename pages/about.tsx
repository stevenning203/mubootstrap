import Image from "next/image";
import trio from '../assets/dalle2.png';
import MUPage from "../components/page";
import { Bin, Blurb, PageTitle } from "../components/util";

function Stat(props: any) {
    return (
        <div key={props.key}>
            <h2 className='text-center lg:text-5xl text-3xl my-3'>{props.title}</h2>
            <div className='text-center'>{props.children}</div>
        </div>
    )
}

/**
 * 
 * @returns about page
 */
export default function About() {
    const stats = [
        [">25", "Peak teachers"],
        [">35", "Peak students"],
        ["~550", "Lessons taken place"],
        ["~17 000", "Minutes of learning"]
    ]
    return (
        <MUPage>
            <div className=''>
            </div>
            <PageTitle>About</PageTitle>
            <div className='w-full to-blue-400 py-10 bg-gradient-to-r gradient from-blue-600 text-white'>
                <div className='w-3/5 ml-[20%] mr-[20%] text-xl'>
                    Music Unbounded is a student-run organization aimed at providing an opportunity for children and youth 6-18 to learn music through free introductory lessons instructed by passionate volunteers.
                </div>
            </div>
            <Bin className='my-24'>
                <h2 className='text-3xl my-3'>Why we started Music Unbounded</h2>
                <Blurb className='text-lg'>
                    Music has many benefits, ranging from brain growth and academic success to being a creative outlet and source of entertainment. Each and every teacher, volunteer, and board member here at Music Unbounded have been positively influenced throughout their life through music. We are all very grateful to have been given this opportunity to learn, however, we recognize that the cost of learning music can be prohibitive for some and we hope to use our passion to make music accessible to everyone.
                </Blurb>
            </Bin>
            <Bin className='flex justify-center'>
                <Image width={10} height={10} alt="About Image" className='lg:w-1/2 w-3/4 rounded-md' src={trio.src} />
            </Bin>
            <Bin className='my-10'>
                <h3 className='text-center text-4xl my-6'>Impact</h3>
                <div className='flex justify-center gap-8 my-24 mx-8 flex-wrap'>
                    {
                        stats.map((arr: string[], i) => {
                            return (
                                <div key={i}>
                                    <Stat title={arr[0]}>
                                        {arr[1]}
                                    </Stat>
                                </div>

                            )
                        })
                    }
                </div>
            </Bin>
        </MUPage>
    )
}