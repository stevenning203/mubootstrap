import { IconContext } from "react-icons";
import { AiFillMail } from "react-icons/ai";
import MUPage from "../components/page";

export default function ThankYou() {
    return (
        <MUPage>
            <div className='min-h-screen my-10'>
                <div className='flex justify-center'><IconContext.Provider value={{ color: "rgb(37, 99, 235)" }}><AiFillMail size={"10rem"} /></IconContext.Provider></div>
                <h1 className='text-center text-5xl lg:text-7xl my-8'>Thank <span className='text-blue-600'>You,</span></h1>
                <h2 className='text-center text-2xl lg:text-4xl my-6'>Your form has been sucessfully submitted.</h2>
                <h3 className='text-center text-xl lg:text-2xl text-slate-500'>We will get back to your email within a week!</h3>
                <form className='flex justify-center my-8' action='/'>
                    <button className='text-lg px-4 py-3 bg-stone-600 text-white rounded-lg' type="submit">Go Home</button>
                </form>

            </div>

        </MUPage>
    )
}