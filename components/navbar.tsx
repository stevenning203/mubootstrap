import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';
import React, {useState} from "react";
import useComponentVisible from '../logic/use_component_visible';

/**
 * 
 * @param props children
 * @returns nav element
 */
function MUNavItem(props: {children}) {
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
function DropDownItem(props: {children, link}) {
    return (
        <a href={props.link}><div className='text-center pt-3 pb-3 hover:bg-gray-100 rounded-md'>{props.children}</div></a>
    )
}

/**
 * 
 * @param props children
 * @returns nav dropdown
 */
function NavDropdown(props: {children, title: string}) {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    return (
        <div className='relative'>
            <div className='whitespace-nowrap cursor-pointer' onClick={()=>{setIsComponentVisible(!isComponentVisible)}}>
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
 * @returns The navbar for the website
 */
export default function MUNavbar() {
    return(
        <div>
            <nav className="flex bg-white">
                <div className="ml-10 py-4 grow">
                    <a href ='/'><span className ='font-bold hover:text-sky-300 text-2xl transition-all duration-500'>Music Unbounded</span></a>
                </div>
                <div className="hidden flex-row-reverse lg:flex lg:basis-1/3 basis-0">
                    <NavDropdown title='About'> 
                        <DropDownItem link='/about'>
                            About Us
                        </DropDownItem>
                        <DropDownItem link="/lessons">
                            Our Lessons
                        </DropDownItem>
                        <DropDownItem link='/our-team'>
                            Our Team
                        </DropDownItem>
                    </NavDropdown>
                    <NavDropdown title='Get Involved'>
                        <DropDownItem link='/volunteer'>
                            Volunteer
                        </DropDownItem>
                        <DropDownItem link='/teach'>
                            Teach
                        </DropDownItem>
                        <DropDownItem link='/contact'>
                            Contact Us
                        </DropDownItem>
                    </NavDropdown>
                    <NavDropdown title='Register'>
                        <DropDownItem link='/register'>
                            Register
                        </DropDownItem>
                    </NavDropdown>
                </div>
                <div className="flex lg:hidden basis:1">
                    <div onClick={()=>{alert("")}} className="cursor-pointer lg:hidden text-5xl mr-5 mt-3">
                        {"\u2261"}
                    </div>
                </div>
            </nav>
        </div>
    )
}