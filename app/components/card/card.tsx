import React from "react";

type CardProps = {
    children: React.ReactNode;
    corner?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' | 'none' | null;
    spanCol?: number;
    spanRow?: number;
    styles?: string;
}

const cornerClasses: Record<string, string> = {
    topLeft: 'lg:rounded-tl-[2rem]',
    topRight: 'lg:rounded-tr-[2rem]',
    bottomLeft: 'lg:rounded-bl-[2rem]',
    bottomRight: 'lg:rounded-br-[2rem]',
};

export default function Card({ children, corner = null, styles }: CardProps) {
    const cornerClass = corner ? cornerClasses[corner] : '';

    return (
        <div tabIndex={0} role="article" className={`${styles ? styles : ''}  relative rounded-[calc(var(--radius-lg)+1px)] shadow-sm `}>
            <div className={`absolute inset-px rounded-lg  ${cornerClass} bg-[#808080]/5 border border-[#FFFFFF]/40 `}></div>
            <div className={`relative flex h-full flex-col overflow-hidden p-3 rounded-[calc(var(--radius-lg)+1px)] ${cornerClass}`}>
                {children}
            </div>
            <div className={`pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 ${cornerClass}`}></div>
        </div>
    );
}