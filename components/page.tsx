import React, { ReactNode } from "react";
import MUHeader from "./header";
import Footer from "./footer";

/**
 * Provides the header and footer for an page on Music Unbounded
 * 
 * @param props children
 * @returns 
 */
export default function MUPage(props: { children: ReactNode }) {
    return (
        <div>
            <MUHeader />
            {props.children}
            <Footer />
        </div>
    )
}