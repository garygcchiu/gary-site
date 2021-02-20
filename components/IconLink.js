const IconLink = ({ href, imgAlt, icon, onClick, className, download = false, target = '_blank' }) => <a
        href={href}
        target={target}
        rel="noopener"
        download={download}
        onClick={onClick}
        className={className || 'socials__icon'}
    >
        {
            icon && <img src={icon}
                className={className || 'socials__icon'}
                alt={imgAlt}
            />
        }
    </a>;

export default IconLink;