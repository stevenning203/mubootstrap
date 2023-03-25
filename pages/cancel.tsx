import MUPage from "../components/page";
import { Bin, PageTitle } from "../components/util";

export default function Cancel() {
    return (
        <MUPage>
            
            <Bin className='min-h-screen'>
            <PageTitle>Donation Cancelled</PageTitle>
                <div className=''>
                    <h2 className='text-center text-2xl text-gray-500'>No charge was made</h2>
                    <div className='flex justify-center my-12'>
                        <form action='/'>
                            <button className='bg-blue-600 text-white px-3 py-3 rounded-lg' type='submit'>Go Home</button>
                        </form>
                    </div>
                </div>
            </Bin>
        </MUPage>
    )
}