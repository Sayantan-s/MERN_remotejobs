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

const Calender = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 2V5"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16 2V5"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.5 9.08984H20.5"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.6937 13.6992H15.7027"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.6937 16.6992H15.7027"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.9945 13.6992H12.0035"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.9945 16.6992H12.0035"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.29529 13.6992H8.30427"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.29529 16.6992H8.30427"
            stroke={stroke}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Industry = ({ fill, stroke, size, strokeWidth }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.43 7.75984C20.19 7.34984 20.19 6.17984 19.43 5.76984L12.92 2.25984C12.34 1.94984 11.66 1.94984 11.08 2.25984L4.57 5.76984C3.81 6.17984 3.81 7.34984 4.57 7.75984L11.08 11.2698C11.66 11.5798 12.34 11.5798 12.92 11.2698L15.26 10.0098"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 11.1216C2 10.2916 2.87 9.76164 3.61 10.1316L9.66 13.1616C10.41 13.5416 10.89 14.3116 10.89 15.1516V20.8716C10.89 21.7016 10.02 22.2316 9.28 21.8616L3.23 18.8316C2.48 18.4516 2 17.6816 2 16.8416V14.9616"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.3894 10.1316L14.3394 13.1616C13.5894 13.5416 13.1094 14.3116 13.1094 15.1516V20.8716C13.1094 21.7016 13.9794 22.2316 14.7194 21.8616L20.7694 18.8316C21.5194 18.4516 21.9994 17.6816 21.9994 16.8416V11.1216C21.9994 10.2916 21.1294 9.76164 20.3894 10.1316Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Website = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.9883 17.5H16.4983C19.5183 17.5 21.9983 15.03 21.9983 12C21.9983 8.98 19.5283 6.5 16.4983 6.5H14.9883"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.37 10.0117C2.13 10.6317 2 11.3017 2 12.0017C2 15.0217 4.47 17.5017 7.5 17.5017H9"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.99969 6.5H7.49969C6.66969 6.5 5.88969 6.68 5.17969 7.01"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 12H16"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Raised = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.88086 18.1481V16.0781"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
        <path
            d="M12 18.1517V14.0117"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
        <path
            d="M17.1191 18.1497V11.9297"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
        <path
            d="M17.1209 5.85156L16.6609 6.39156C14.1109 9.37156 10.6909 11.4816 6.88086 12.4316"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        />
        <path
            d="M14.1895 5.85156H17.1195V8.77156"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CompanySize = ({ fill, stroke, size, strokeWidth }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.0014 14.4402C5.6314 14.6702 4.12141 14.4302 3.06141 13.7202C1.65141 12.7802 1.65141 11.2402 3.06141 10.3002C4.13141 9.59016 5.6614 9.35016 7.0314 9.59016"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.9981 14.6288C11.9381 14.6188 11.8681 14.6188 11.8081 14.6288C10.4281 14.5788 9.32812 13.4488 9.32812 12.0488C9.32812 10.6188 10.4781 9.46875 11.9081 9.46875C13.3381 9.46875 14.4881 10.6288 14.4881 12.0488C14.4781 13.4488 13.3781 14.5888 11.9981 14.6288Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.9087 17.7794C13.3187 16.7194 10.6888 16.7194 9.08875 17.7794C7.67875 18.7194 7.67875 20.2594 9.08875 21.1994C10.6888 22.2694 13.3087 22.2694 14.9087 21.1994"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export {
    Search,
    Linkto,
    ArrowRight,
    ArrowLeft,
    Location,
    Calender,
    Industry,
    Website,
    Raised,
    CompanySize
};
