import React from 'react';
import SocialMediaLink from "@/components/Header/SocialMediaLink";
import { GithubIcon, LinkedinIcon } from "@/components/items";

const socialMediaLinks = [
    {
        href: "https://www.linkedin.com/in/dimitris-doxopoulos-a3687346/",
        label: <LinkedinIcon />,
        className: "" // Remove or use actual class names if styling is needed
    },
    {
        href: "https://github.com/DimitrisDoxopoulos",
        label: <GithubIcon />,
        className: "" // Remove or use actual class names if styling is needed
    }
];

const SocialMedia = () => {
    return (
        <div>
            {socialMediaLinks.map((link, index) => (
                <SocialMediaLink
                    key={index}
                    className={link.className}
                    href={link.href}
                    label={link.label}
                />
            ))}
        </div>
    );
};

export default SocialMedia;