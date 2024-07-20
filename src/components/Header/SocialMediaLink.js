import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaLink = ({ className, href, label, newTab }) => {
    const rel = newTab ? "noopener noreferrer" : undefined;
    const target = newTab ? "_blank" : undefined;

    return (
        <a href={href} className={className} target={target} rel={rel}>
            {label}
        </a>
    );
};

SocialMediaLink.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    newTab: PropTypes.bool,
};

SocialMediaLink.defaultProps = {
    className: '',
    newTab: true,
};

export default SocialMediaLink;