import MUPage from "../components/page";
import { Bin, Bisection, Bisect, PageTitle, Accordian, HR } from "../components/util";
import SheetMusic from '../assets/sheet_music.jpg';

/**
 * 
 * @returns the lessons page
 */
export default function Lessons() {
    const vals = [
        ["Who can apply?", "Any child/youth under the age of 19 residing in Edmonton are eligible to become a Music Unbounded student. Our lessons are meant to be an introductory course for anyone wanting to discover a new passion!"],
        ["Where can I take lessons?", "Currently, both in-person and online lessons are only available for those residing in the Edmonton area."],
        ["What are the costs of these lessons?", "Nothing! Lessons held by Music Unbounded are free of cost as they are held by student volunteers. Because all of our teachers are volunteers, you can be sure they will be enthusiastic in helping each student cultivate their musical skill to the best of their ability!"],
        ["How long do lessons continue for?", "Lessons at Music Unbounded continue for 5 months, after which the student graduates and will receive a certificate of completion."],
        ["Is there a specific lesson plan that Music Unbounded teachers follow?", "Yes! Each teacher follows the Music Unbounded curriculum as lessons progress. The Music Unbounded curriculum is designed to help each child/youth efficiently learn the basics of their instruments while also allowing for lots of room to be creative and learn what each student wants to learn."],
        ["Sounds good! When can I start?", "Music Unbounded utilizes an ongoing registration system, which means that we will match you up with a teacher as soon as possible! Unfortunately, some instruments do fill up quite fast. If you sign up for an instrument that currently possesses no available spaces you will be waitlisted and given a spot as soon as one is vacant. Please note that as some instruments are in high demand, if you are contacted by a teacher you will have up to 3 business days to respond until you are taken off the waitlist."]
    ];

    return (
        <MUPage>
            <PageTitle>About Our Lessons</PageTitle>
            <Bin className='my-10'>
                <h2 className='text-center text-2xl'>A curriculum shaped for your child's creative mind</h2>

                <div className='flex justify-center my-10'>
                    <img className='rounded-2xl w-4/5' src={SheetMusic.src} />
                </div>
            </Bin>
            <HR />
            <Bin className='my-24'>
                {vals.map(
                    (element, i)=>{
                        return <Accordian key={i} title={element[0]}>{element[1]}</Accordian>
                })}
                <button className="px-4 py-3 bg-blue-300 text-white text-lg my-8  rounded-md">Register</button>
            </Bin>
        </MUPage>
    )
}