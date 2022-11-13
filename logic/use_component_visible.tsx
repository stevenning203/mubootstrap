import { useState, useEffect, useRef } from 'react';

/**
 * use a state where the component becomes not visible if clicked outside the component. the component should use ref={ref}, and isComponentVisible will be true/false depending on if outside is clicked.
 * @param initialIsVisible initial state
 * @returns ref: ref, isComponentVisible: if component is visible
 */
export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}