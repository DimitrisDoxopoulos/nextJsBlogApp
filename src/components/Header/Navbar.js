import React from 'react';
import Link from "next/link";
import ThemeSwitch from "@/components/Header/ThemeSwitch";

const links = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
];

const navbarClass = "w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex " +
    "items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm";

const Navbar = () => {
    return (
        <nav className={navbarClass}>
            {links.map(({href, label}) => (
                <Link key={href} href={href} className="mr-2">
                    {label}
                </Link>
            ))}
            <ThemeSwitch />
        </nav>
    );
};

export default Navbar;