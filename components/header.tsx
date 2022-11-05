import Head from "next/dist/shared/lib/head";
import MUNavbar from "./navbar";

export default function MUHeader() {
    return (
        <>
            <Head>
                <title>Music Unbounded</title>
            </Head>
            <MUNavbar />
        </>
    )
}