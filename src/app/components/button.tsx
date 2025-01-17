import Link from "next/link";
import { ReactNode } from "react";

export const enum style {
    main = "bg-neutral-800 active:bg-neutral-700 text-white",
    secondary = "bg-neutral-700 active:bg-neutral-600 text-white",
    accent = "bg-neutral-100 active:bg-neutral-300 text-black hover:dark:outline-neutral-700 text-black",
    square = main + " rounded-none",
    none = "",
}

interface ButtonProps {
    href?: string;
    children?: ReactNode;
    className?: string;
    variant?: string;
}

export default function Button({href = "", className = "", variant = style.main, children, ...rootDOMAttributes}:ButtonProps) {
    return (
        <Link {...rootDOMAttributes} href={href} className={"select-none hover:outline-neutral-300 hover:dark:outline-[#191919] " +
            "hover:outline-4 transition-[outline,background-color] duration-200 p-4 min-w-3 max-w-md " +
            "text-wrap text-lg rounded-full outline outline-0 outline-transparent" +
            " " + variant + " " + className}>
            {children}&#8203;
        </Link>
    )
}