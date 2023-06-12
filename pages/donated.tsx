import MUPage from "../components/page";
import { Bin, BlueWideDiv, Blurb, PageTitle } from "../components/util";


export default function Donated() {
    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className='text-white'>Thank you for your Donation!</PageTitle>
            </BlueWideDiv>
            <div className='my-24'>
                <Blurb className='text-3xl text-center mb-10 mx-6'>Thank you so much for your generous donation!</Blurb>
            </div>
            <Bin>
                <div className='my-24'>
                    <Blurb className='text-3xl text-center mb-10 mx-6'>
                        At Music Unbounded, we really want to let anyone pursue their love for music. Your donation will
                        go towards supporting recitals organized by us and also official charitable hosted events! In the future, we might be able to provide instruments
                        and supporting tools to students because of your generosity.
                    </Blurb>
                </div>
            </Bin>
            <div className='my-24'>
                <Blurb className='text-5xl text-center mb-10 mx-6'>Thank You! - MU</Blurb>
            </div>



        </MUPage>
    )
}