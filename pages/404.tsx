import MUPage from "../components/page";
import { InternalLink } from "../components/util";

export default function ErrorPage404() {
    return (
        <MUPage>
            <div className="flex items-center justify-center min-h-screen">
                <div className='text-center'>
                    <h1 className='lg:text-[10rem] text-[6rem]'>404</h1>
                    <h2 className='lg:text-[6rem] text-[4rem] mx-16 mb-8'>This page does not exist. We may have moved it.</h2>
                    <InternalLink href='/' className='p-3 bg-blue-600 text-white text-xl rounded-xl' type='submit'>Back to Home</InternalLink>
                </div>
            </div>
        </MUPage>
    )
}