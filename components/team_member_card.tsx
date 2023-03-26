import Image from 'next/image';

/**
 * 
 * @returns a card for a team member
 */
export default function TeamMemberCard(props: { img_src: string, title: string, name: string, children: string }) {
    return (
        <div className='bg-white w-80 p-5 text-center rounded-md'>
            <h2 className='text-2xl mb-3'>{props.name}</h2>

            <Image width={1} height={1} alt="Team Member" className='mb-3 w-full rounded-full' src={props.img_src} />

            <h3 className='text-xl text-gray-500 mb-3'>{props.title}</h3>
            {props.children}
        </div>
    )
}