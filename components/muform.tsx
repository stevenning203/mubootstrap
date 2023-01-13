import React from "react";
import { TriggerConfig } from "react-hook-form";

/**
 * Redirect the user to the thank you page
 */
function RedirectToThankYou(): void {
    window.location.href = "/thank-you";
}

/**
 * 
 * 
 * @param e event
 * @param url url of the webapp url script
 * @param form the html form
 */
function SubmitMUForm(e: React.FormEvent<HTMLFormElement>, url: string, form: HTMLFormElement): void {
    e.preventDefault();
    fetch(url, { method: "POST", body: new FormData(form) })
        .then(response => RedirectToThankYou()).catch();
}

/**
 * 
 * @param props children...
 */
export default function MUForm(props: { children?: React.ReactNode, apps_script_url: string }) {
    return (
        <div>
            <form onSubmit={e => SubmitMUForm(e, props.apps_script_url, this)}>
                {props.children}
            </form>
        </div>
    )
}

/**
 * 
 * @param props children->label, name->content_label
 * @returns field for an mu form
 */
export function Field(props: { children: string, name: string, required?: boolean }) {
    return (
        <div>
            <label htmlFor={props.name}>{props.children}</label>
            {props.required ? <input id={props.name} name={props.name} required /> : <input id={props.name} name={props.name} />}
        </div>
    )
}