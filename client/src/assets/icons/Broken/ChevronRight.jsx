import React from 'react';

const ChevronRight = ({ size, stroke }) => {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.9 7.94141L15.52 10.5614C16.29 11.3314 16.29 12.5914 15.52 13.3614L9 19.8714"
                stroke={stroke || "#292D32"}
                strokeWidth="2"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 4.03906L10.04 5.07906"
                stroke={stroke || "#292D32"}
                strokeWidth="2"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronRight;
