
export default function Grid({children} ) {
    return (
        <section className="grid gap-4 h-full grid-cols-1 columns-1 md:grid-cols-2 lg:grid-cols-4">
            {children}
        </section>

    )
}
