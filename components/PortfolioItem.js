import React from 'react';

const PortfolioItem = ({
    title,
    description,
    image,
    technologies = [],
    link,
    featured = false,
}) => (
    <div className={'portfolio__item'}>
        {link ? (
            <h4 className={'portfolio__item__header'}>
                <a href={link} target={'_blank'} rel={'noreferrer'}>
                    {title}
                </a>
            </h4>
        ) : (
            <h4 className={'portfolio__item__header'}>{title}</h4>
        )}
        {featured ? (
            <img
                src={image}
                alt={'Portfolio Item'}
                height={491}
                width={854}
                className={'portfolio__item__image'}
                onClick={() => window.open(link, '_blank')}
            />
        ) : (
            <div style={{ marginBottom: '1.5rem' }} />
        )}
        <p>{description}</p>
        <div className={'portfolio__item__technologies'}>
            > {technologies.join(', ')}
        </div>
    </div>
);

export default PortfolioItem;
