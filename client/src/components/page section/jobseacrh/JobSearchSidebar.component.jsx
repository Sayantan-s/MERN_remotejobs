import { View } from 'components/index'
import React from 'react'
import { useTheme } from 'styled-components'

const JobSearchSidebar = () => {

    const theme = useTheme();

    return (
        <View width={[2/10]} >
            <svg viewBox="0 0 24 24" fill="none">
                <circle cx={12} cy={12} r={12} fill={theme.colors.blue[6]} />
                    {
                        1 && <path
                        d="M7 13l3 3 7-7"
                        stroke={theme.colors.blue[1]}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    }
            </svg>
        </View>
    )
}

export default JobSearchSidebar
