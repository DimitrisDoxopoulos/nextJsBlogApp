import React from 'react'
import Link from "next/link";
import Image from "next/image";
import profileImage from "@public/assets/profile-img.png";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
                <Image src={profileImage} alt={'profile-image'} className="w-full h-auto rounded-full" />
            </div>
            <span className="font-bold text-xl">Dimitris Doxopoulos</span>
        </Link>
    )
}
