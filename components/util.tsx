/**
 * A very large title for page tops
 */
export function PageTitle(props: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={(props.className) + " text-center pt-5 pb-5 text-3xl"}>{props.children}</h1>
    )
}

export function BlurbTitle(props: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={(props.className) + " underline pt-3 pb-3 text-2xl"}>{props.children}</h2>
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
            <div className='mx-5 text-lg'>{props.children}</div>
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