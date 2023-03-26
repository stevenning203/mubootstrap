import { ReactNode } from "react";
import Footer from "./footer";
import MUHeader from "./header";

/**
 * Provides the header and footer for an page on Music Unbounded
 * 
 * @param props children
 * @returns 
 */
export default function MUPage(props: { children?: ReactNode }) {
    return (
        <div>
            <MUHeader />
            {props.children}
            <Footer />
        </div>
    )
}