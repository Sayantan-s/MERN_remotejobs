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
const Day = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(day().month());

    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const [selectDate, setSelected] = useState(0);

    const format = 'DD-MM-YY';

    const nowDay = day().format(format);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
        setSelected(nowDay);
    }, [currentMonthIndex]);

    const handleCalender = {
        nextMonth: () => setCurrentMonthIndex((prevState) => prevState + 1),
        prevMonth: () => setCurrentMonthIndex((prevState) => prevState - 1)
    };

    const theme = useTheme();

    const getDateStyles = (d) => {
        const currDay = d.format(format);
        if (nowDay === currDay) {
            if (nowDay === selectDate) {
                return {
                    bg: 'blue.5',
                    color: 'blue.0'
                };
            }
            return {
                bg: 'transparent',
                color: 'blue.5'
            };
        } else if (currDay === selectDate) {
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
                <Text as="span" fontWeight="600" fontSize="ms" fontWeight="normal">
                    {day(new Date(day().year(), currentMonthIndex)).format(`MMM`)}{' '}
                    <Text as="span" fontSize="ms" color="text.3">
                        {day(new Date(day().year(), currentMonthIndex)).format(`'YY`)}
                    </Text>
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
                            color="text.2"
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
                                onClick={() => setSelected(date.format(format))}
                                key={dayIndex}>
                                {day().format('DD-MM-YY') === date.format(format) && (
                                    <View
                                        width="3px"
                                        height="3px"
                                        position="absolute"
                                        bottom="3px"
                                        borderRadius={'50%'}
                                        bg={`blue.${
                                            date.format(format) === selectDate ? '0' : '5'
                                        }`}
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

const Year = () => {
    const theme = useTheme();

    const [currentMonth, setCurrentMonth] = useState(day().format('MMM'));

    const [selectYear, setSelectYear] = useState(+day().format('YY'));

    let inc = 0;

    const monthsMatrix = new Array(4).fill([]).map((_, idx) => {
        if (idx > 0) inc += 3;
        return new Array(3).fill(null).map((_, id) => {
            return day()
                .month(id + inc)
                .format('MMM');
        });
    });

    const handleCalender = {
        prevYear: () => setSelectYear((prevYear) => prevYear - 1),
        nextYear: () => setSelectYear((prevYear) => prevYear + 1)
    };

    return (
        <View
            maxWidth="32rem"
            boxShadow={`0px 15px 20px ${theme.colors.blue[2]}50`}
            p={5}
            borderRadius={6}
            bg="white">
            <Flex width="100%" justifyContent="space-between">
                <Text as="span" fontWeight="600" fontSize="ms" fontWeight="normal">
                    {currentMonth}{' '}
                    <Text as="span" fontSize="ms" color="text.3">
                        '{selectYear}
                    </Text>
                </Text>
                <Stack gap={3}>
                    <CalenderButton
                        variant="secondary.normal"
                        bg="blue.0"
                        onClick={handleCalender.prevYear}>
                        <ChevronLeft size={14} />
                    </CalenderButton>
                    <CalenderButton
                        variant="secondary.normal"
                        bg="blue.0"
                        onClick={handleCalender.nextYear}>
                        <ChevronRight size={14} />
                    </CalenderButton>
                </Stack>
            </Flex>
            <StackVertical gap={4} mt={6}>
                {monthsMatrix.map((rows) => (
                    <Stack gap={4}>
                        {rows.map((month) => (
                            <MonthButton
                                fontSize="1.3rem"
                                lineHeight={0}
                                p={3}
                                minWidth="6rem"
                                onClick={() => setCurrentMonth(month)}>
                                {month}
                            </MonthButton>
                        ))}
                    </Stack>
                ))}
            </StackVertical>
        </View>
    );
};

const MonthButton = styled(Button)(
    css({
        backgroundColor: 'transparent',
        color: 'text.3',
        '&:hover': {
            backgroundColor: 'blue.1',
            color: 'blue.6'
        }
    })
);

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

export { Day, Year };
