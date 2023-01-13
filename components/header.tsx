import Head from "next/dist/shared/lib/head";
import MUNavbar from "./navbar";

/**
 * 
 * @returns The header for the website that includes both the title of the website and the navbar
 */
export default function MUHeader() {
    return (
        <div>
            <Head>
                <title>Music Unbounded</title>
            </Head>
            <MUNavbar />
        </div>
    )
}