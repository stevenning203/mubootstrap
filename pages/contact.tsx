import MUHeader from "../components/header";
import MUPage from "../components/page";
import MUForm, { Dropdown, EmailField, Field, LargeField, PhoneField } from "../components/muform";
import { BlueWideDiv, Blurb, PageTitle } from "../components/util";

/**
 * 
 * @returns contact page
 */
export default function Contact() {
    const webapp_url: string = "kwwsv=22vfulsw1jrrjoh1frp2pdfurv2v2DNi|fe{Mxrd<5;pSXHZ7rpxKMuyxd;{m7V]s{33t6db0IPFHw8hWd9<pGfiq[W4bilb5sln2h{hf";

    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className="text-white">Contact</PageTitle>
            </BlueWideDiv>

            <MUForm className='mb-5 mt-10' apps_script_url={webapp_url}>
                <Field required={true} name="Name">Name</Field>
                <EmailField />
                <Field required={true} name="Subject">Subject</Field>
                <LargeField label='Body'>Body</LargeField>
            </MUForm>
        </MUPage>
    )
}