'use client';
import React from 'react';
import Link from "next/link";
import classNames from "classnames";
import {SpinnerComponent} from "../spinner/spinner";

type ButtonProps =  {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    color?: 'blue' | 'red' | 'green' | 'yellow';
    url?: string;
    onClick?: () => void;
    noStyle?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    isLoading?: boolean;
}

export const Button = ({children, variant, color, url, onClick, noStyle = false, ariaLabel, disabled, isLoading = false, } : ButtonProps) => {

    const variantClasses = {
        default: 'bg-btn-dark text-white hover:bg-btn-dark-hover',
        elevated: 'shadow-md hover:shadow-lg',
        text: 'bg-transparent hover:bg-gray-100',
        outline: 'border border-border-gray hover:bg-gray-200 text-text-dark-gray font-medium',
        tonal: 'bg-btn-tonal hover:bg-btn-tonal-hover text-gray-700',
    }

    const borderClasses = {
        rounded: 'rounded-full active:rounded-lg transition-all transition-duration-100 transition-ease-in-out',
        square: 'rounded-lg',
    }

    const disabledStyle = "bg-gray-200 opacity-50 hover:bg-gray-200 cursor-not-allowed";

    const baseStyle =
        "inline-flex cursor-pointer items-center justify-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black dark:text-white"

    const accessibleSizing= "min-w-[24px] min-h-[24px]";

    if (url) {
        return (
            <Link href={url} className={`${noStyle || baseStyle}`}>
                {children}
            </Link>
        );
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            console.log("Button activated!");
            //onClick?.();
        }
    };

    return (
        <>
        <button type="button"
                aria-label={ariaLabel}
                disabled={disabled || isLoading}
                aria-busy={isLoading}
                aria-disabled={isLoading}
                aria-describedby={isLoading ? "loading-message" : undefined}
                onClick={onClick}
                onKeyDown={handleKeyDown}
                className={classNames(baseStyle, accessibleSizing, variantClasses["outline"], borderClasses["rounded"], (disabled || isLoading) && disabledStyle)}>
            {isLoading ? <SpinnerComponent /> : children}
        </button>
        {isLoading && (
            <span id="loading-message" className="sr-only">
              Loading…
            </span>
        )}
        </>
    );
}