import MUHeader from "../components/header";
import MUNavbar from "../components/navbar";
import MUPage from "../components/page";
import { BlueWideDiv, Blurb, BlurbTitle, PageTitle } from "../components/util";
import MUForm from "../components/muform";
import { EmailField, Field, Dropdown, PhoneField } from "../components/muform";

/**
 * 
 * @returns the volunteer page
 */
export default function Volunteer() {
    const webapp_url: string = "";

    const type_options: string[] = [
        "Fundraising",
        "Material Development (Helping us imporve our curricula)",
        "Both",
    ];

    const experience_options: string[] = [
        "No experience at all",
        "Some experience"
    ];

    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className="text-white">Volunteer</PageTitle>
            </BlueWideDiv>

            <Blurb className='text-black mt-5 ml-[20%]'>
                <BlurbTitle>Help us run Music Unbounded!</BlurbTitle>
                <ul className='list-disc text-lg'>
                    <li>Make a difference in your community</li>
                    <li>Get volunteer hours</li>
                    <li>Personalized letter of recommendation</li>
                </ul>
                <BlurbTitle>At Music Unbounded, you will get the opportunity to:</BlurbTitle>
                <ul className='list-disc text-lg'>
                    <li>Help us fundraise and organize our events</li>
                    <li>Develop teaching material for new students</li>
                </ul>
                <br />
                <span className='text-lg'>Volunteers go through a short screening process.</span>
            </Blurb>

            <PageTitle>Fill out this form</PageTitle>

            <MUForm className='mb-5 mt-10' apps_script_url={webapp_url}>
                <Field required={true} name="Student Full Name">Name</Field>
                <EmailField />
                <Dropdown label="Age" options={["Yes, 16 or older", "No, I'm younger than 16"]}>
                    Are you 16 years of age or older?
                </Dropdown>
                <PhoneField />
                <Dropdown label="Type" options={type_options}>
                    Type
                </Dropdown>
            </MUForm>
        </MUPage>
    )
}