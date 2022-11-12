import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';
import React, {useState} from "react";

/**
 * 
 * @param props children
 * @returns nav element
 */
function MUNavItem(props: {children}) {
    return (
        <div className='text-lg py-4 pr-10'>
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
        <div>
            <a href={props.link}>{props.children}</a>
        </div>
    )
}

/**
 * 
 * @param props children
 * @returns nav dropdown
 */
function NavDropdown(props: {children, title: string}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='cursor-pointer' onClick={()=>{setOpen(!open)}}>
                <MUNavItem>{props.title}</MUNavItem>
            </div>
            {open &&
            <div className='border shadow border-solid border-gray-400 flex flex-col absolute t-3 origin-top-left bg-white rounded-md'>
                {props.children}
            </div>}
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
                <div className="hidden xl:flex xl:basis-1/3 basis-0">
                    <div className="ml-10"></div>
                    <NavDropdown title='About'>
                        <DropDownItem link='/about'>
                            About Us
                        </DropDownItem>
                        <DropDownItem link="/lessons">
                            Our Lessons
                        </DropDownItem>
                    </NavDropdown>
                    <NavDropdown title='Get Involved'>
                        <DropDownItem link='/volunteer'>
                            Volunteer
                        </DropDownItem>
                        <DropDownItem link='/teach'>
                            Teach
                        </DropDownItem>
                    </NavDropdown>
                    <NavDropdown title='Register'>
                        <DropDownItem link='/register'>
                            Register
                        </DropDownItem>
                    </NavDropdown>
                </div>
                <div className="py-4 grow text-center">
                    <a href ='/'><span className ='font-bold hover:text-gray-900 text-2xl'>Music Unbounded</span></a>
                </div>
                <div className="hidden xl:flex xl:basis-1/3">
                    
                </div>
            </nav>
        </div>
    )
}