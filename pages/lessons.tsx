import MUPage from "../components/page";
import { Bin, Bisection, Bisect, PageTitle } from "../components/util";
import SheetMusic from '../assets/sheet_music.jpg';

/**
 * 
 * @returns the lessons page
 */
export default function Lessons() {
    return (
        <MUPage>
            <PageTitle>About Our Lessons</PageTitle>
            <Bin>
                <h2 className='text-center text-2xl'>A curriculum shaped for your child's creative mind</h2>

                <div className='flex justify-center my-10'>
                    <img className='rounded-2xl w-4/5' src={SheetMusic.src} />
                </div>
            </Bin>
        </MUPage>
    )
}