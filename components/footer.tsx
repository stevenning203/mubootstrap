import { ReactNode } from "react"

function FooterTitle(props: { children: ReactNode }) {
    return (
        <div className='text-xl'>
            {props.children}
        </div>
    )
}

function FooterColumn(props: { children: ReactNode }) {
    return (
        <div>
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
        <footer className='flex gap-3'>
            <FooterColumn>
                <FooterTitle>About Us</FooterTitle>
                <FooterLink title='About' dest='/about' />
                <FooterLink title='Our Lessons' dest='/lessons' />
                <FooterLink title='Meet the Team' dest='/our-team' />
            </FooterColumn>
            <FooterColumn>
                <FooterTitle>Get Involved</FooterTitle>
                <FooterLink title='Apply to be a Volunteer' dest='/volunteer' />
                <FooterLink title='Become one of our Teachers' dest='/teach' />
            </FooterColumn>
            <FooterColumn>
                <FooterTitle>Register</FooterTitle>
                <FooterLink title='Register for Lessons' dest='/register' />
            </FooterColumn>
            <FooterColumn>
                <form action='/contact'>
                    <button className='text-lg border p-3 rounded-lg bg-sky-300 text-white'>Contact Us</button>
                </form>

                <div>
                    Music Unbounded charity registration number: 799098306RR0001
                </div>
            </FooterColumn>
        </footer>
    )
}