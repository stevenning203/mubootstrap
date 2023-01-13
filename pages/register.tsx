import MUHeader from "../components/header";
import MUForm from "../components/muform";
import MUPage from "../components/page";

const webapp_url: string = "";

/**
 * 
 * @returns register page
 */
export default function Register() {
    return (
        <MUPage>
            <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
                
            </div>
            <MUForm apps_script_url={webapp_url}>

            </MUForm>
        </MUPage>
    )
}