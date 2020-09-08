const IconLink = ({ href, imgAlt, icon, onClick, className, download = false, target = '_blank' }) => {
    return <a
        href={href}
        target={target}
        rel="noopener"
        download={download}
        onClick={onClick}
        className={className ? className : 'socials__icon'}
    >
        {icon ?
            <img src={icon}
                 className={className ? className : 'socials__icon'}
                 alt={imgAlt}
            />
            : null
        }

    </a>
};

export default IconLink;