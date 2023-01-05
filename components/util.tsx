/**
 * A very large title for page tops
 */
export function PageTitle(props: { children: React.ReactNode }) {
    return (
        <h1 className="text-center text-white pt-5 pb-5 text-3xl">{props.children}</h1>
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