import { useState } from "react";
import MUHeader from "../components/header";
import MUPage from "../components/page";
import { Bin, PageTitle } from "../components/util";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

function Accordian(props: {children?: React.ReactNode, title: string}) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className='p-2 mb-2'>
            <div onClick={()=>setOpen(!open)} className='hover:bg-slate-100 transition-all duration-500 rounded-sm cursor-pointer text-lg font-bold p-3 flex'>
                {props.title}
                <div className='ml-auto'>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            {
                open && <div className='p-3'>
                {props.children}
                </div>
            }
            <hr />
        </div>
    )
}

/**
 * 
 * @returns help page
 */
export default function FAQ() {
    const [searchContent, setSearchContent] = useState("");
    const questionsFAQ = [
        ["How much do lessons cost?", "Our lessons are fully free! You do not need to pay for the lessons, however, you may have to rent or buy the instrument. We are currently in the process of obtaining funding in order to subsidize the cost of rental."],
        ["What are the requirements to register?", "We have no explicit requirements other than that the student must be 18 or younger. However, our lessons are tailored towards beginners."],
        ["I got waitlisted and have waited for a while, but I haven't heard back. How long will I have to wait?", "A space will be available when a student completes their 5 month term or a new piano teacher comes. There is no guarantee that piano students will be assigned a teacher because of the demand."],
        ["Can I choose which teacher we get?", "You may request a specific teacher, but we cannot guarantee that the teacher requested will be the one that is assigned."],
        ["What will my child learn through M.U.?", "Our curriculum introduces the student to music and the instrument. By the end of their term, they will have a solid grasp on the fundamentals of music and their instrument and can transition to private lessons or self-learning."],
        ["I don't live in Edmonton. Can I still register?", "Unfortunately, Music Unbounded is only operating for those living in Edmonton."],
        ["Which instrument should I choose?", "Do lots of research. You should pick the instrument that your child has the most interest in."],
        ["Why are some insturments unavailable?", "The teachers that teach those instruments have become unavailable, so we cannot offer lessons for those spots."]
    ]

    return (
        <MUPage>
            <Bin><div className='text-center text-5xl my-6 font-black text-blue-600'>?</div></Bin>
            <PageTitle>Frequently Asked Questions </PageTitle>
            <Bin className='mb-24'>
                <div className='flex justify-center mb-10'>
                    <input onChange={(e) => { setSearchContent(e.target.value); }} placeholder="Filter" className='p-3 border-gray-300 border-2 rounded-md' />
                </div>
                <div>
                    {
                        questionsFAQ.filter((right)=>{return right[0].toLowerCase().includes(searchContent.toLowerCase()) || right[1].toLowerCase().includes(searchContent.toLowerCase()) || searchContent == ""}).map(
                            (element, i)=>{
                                return <Accordian key={i} title={element[0]}>{element[1]}</Accordian>
                            }
                        )
                    }
                </div>
            </Bin>
        </MUPage>
    )
}