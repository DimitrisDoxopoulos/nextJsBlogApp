import React from 'react'
import {Logo} from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";
import SocialMedia from "@/components/Header/SocialMedia";

const Header = () => {
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
            <Logo />
            <Navbar />
            <SocialMedia />
        </header>
    )
}
export default Header
