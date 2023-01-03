/**
 * A very large title for page tops
 */
export default function PageTitle(props: { children: React.ReactNode }) {
    return (
        <h1 className="text-center text-white pt-5 pb-5 text-3xl">{props.children}</h1>
    )
}