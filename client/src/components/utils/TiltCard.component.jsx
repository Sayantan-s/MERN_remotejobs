import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children }) => {
    return (
        <Tilt tiltAxis={'x'} gyroscope={true} tiltMaxAngleY={10}>
            {children}
        </Tilt>
    );
};

export default TiltCard;
