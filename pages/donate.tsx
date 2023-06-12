import MUPage from "../components/page";
import { Bin, BlueWideDiv, Blurb, PageTitle } from "../components/util";


export default function Donate() {
    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className='text-white'>Make a Donation</PageTitle>
            </BlueWideDiv>
            <div className='my-24'>
                <Blurb className='text-3xl text-center mb-10 mx-6'>Help us maintain Music Unbounded with a donation</Blurb>
                <Blurb className='text-xl text-center mx-6'>This donation will help us continue to serve free music lessons</Blurb>
                <Bin className='flex justify-center my-10'>
                    <form>
                        <a href="https://www.paypal.com/donate/?hosted_button_id=DJU4V8PHZTDEQ"><button className='bg-stone-600 text-white px-4 rounded-md py-3 text-lg'>Donate</button></a>
                    </form>
                </Bin>
                <Bin className='text-center'>
                    <Blurb>Music Unbounded will provide tax receipts for donations.</Blurb>
                </Bin>
            </div>



        </MUPage>
    )
}