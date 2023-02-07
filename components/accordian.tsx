import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";

export default function Accordian(props: { title: string, children: string, className?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={props.className + ' w-full'}>
            <div className={`from-blue-600 to-blue-400 bg-gradient-to-br items-center text-lg flex text-white p-3 cursor-pointer ${open ? "rounded-t-xl" : "rounded-xl"}`} onClick={e => setOpen(!open)}>
                {props.title}
                {open ? <AiOutlineMinus className='text-md ml-auto' /> : <AiOutlinePlus className='float-right ml-auto' />}

            </div>
            {open && <div className='p-3 border rounded-b-lg bg-white text-black'>
                <div className='w-2/3 mx-auto text-center'>{props.children}</div>
            </div>}
        </div>
    )
}