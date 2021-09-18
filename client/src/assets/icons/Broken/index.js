const Search = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 22L20 20"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Linkto = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 11.0008L21.2 2.80078"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21.9992 6.8V2H17.1992"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 12.9883V14.9983C2 19.9983 4 21.9983 9 21.9983H15C20 21.9983 22 19.9983 22 14.9983V12.9983"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11 2H9C4 2 2 4 2 9"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowRight = ({ fill, stroke, size, strokeWidth, isRotated = true }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: isRotated ? `rotate(-45deg)` : '' }}
    >
        <path
            d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.0117 12H20.3317"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.5 12H6.97"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowLeft = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.82 12H3.5"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.3316 12H16.8516"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Location = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.1189 10.3114C15.1189 12.0314 13.7289 13.4314 11.9989 13.4314C10.2689 13.4314 8.87891 12.0414 8.87891 10.3114C8.87891 8.58141 10.2789 7.19141 11.9989 7.19141C12.3389 7.19141 12.6689 7.24141 12.9689 7.34141"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export { Search, Linkto, ArrowRight, ArrowLeft, Location };
