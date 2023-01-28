import React from "react";
import MUHeader from "../components/header";
import MUPage from "../components/page";
import { Quadrant, MediaFlexDivider, FlexDivider, Blurb, PageTitle } from "../components/util";

/**
 * 
 * @returns about page
 */
export default function About() {
    const blurb_type: string = "text-xl mx-3 pb-5"

    const InnerBlurb = (props: { children: React.ReactNode }) => { return (<Blurb className={blurb_type}>{props.children}</Blurb>) };

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
        </MUPage>
    )
}