const Search = ({ fill, stroke, size, strokeWidth }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || 'none'} xmlns="http://www.w3.org/2000/svg">
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
