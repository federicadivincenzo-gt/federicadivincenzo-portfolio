import React from 'react';

type BadgeProps = {
    children: React.ReactNode;
    color?: 'blue' | 'red' | 'green' | 'yellow';
}

export const Badge = ({children, color = 'blue'} : BadgeProps) => {
    const colorClasses = {
        'blue': 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-400 border border-blue-500',
        'red': 'bg-red-100 text-red-800 dark:bg-red-700 dark  :text-red-400 border border-red-400',
        'green': 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-400 border border-green-400',
        'yellow': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-400 border border-yellow-400',
    }

    return (
        <span
            className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${colorClasses[color]}`}>{children}</span>
    )
}