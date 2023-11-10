import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button onClick={scrollToTop} className={`goto-top ${position < 100 ? 'hidden' : ''}`}>
                <i className="fa-regular fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default ScrollToTop;
