import { useState } from "react";
import MUHeader from "../components/header";
import MUPage from "../components/page";
import { Bin, PageTitle } from "../components/util";

/**
 * 
 * @returns help page
 */
export default function FAQ() {
    const [searchContent, setSearchContent] = useState("");

    return (
        <MUPage>
            <PageTitle>Frequently Asked Questions </PageTitle>
            <Bin>
                <div className='flex justify-center mb-10'>
                    <input onChange={(e) => { setSearchContent(e.target.value); }} placeholder="Filter" className='p-3 border-gray-300 border-2 rounded-md' />
                </div>
                <div>

                </div>
            </Bin>
        </MUPage>
    )
}