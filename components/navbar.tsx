import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';
import React, { useState } from "react";
import useComponentVisible from '../logic/use_component_visible';
import { nav_options, single_nav_options } from '../page_data/nav_options';

/**
 * 
 * @param props children
 * @returns nav element
 */
function MUNavItem(props: { children: React.ReactNode }) {
    return (
        <div className='text-lg py-4 pr-5 pl-5 hover:bg-gray-200 duration-500 transition'>
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
        <a href={props.link}><div className='text-center p-3 hover:bg-gray-100 rounded-md'>{props.children}</div></a>
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
            <div ref={ref} className={`${isComponentVisible ? "max-h-auto" : "max-h-0 overflow-hidden"} flex flex-col absolute right-0 min-w-full bg-white rounded-md`}>
                {props.children}
            </div>
        </div>
    )
}

/**
 * 
 * @param props option
 * @returns nav single option
 */
function NavSingleOption(title: string, dest: string) {
    return (
            <a className='text-lg py-4 pr-5 pl-5 hover:bg-gray-200 duration-500 transition' href={dest}>
                {title}
            </a>
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
                <div className="ml-10 py-4 grow">
                    <a href='/'><span className='font-bold hover:text-sky-300 text-2xl transition-all duration-500'>Music Unbounded</span></a>
                </div>
                <div className="hidden justify-end lg:flex lg:basis-1/3 basis-0">
                    {nav_options.map((opt, i) => {
                        return (<NavDropdown title={opt.parent_title}>
                            {opt.children.map((opt_item, i) => {
                                return (
                                    <DropDownItem link={opt_item.dest}>
                                        {opt_item.label}
                                    </DropDownItem>
                                )
                            })}
                        </NavDropdown>
                        )
                    })}

                    {single_nav_options.map((opt, i) => {
                        return (
                        NavSingleOption(opt.title, opt.dest)
                        )
                    })}
                    
                </div>
                <div className="flex lg:hidden basis:1">
                    <div onClick={() => { alert("") }} className="cursor-pointer lg:hidden text-5xl mr-5 mt-3">
                        {"\u2261"}
                    </div>
                </div>
            </nav>
        </div>
    )
}