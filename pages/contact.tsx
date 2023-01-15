import MUHeader from "../components/header";
import MUPage from "../components/page";
import MUForm, { Dropdown, EmailField, Field, PhoneField } from "../components/muform";
import { BlueWideDiv, Blurb, PageTitle } from "../components/util";

/**
 * 
 * @returns contact page
 */
export default function Contact() {
    const webapp_url: string = "";

    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className="text-white">Contact</PageTitle>
            </BlueWideDiv>

            <MUForm className='mb-5 mt-10' apps_script_url={webapp_url}>
                <Field required={true} name="Name">Name</Field>
                <EmailField />
                <label className='text-lg' htmlFor='content'>Body</label>
                <textarea required rows={5} placeholder="Write your thoughts here..." id='content' className='p-3 text-lg w-full border-b-2 mb-5' />
            </MUForm>
        </MUPage>
    )
}