import { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScrolling() {

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });
        lenis.on('scroll', () => {
        });
    }, []);
    return null;
}


export default SmoothScrolling;