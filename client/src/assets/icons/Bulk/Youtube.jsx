import React from 'react';

const Youtube = ({ size, stroke }) => {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
                fill={stroke}
            />
            <path
                d="M11.4201 9.48997L13.8901 10.97C14.8301 11.54 14.8301 12.46 13.8901 13.03L11.4201 14.51C10.4201 15.11 9.6001 14.65 9.6001 13.48V10.51C9.6001 9.34997 10.4201 8.88997 11.4201 9.48997Z"
                fill={stroke}
            />
        </svg>
    );
};

export default Youtube;
