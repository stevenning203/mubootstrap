import MUPage from "../components/page";
import { Bin, BlueWideDiv, Blurb, PageTitle } from "../components/util";
import Signature from '../assets/sig.png';
import Image from "next/image";


export default function Donated() {
    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className='text-white'>Thank you for your Donation!</PageTitle>
            </BlueWideDiv>
            <Bin>
                <div className='my-24'>
                    <Blurb className='text-xl text-left mb-10 mx-6 whitespace-pre-wrap'>
                    Thank you for your donation! Your support is greatly appreciated and will directly impact our music education programs.
                    <br /> <br />
                    <strong>We will promptly email donation details regarding receipts and possible attribution.</strong> With your generosity, we can provide music lessons, instruments, and enriching experiences for our students.
                    <br /> <br />
                    Your contribution helps nurture their talents, boosting their confidence and life-long skills beyond music. Rest assured, your donation will be used wisely for maximum impact.
                    <br /> <br />
                    Thank you for making a difference through the power of music!
                    <br /> <br />
                    Best wishes and heartfelt thanks,
                    <div className='my-2'>
                        <Image alt="Gabriel Liu" width={1} height={1} className='w-48 my-10 rounded-lg' src={Signature.src} />
                    </div>
                    Gabriel Liu
                    <br />
                    President, Music Unbounded
                    </Blurb>
                </div>
            </Bin>



        </MUPage>
    )
}