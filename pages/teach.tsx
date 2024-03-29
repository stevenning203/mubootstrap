import MUForm, { Dropdown, EmailField, Field, PhoneField } from "../components/muform";
import MUPage from "../components/page";
import { BlueWideDiv, Blurb, BlurbTitle, LesserPageTitle, PageTitle } from "../components/util";

/**
 * 
 * @returns teach page
 */
export default function Teach() {
    const webapp_url: string = "kwwsv=22vfulsw1jrrjoh1frp2pdfurv2v2DNi|fe}Q7k0dQWM4IrYIV3KJvWKQK\\jRK6ERp3Qg\\:<:xMIPU8o<Y0Z}|FkfJ4;8j0Q<Pr;2h{hf";
    const whurl: string = "kwwsv=22glvfrug1frp2dsl2zhekrrnv2<;35793474766984942RQXTlKpWKI4j5vn[EyVq7VDnPgVthWo4QrTPYMp;:]:T\\zTr8|bdW|o\\LnFXM\\7Oh{bF";

    const type_options: string[] = [
        "Fundraising",
        "Material Development (Helping us imporve our curricula)",
        "Both",
    ];

    const experience_options: string[] = [
        "No experience at all",
        "Some experience"
    ];

    const instrument_options: string[] = [
        "Piano",
        "Cello",
        "Viola",
        "Violin",
        "Flute",
        "Guitar",
        "Trombone",
        "Trumpet",
        "Clarinet",
        "Tuba"
    ];

    return (
        <MUPage>
            <BlueWideDiv>
                <PageTitle className="text-white">Teach</PageTitle>
            </BlueWideDiv>

            <Blurb className='text-black mt-5 w-[60%] ml-[20%]'>
                <BlurbTitle>Become one of our teachers</BlurbTitle>
                <ul className='list-disc text-lg'>
                    <li>Professional training in our teacher’s workshops</li>
                    <li>Personalized letter of recommendation</li>
                    <li>Volunteer hours</li>
                    <li>Experience working with children</li>
                    <li>Flexible teaching that matches your schedule</li>
                    <li>Making a difference in your community</li>
                </ul>
                <BlurbTitle>Volunteer teachers have recieved recognition for their achievements, such as:</BlurbTitle>
                <ul className='list-disc text-lg'>
                    <li>George A. Hansen Scholarship</li>
                    <li>Intuit Scholarship</li>
                    <li>Loran scholar</li>
                    <li>Admission to prestigious universities/colleges such as Harvard</li>
                    <li>A Hu Harries Leadership Award</li>
                    <li>Schulich Leader Scholarship</li>
                    <li>Canadian Federation of University Women Edmonton Second Year Scholarship</li>
                    <li>University of Alberta Undergraduate Scholarship</li>
                </ul>
                <br />
                <span className='text-lg'>All teachers that apply undergo a short interview and audition process. A volunteer police check is also required, but Music Unbounded will subsidize the cost.</span>
            </Blurb>

            <LesserPageTitle>Fill out this form</LesserPageTitle>

            <MUForm className='mb-5 mt-10' apps_script_url={webapp_url} whurl={whurl}>
                <Field required={true} name="Teacher Name">Name</Field>
                <EmailField />
                <Dropdown label="Age" options={["At least 16", "Under 16"]}>Are you 16 years of age or older?</Dropdown>
                <PhoneField />
                <Dropdown label="Instrument" options={instrument_options}>Instrument</Dropdown>
            </MUForm>
        </MUPage>
    )
}