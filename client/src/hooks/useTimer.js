import { useEffect, useState } from 'react';

const useTimer = ({ minutes, donotDecrementAfterEndtime = true }) => {
    const [timer, setTimer] = useState(minutes * 60);

    const runTimer = () => setTimer((prevTime) => prevTime - 1);

    useEffect(() => {
        if (timer > 0 && donotDecrementAfterEndtime) {
            setTimeout(() => runTimer(), 1000);
            return clearTimeout(() => runTimer(), 1000);
        }
    }, [timer]);

    return timer;
};

export default useTimer;
