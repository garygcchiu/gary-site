const IconLink = ({ href, imgAlt, icon, onClickCallback }) => {
    return <a
        href={href}
        target="_blank"
        rel="noopener"
        download
        onClick={onClickCallback}
    >
        <img src={icon}
             className={'socials__icon'}
             alt={imgAlt}
        />
    </a>
};

export default IconLink;