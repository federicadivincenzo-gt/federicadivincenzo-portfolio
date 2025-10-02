import Link from "next/link";

type ButtonProps =  {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    color?: 'blue' | 'red' | 'green' | 'yellow';
    url?: string;
    onClick?: () => void;
    noStyle?: boolean;
}

export const Button = ({children, variant, color, url, onClick, noStyle = false} : ButtonProps) => {

    const className =
        "inline-flex items-center justify-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

    if (url) {
        return (
            <Link href={url} className={`${noStyle || className}`}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={className}>
            {children}
        </button>
    );
}