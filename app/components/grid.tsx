
export default function Grid({children} ) {
    return (
        <div className="mt-4 grid gap-4 sm:mt-16 lg:grid-cols-8 ">
            {children}
        </div>

    )
}
