import MUHeader from "../components/header";
import MUPage from "../components/page";
import MUForm, { Dropdown, EmailField, Field, LargeField, PhoneField } from "../components/muform";
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
                <Field required={true} name="Subject">Subject</Field>
                <LargeField label='Content'>Body</LargeField>
            </MUForm>
        </MUPage>
    )
}