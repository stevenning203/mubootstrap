import React from "react";
import MUHeader from "../components/header";
import MUPage from "../components/page";
import { Quadrant, MediaFlexDivider, FlexDivider, Blurb, PageTitle, Bin } from "../components/util";

/**
 * 
 * @returns about page
 */
export default function About() {
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
            <Bin className='my-10'>
                <h1 className='text-center text-4xl my-6'>Impact</h1>
                <ul className='list-disc text-lg'>
                    <li>Hello</li>
                </ul>
            </Bin>
        </MUPage>
    )
}