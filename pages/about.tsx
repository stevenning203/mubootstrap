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
            <PageTitle>Lessons</PageTitle>
        </MUPage>
    )
}