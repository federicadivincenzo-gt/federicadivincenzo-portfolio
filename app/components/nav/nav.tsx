import Link from "next/link";

export function Navbar() {
  return (
    <aside className=" tracking-tight bg-gray-100 p-2 py-4 rounded-xl mb-8">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 items-center justify-between w-full">
            <Link href="/" className="ml-4">{'<FEDERICA />'}</Link>
            <div className="hidden md:block">
                <Link href="/blog" className="ml-4">blog</Link>
                <Link href="/projects" className="ml-4">projects</Link>
                <Link href="/about" className="ml-4">about</Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
