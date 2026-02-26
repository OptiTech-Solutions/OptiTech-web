import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook that returns a ref and a boolean isVisible.
 * isVisible becomes true once the element enters the viewport (fires once).
 * @param {number} threshold - 0 to 1, how much of the element must be visible before triggering
 */
const useScrollAnimation = (threshold = 0.15) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
};

export default useScrollAnimation;
