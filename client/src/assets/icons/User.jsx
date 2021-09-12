import React from 'react';

const User = ({ size, fill }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                id="Iconly/Bulk/Profile"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="Profile"
                    transform="translate(3.999800, 1.999700)"
                    fill={fill}
                    fillRule="nonzero"
                >
                    <path
                        d="M7.997,13.1749 C3.684,13.1749 1.42108547e-14,13.8549 1.42108547e-14,16.5749 C1.42108547e-14,19.2959 3.661,19.9999 7.997,19.9999 C12.31,19.9999 15.994,19.3209 15.994,16.5999 C15.994,13.8789 12.334,13.1749 7.997,13.1749"
                        id="Fill-1"
                    />
                    <path
                        d="M7.997,10.584 C10.935,10.584 13.289,8.229 13.289,5.292 C13.289,2.355 10.935,-5.32907052e-15 7.997,-5.32907052e-15 C5.06,-5.32907052e-15 2.705,2.355 2.705,5.292 C2.705,8.229 5.06,10.584 7.997,10.584"
                        id="Fill-4"
                        opacity="0.3"
                    />
                </g>
            </g>
        </svg>
    );
};

export default User;
