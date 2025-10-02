import {ArrowIcon} from "../icons/arrow-icon/arrow-icon";


export default function Footer() {
  return (
    <footer className="mb-16 bg-gray-100 rounded-xl p-4 mt-8">
      <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/federicadivincenzo-gt"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="/blog"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">read blog</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
