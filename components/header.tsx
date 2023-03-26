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
                <link rel="shortcut icon" href="/images/favicon.ico?" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png?" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png?"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png?"/>
            </Head>
            <MUNavbar />
        </div>
    )
}