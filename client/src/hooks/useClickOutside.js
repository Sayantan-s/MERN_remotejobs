import { useEffect } from "react";

const useClickOutside = ({ ref, callback}, dependency = []) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    },dependency);
};

export default useClickOutside;