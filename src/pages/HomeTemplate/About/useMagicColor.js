import { useState, useEffect } from 'react';

const useMagicColor = () => {
    const [color, setColor] = useState("red");
    useEffect(() => {
        const interval = setInterval(() => {
            const color = Math.floor(Math.random() * 999999);
            setColor(`#${color}`)
        }, 1000)

        // Để clear interval khi component unmount
        return () => {
            clearInterval(interval);
        };
    }, [])

    return color
};

export { useMagicColor };