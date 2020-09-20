import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                onLoadComplete();
            }, 700);
        }, 1500);
    }, []);

    return <section className={'loader'}>
        <div className={`sk-chase ${loaded ? 'sk-chase--loaded': ''}`}>
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
        </div>
    </section>
};

export default Loader;