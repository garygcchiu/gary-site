import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                onLoadComplete();
            }, 750);
        }, 1500);
    }, []);

    return <section className={'loader'}>
        <div className={`lds-ripple ${loaded ? 'lds-ripple--loaded' : ''}`}>
            <div />
            <div />
        </div>
    </section>
};

export default Loader;