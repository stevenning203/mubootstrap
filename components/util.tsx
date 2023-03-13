import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants"
import { StaticImageData } from "next/image"
import React from "react"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

/**
 * A very large title for page tops
 */
export function PageTitle(props: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={(props.className) + " text-center py-16 text-4xl"}>{props.children}</h1>
    )
}

export function BlurbTitle(props: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={(props.className) + " underline pt-3 pb-3 text-2xl"}>{props.children}</h2>
    )
}

/**
 * Obfuscation function to at least stop bots from stealing the public key
 * 
 * @param str
 */
export function ToPublicUTF8(str: string): string {
    let final: string = "";
    for (let i = 0; i < str.length; i++) {
        final.concat(String.fromCharCode(1 + str.charCodeAt(i)));
    }
    return final;
}

export function Accordian(props: {children?: React.ReactNode, title: string}) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className='p-2 mb-2'>
            <div onClick={()=>setOpen(!open)} className='hover:bg-slate-100 transition-all duration-500 rounded-sm cursor-pointer text-lg font-medium p-3 flex'>
                {props.title}
                <div className='ml-auto'>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            {
                open && <div className='p-3'>
                {props.children}
                </div>
            }
            <hr />
        </div>
    )
}

/**
 * Short blurb
 * @param props 
 */
export function Blurb(props: { children: React.ReactNode, className?: string }) {
    return (
        <div className={props.className + " "}>
            {props.children}
        </div>
    )
}

/**
 * 
 * @param props children
 * @returns Full div width for blue
 */
export function BlueWideDiv(props: { children?: React.ReactNode }) {
    return (
        <div className="bg-blue-800">
            {props.children}
        </div>
    )
}

/**
 * A divider for flex with no height but 100% basis
 */
export function FlexDivider() {
    return (
        <div className='h-0 basis-full'>

        </div>
    )
}

export function Quadrant(props: { children: React.ReactNode, title: string, bg?: string }) {
    return (
        <div className={props.bg + ' text-center flex-1'}>
            <h2 className='font-lato p-10 text-5xl'>{props.title}</h2>
            <div className='mx-5 py-10 text-lg'>{props.children}</div>
        </div>
    )
}

/**
 * Two equally spaced sections that break on md
 * 
 * @param props 
 * @returns 
 */
export function Bisection(props: { left: React.ReactNode, right: React.ReactNode }) {
    return (
        <div className='flex flex-wrap'>
            {props.left}
            <MediaFlexDivider />
            {props.right}
        </div>
    )
}

export function Bisect(props: { className?: string, children: React.ReactNode }) {
    return (
        <div className={"flex-1 " + props.className}>
            {props.children}
        </div>
    )
}

/**
 * 
 * @returns flex divider that disappears above medium
 */
export function MediaFlexDivider() {
    return (
        <div className='h-0 basis-full md:hidden'>

        </div>
    )
}

export function PassThrough(props: any) {
    <div className={props.className}>
        <div {...props}>

        </div>
    </div>
}

export function Bin(props: any) {
    return (
        <div className="ml-[10%] w-[80%] mr-[10%] md:ml-[15%] md:mr-[15%] md:w-[70%]">
            <div {...props}>

            </div>
        </div>
    )
}

export function CenterImage(props: {src: StaticImageData}) {
    <Bin>
        <img className='lg:w-1/2 w-3/4' src={props.src.src} />
    </Bin>
}

export function Panel(props: any) {
    return (
        <div className='h-screen' {...props}>

        </div>
    )
}