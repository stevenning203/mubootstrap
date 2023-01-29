import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';
import React, { useState } from "react";
import useComponentVisible from '../logic/use_component_visible';
import { nav_options, single_nav_options } from '../page_data/nav_options';
import { RxHamburgerMenu } from 'react-icons/rx'

/**
 * 
 * @param props children
 * @returns nav element
 */
function MUNavItem(props: { children: React.ReactNode }) {
    return (
        <div className='rounded text-lg py-4 pr-5 pl-5 hover:bg-gray-200 duration-500 transition'>
            {props.children}
        </div>
    )
}

/**
 * 
 * @param props children
 * @returns nav dropdown child
 */
function DropDownItem(props: { children: React.ReactNode, link: string }) {
    return (
        <div className='relative text-center'>
            <a href={props.link}><div className='p-3 hover:bg-gray-100 rounded-md'>{props.children}</div></a>
        </div>
    )
}

/**
 * 
 * @param props children
 * @returns nav dropdown
 */
function NavDropdown(props: { children: React.ReactNode, title: string }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    return (
        <div className='relative text-center'>
            <div className='whitespace-nowrap cursor-pointer' onClick={() => { setIsComponentVisible(!isComponentVisible) }}>
                <MUNavItem>{props.title}</MUNavItem>
            </div>
            <div ref={ref} className={`${isComponentVisible ? "border border-black shadow-sm max-h-auto" : "max-h-0 overflow-hidden"} flex flex-col absolute right-0 min-w-full bg-white rounded-md`}>
                {props.children}
            </div>
        </div>
    )
}


/**
 * 
 * @returns hamburger options for mobile devices
 */
export const MobileHamburgerOptions = () => {
    return (
        <div className='absolute -right-0 bg-slate-700 rounded-lg bg-opacity-50'>
            {nav_options.map((opt, i) => {
                return (
                    <div className='last:pb-5'>
                        {opt.children.map((child) => {
                            return (
                                <div key={child.dest} className='container'>
                                    <a href={child.dest} className='text-sm text-white'>{child.label}</a>
                                </div>
                            )
                        }) }
                    </div>
                )
            })}
        </div>
    )
}

/**
 * 
 * @returns nav hamburger menu
 */
export const MobileHamburgerMenu = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <div>
            <RxHamburgerMenu onClick={() => setOpen(!open)} className='relative right-0'/>
            {open && <MobileHamburgerOptions />} 
        </div>
    )
}

/**
 * 
 * @returns The navbar for the website
 */
export default function MUNavbar() {
    return (
        <div>
            <nav className="flex bg-white">
                <div className="ml-10 flex items-center grow">
                    <a href='/'><span className='font-bold hover:text-sky-300 text-2xl transition-all duration-500'>Music Unbounded</span></a>
                </div>
                <div className="hidden justify-end lg:flex lg:basis-1/3 basis-0">
                    {nav_options.map((opt, i) => {
                        return (<NavDropdown title={opt.parent_title}>
                            {opt.children.map((opt_item, i) => {
                                return (
                                    <DropDownItem key={opt_item.dest} link={opt_item.dest}>
                                        {opt_item.label}
                                    </DropDownItem>
                                )
                            })}
                        </NavDropdown>
                        )
                    })}

                    {single_nav_options.map((opt, i) => {
                        return (
                            <MUNavItem><a href={opt.dest}>{opt.title}</a></MUNavItem>
                        )
                    })}
                    
                </div>
                <div className="flex lg:hidden basis:1">
                    <div className="cursor-pointer lg:hidden text-5xl mr-5 py-3">
                        <MobileHamburgerMenu />
                    </div>
                </div>
            </nav>
        </div>
    )
}