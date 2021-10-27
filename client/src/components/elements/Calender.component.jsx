import { View, Flex, Text, Stack, StackVertical, Button } from 'components/index';
import React, { useEffect, useState } from 'react';
import day from 'dayjs';
import styled, { useTheme } from 'styled-components';
import css from '@styled-system/css';
import ChevronLeft from 'assets/icons/Broken/ChevronLeft';
import ChevronRight from 'assets/icons/Broken/ChevronRight';

function getMonth(month = day().month()) {
    month = Math.floor(month);
    const year = day().year();
    const firstDayOfTheMonth = day(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return day(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}

const Calender = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(day().month());

    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);

    const handleCalender = {
        nextMonth: () => setCurrentMonthIndex((prevState) => prevState + 1),
        prevMonth: () => setCurrentMonthIndex((prevState) => prevState - 1)
    };

    const theme = useTheme();

    const getDateStyles = (d) => {
        const format = 'DD-MM-YY';
        const nowDay = day().format(format);
        const currDay = d.format(format);
        if (nowDay === currDay) {
            return {
                bg: 'blue.5',
                color: 'blue.0'
            };
        }

        return {
            bg: 'transparent',
            color: 'text.3'
        };
    };

    return (
        <View
            maxWidth="32rem"
            boxShadow={`0px 15px 20px ${theme.colors.blue[2]}50`}
            p={5}
            borderRadius={6}
            bg="white">
            <Flex width="100%" justifyContent="space-between">
                <Text as="span" fontWeight="600" fontSize="ms">
                    {day(new Date(day().year(), currentMonthIndex)).format('MMM, YYYY')}
                </Text>
                <Stack gap={3}>
                    <CalenderButton
                        variant="secondary.normal"
                        bg="blue.0"
                        onClick={handleCalender.prevMonth}>
                        <ChevronLeft size={14} />
                    </CalenderButton>
                    <CalenderButton
                        variant="secondary.normal"
                        bg="blue.0"
                        onClick={handleCalender.nextMonth}>
                        <ChevronRight size={14} />
                    </CalenderButton>
                </Stack>
            </Flex>
            <View mt={6}>
                <Stack justifyContent="space-between">
                    {currentMonth[0].map((day, id) => (
                        <Flex
                            as="span"
                            key={id}
                            justifyContent="center"
                            size="2.5rem"
                            fontSize="1.3rem"
                            p="0"
                            minWidth="max-content">
                            {day.format('dd')}
                        </Flex>
                    ))}
                </Stack>
            </View>
            <StackVertical gap={4} mt={4}>
                {currentMonth.map((row, index) => (
                    <Stack key={index} gap={4} justifyContent="space-between">
                        {row.map((date, dayIndex) => (
                            <CalenderButton
                                {...getDateStyles(date)}
                                position="relative"
                                key={dayIndex}>
                                {day().format('DD-MM-YY') === date.format('DD-MM-YY') && (
                                    <View
                                        width="3px"
                                        height="3px"
                                        position="absolute"
                                        bottom="3px"
                                        borderRadius={'50%'}
                                        bg="white"
                                    />
                                )}
                                {date.format('DD')}
                            </CalenderButton>
                        ))}
                    </Stack>
                ))}
            </StackVertical>
        </View>
    );
};

export default Calender;

const CalenderButton = styled(Button)(
    css({
        size: '2.5rem',
        fontSize: '1.3rem',
        p: '2',
        minWidth: 'max-content',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            bg: 'blue.1',
            color: 'blue.5'
        },
        svg: {
            path: {
                stroke: 'blue.5'
            }
        }
    })
);
