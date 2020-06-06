const IconLink = ({ href, imgAlt, icon, onClick, className, download = false, target = '_blank' }) => {
    return <a
        href={href}
        target={target}
        rel="noopener"
        download={download}
        onClick={onClick}
    >
        <img src={icon}
             className={className ? className : 'socials__icon'}
             alt={imgAlt}
        />
    </a>
};

export default IconLink;