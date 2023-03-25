import { ReactNode } from "react"
// import facebook_icon from '../assets/facebook_logo.png';
// import instagram_icon from '../assets/instagram_logo.png';
import {FaInstagram, FaFacebook} from 'react-icons/fa'; 

function FooterTitle(props: { children: ReactNode }) {
    return (
        <div className='pb-2 text-2xl text-white'>
            {props.children}
        </div>
    )
}

function FooterColumn(props: { children: ReactNode, className?: string }) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

function FooterLink(props: { title: string, dest: string }) {
    return (
        <div>
            <a href={props.dest}>{props.title}</a>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className='pl-[10%] pr-[10%] bg-blue-800 text-sky-200'>
            <div className='pt-10 pb-10 flex gap-4 flex-wrap'>
            <FooterColumn>
                <FooterTitle>About Us</FooterTitle>
                <FooterLink title='About' dest='/about' />
                <FooterLink title='Our Lessons' dest='/lessons' />
                <FooterLink title='Meet the Team' dest='/our-team' />
                <FooterLink title="FAQ" dest='/faq' />
            </FooterColumn>
            <FooterColumn>
                <FooterTitle>Get Involved</FooterTitle>
                <FooterLink title='Apply to be a Volunteer' dest='/volunteer' />
                <FooterLink title='Become one of our Teachers' dest='/teach' />
                <FooterLink title='Contact' dest='/contact' />
            </FooterColumn>
            <FooterColumn>
                <FooterTitle>Register</FooterTitle>
                <FooterLink title='Register for Lessons' dest='/register' />
            </FooterColumn>
            <FooterColumn className='flex gap-4'>
                <form action='/contact'>
                    <button className='text-lg py-2 px-3 rounded-lg bg-[#3399ff] text-white'>Contact Us</button>
                </form>
                <a><button className='text-lg py-2 px-4 rounded-lg bg-slate-600 text-white'>Donate</button></a>
            </FooterColumn>
            </div>
            <div className='flex flex-wrap gap-3 pb-3'>
                <a href='http://www.facebook.com/MusicUnbounded.nonprofit/'>
                    <FaFacebook color="white" size={35} />
                    </a>
                <a href='http://www.instagram.com/music.unbounded/'>
                <FaInstagram color="white" size={35} />
                </a>
            </div>
            <div className='pb-10'>
                Registration Number: 799098306RR0001
            </div>
        </footer>
    )
}