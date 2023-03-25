import React from "react";
import { nav_options } from "../page_data/nav_options";
import { Bin, ToPublicUTF8 } from "./util";
import { useState } from "react";

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
function SubmitMUForm(e: React.FormEvent<HTMLFormElement>, url: string, form: any): void {
    e.preventDefault();

    fetch(url, { method: "POST", body: new FormData(form) })
        .then(response => RedirectToThankYou()).catch();
}

/**
 * 
 * @param props children...
 */
export default function MUForm(props: { children?: React.ReactNode, apps_script_url: string, className?: string }) {
    const [submit_disabled, SetSubmitDisabled] = useState(false);
    const [submit_button_name, SetSubmitButtonName] = useState("Submit");

    function AttemptSubmission(e: React.FormEvent<HTMLFormElement>, url: string): void {
        e.preventDefault();
        if (submit_disabled) {
            return;
        }
        SubmitMUForm(e, url, document.forms["main_form"]);
    }

    return (
        
        <Bin>
            <div className={props.className}>
                <form name="main_form" method='post' onSubmit={e => AttemptSubmission(e, ToPublicUTF8(props.apps_script_url))}>
                    {props.children}
                    <input className='bg-blue-600 text-white p-3 rounded-md' type="submit" />
                </form>
            </div>
        </Bin>
    )
}

/**
 * 
 * @param props children->label, name->content_label
 * @returns field for an mu form
 */
export function Field(props: { children: string, name: string, required?: boolean, type?: string }) {
    const input_class: string = "w-full p-3 border-b-2";

    return (
        <div className='mb-5 text-lg'>
            <div className='pb-2'><label htmlFor={props.name}>{props.children}</label></div>
            <div>{props.required ? <input placeholder={props.children} className={"rounded-md " + input_class} type={props.type} id={props.name} name={props.name} required /> : <input placeholder={props.children} className={input_class + " rounded-md"} type={props.type} id={props.name} name={props.name} />}</div>
        </div>
    )
}

export function LargeField(props: { children: string, label: string }) {
    return (
        <div className='text-lg'>
            <label className='mb-2' htmlFor={props.children}>{props.children}</label>
            <textarea name={props.label} required rows={5} placeholder="Write your thoughts here..." id={props.children} className='p-3 text-lg w-full border-b-2 mb-5' />
        </div>
    )
}

export function Dropdown(props: { children: string, label: string, options: string[] }) {
    return (
        <div className='text-lg'>
            <div className='pb-2'><label htmlFor={props.label}>{props.children}</label></div>
            <select defaultValue={''} id={props.label} name={props.label} className='w-full p-3 mb-5 border-b-2' required>
                <option value='' disabled>Select an option</option>
                {props.options.map(s => {
                    return (
                        <option key={s} value={s}>{s}</option>
                    )
                })}
            </select>
        </div>
    )
}

/**
 * 
 * @returns Phone number field
 */
export function PhoneField() {
    return (
        <Field name="Phone Number" type='tel' required={false}>Phone Number (Optional)</Field>
    )
}

/**
 * Email field
 */
export function EmailField() {
    return (
        <Field name='Email' type='email' required={true}>Email</Field>
    )
}