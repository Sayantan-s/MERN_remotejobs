import React from 'react';

const ChevronLeft = ({ size, stroke }) => {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.1897 7.94141L8.56969 10.5614C7.79969 11.3314 7.79969 12.5914 8.56969 13.3614L15.0897 19.8814"
                stroke={stroke || "#292D32"}
                strokeWidth="2"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.0908 4.03906L14.0508 5.07906"
                stroke={stroke || "#292D32"}
                strokeWidth="2"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronLeft;
