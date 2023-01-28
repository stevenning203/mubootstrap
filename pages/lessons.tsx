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
            <PageTitle>Lessons</PageTitle>
            <Bin>
                <Bisection left={<Bisect className='justify-center items-center flex p-3 text-lg'>
                    <div>
                        <h2 className='text-2xl font-bold'>About our lessons</h2>
                        A curriculum shaped for your child's creative mind</div>

                </Bisect>} right={<Bisect className='justify-center items-center flex'><img className='rounded-2xl' src={SheetMusic.src} /></Bisect>} />
            </Bin>
        </MUPage>
    )
}