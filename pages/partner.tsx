import MUForm, { EmailField, Field, LargeField } from "../components/muform";
import MUPage from "../components/page";
import { Blurb, PageTitle, BlueWideDiv } from "../components/util";

export default function Partner() {
    return (
        <MUPage>
            <BlueWideDiv><PageTitle className='text-white'>Work with Us</PageTitle></BlueWideDiv>

            <MUForm apps_script_url="" className='py-10'>
                <Field name="name">Company/Name</Field>
                <EmailField />
                <LargeField label='content'>Body</LargeField>
            </MUForm>
        </MUPage>
    )
}