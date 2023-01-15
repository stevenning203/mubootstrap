import React from "react";
import { TriggerConfig } from "react-hook-form";
import { nav_options } from "../page_data/nav_options";

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
function SubmitMUForm(e: React.FormEvent<HTMLFormElement>, url: string): void {
    e.preventDefault();

    // fetch(url, { method: "POST", body: new FormData(form) })
    //     .then(response => RedirectToThankYou()).catch();
}

/**
 * 
 * @param props children...
 */
export default function MUForm(props: { children?: React.ReactNode, apps_script_url: string, className?: string }) {
    return (
        <div className={'ml-[20%] w-[60%] ' + props.className}>
            <form method='post' onSubmit={e => SubmitMUForm(e, props.apps_script_url)}>
                {props.children}
                <input className='bg-blue-600 text-white p-3 rounded-md' type="submit" />
            </form>
        </div>
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

export function Dropdown(props: { label: string, options: string[] }) {
    return (
        <div className='text-lg'>
            <div className='pb-2'><label htmlFor={props.label}>{props.label}</label></div>
            <select id={props.label} className='w-full p-3 mb-5 border-b-2' required>
                <option value='' disabled selected>Select an option</option>
                {props.options.map(s => {
                    return (
                        <option value={s}>{s}</option>
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