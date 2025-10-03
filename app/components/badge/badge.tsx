import React from 'react';

type BadgeProps = {
    children: React.ReactNode;
    color?: 'blue' | 'red' | 'green' | 'yellow';
}

export const Badge = ({children, color = 'blue'} : BadgeProps) => {

    return (
        <span
            className={`text-xs font-medium me-2 px-2.5 py-1.5 rounded-lg border border-btn-dark text-text-dark-gray hover:bg-btn-tonal-hover/30`}>{children}</span>
    )
}