import React from "react";

export default function Card({children, corner = null, spanCol, spanRow, style}: {children: React.ReactNode, corner?: string | null, spanCol?: number, spanRow?: number}) {
    const spanColClass = spanCol ? `lg:col-span-${spanCol}` : '1';
    const spanRowClass = spanRow ? `lg:row-span-${spanRow}` : '1';
    return (
        <div className={`relative ${spanColClass}  ${spanRowClass}`}>
            <div className={`absolute inset-px rounded-lg bg-white lg:rounded-${corner}-[2rem]`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-${corner}-[calc(2rem+1px)]`}>
                {children}
            </div>
            <div className={`pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-${corner}-[2rem]`}></div>
        </div>
    )
}