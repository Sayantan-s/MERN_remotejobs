import * as Calender  from 'components/elements/Calender.component'; 
import { Stack } from 'components/library/Primitives.component';
import React from 'react';

const CompanyDashboard = () => {
    return (
        <Stack gap={4} alignItems={'flex-start'}>
            <Calender.Day />
            <Calender.Year />
        </Stack>
    );
};

export default CompanyDashboard;
