import React from 'react';

const Location = ({ color }) => (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '.cls-1{fill:#fff;opacity:0;}.cls-2,.cls-3{fill:none;stroke:' +
                        color +
                        ';stroke-linecap:round;stroke-miterlimit:10;}.cls-3{stroke-width:1.5px;}'
                }}
            />
        </defs>
        <title>Location</title>
        <rect className="cls-1" width={24} height={24} />
        <g id="Location">
            <line className="cls-2" x1="10.78537" y1={12} x2="13.23595" y2={12} />
            <path
                className="cls-3"
                d="M103.28482,263.0252c0,4.61-4.799,11.67-8.0048,11.67-3.19617,0-7.9952-7.06-7.9952-11.67a8.00654,8.00654,0,1,1,16,0Z"
                transform="translate(-83.28482 -252.69518)"
            />
        </g>
    </svg>
);

const Search = ({ color }) => (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '.cls-1{fill:#fff;opacity:0;}.cls-2,.cls-3{fill:none;stroke:' +
                        color +
                        ';stroke-linecap:round;stroke-miterlimit:10;}.cls-2{stroke-width:1.5px;}'
                }}
            />
        </defs>
        <title>Search</title>
        <rect className="cls-1" width={24} height={24} />
        <g id="Search">
            <circle className="cls-2" cx="11.36167" cy="11.36167" r="9.36167" />
            <line className="cls-3" x1={22} y1={22} x2="19.9332" y2="19.9332" />
        </g>
    </svg>
);

export { Location, Search };
