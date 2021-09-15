import { Button, Flex, Heading, Stack, Text, View, Image, Link } from 'components/index';
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Location from 'assets/icons/Location';
import ArrowRight from 'assets/icons/ArrowRight';
import { useHistory } from 'react-router';
import Utilities from 'utils/Utilties';
import { NavLink } from 'react-router-dom';
import css from '@styled-system/css';
import Linkto from 'assets/icons/Broken/Linkto';

const RoleOverview = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const StyledLink = styled(NavLink)(
    css({
        textDecoration: 'none',
        color: 'text.1',
        display: 'flex',
        alignItems: 'center',
        fontSize: 'ms',
        '&:hover': {
            color: 'text.2'
        },
        '&:hover svg': {
            path: {
                stroke: 'text.2',
                strokeWidth: 2
            }
        },
        svg: {
            mr: 4,
            path: {
                stroke: 'text.1',
                strokeWidth: 2
            }
        }
    })
);

const JobPageJobCards = ({
    thumbnail,
    name,
    role,
    location,
    roleOverview,
    salary,
    tags,
    createdAt,
    id
}) => {
    const theme = useTheme();

    const history = useHistory();

    const [jobsTags, setTags] = useState([]);

    useEffect(() => {
        if (tags.length > 3) {
            for (let i = 1; i <= 3; i++) {
                setTags((prevState) => [...prevState, tags[tags.length - 1 - i]]);
            }
        } else {
            setTags(tags);
        }
    }, []);

    return (
        <View
            bg="white"
            boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`}
            p={8}
            borderRadius={6}
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Image.Thumbnail src={thumbnail} alt={name} thumbheight="55" />
                <Button
                    width="5rem"
                    height="5rem"
                    p={'0px'}
                    minWidth={'max-content'}
                    variant="secondary.normal"
                    onClick={() => history.push(`/jobs/${name}_${id}`)}
                >
                    <ArrowRight size="2.5rem" fill={theme.colors.blue[6]} />
                </Button>
            </Flex>
            <Flex justifyContent="space-between" mt={7}>
                <Flex>
                    <View>
                        <Heading level={4} fontWeight="semibold">
                            {role}
                        </Heading>
                        <Flex mt={4}>
                            <StyledLink to={`/company/${name}`}>
                                <Linkto size="2rem" />
                                {name}
                            </StyledLink>
                            <Flex alignItems="center" width={'100%'} ml={6}>
                                <Location size="2.5rem" fill={theme.colors.text[1]} />
                                <Text as="span" color="text.1" fontSize="ms" ml={3}>
                                    {location}
                                </Text>
                            </Flex>
                        </Flex>
                    </View>
                </Flex>
                <Text as="span" fontWeight="bold" fontSize="m" color="text.4">
                    ${Utilities.salaryMeter(salary.min)}k-${Utilities.salaryMeter(salary.max)}k
                </Text>
            </Flex>
            <RoleOverview mt={6}>{roleOverview}</RoleOverview>
            <Flex mt={7} alignItems="center" justifyContent="space-between">
                <Stack gap={4} alignItems="center">
                    {jobsTags
                        ?.map((tag) => (
                            <Button
                                key={tag}
                                variant="secondary.normal"
                                borderRadius={10}
                                bg="blue.0"
                            >
                                {tag}
                            </Button>
                        ))
                        .reverse()}
                    {tags.length > 3 && (
                        <Flex
                            as="span"
                            borderRadius="50%"
                            size="4rem"
                            bg="blue.0"
                            fontWeight="bold"
                            color="blue.6"
                            alignItems="center"
                            justifyContent="center"
                        >
                            +{tags.length - jobsTags.length}
                        </Flex>
                    )}
                </Stack>
                <Text as="span" color="text.1" fontSize="ms">
                    {new Date(createdAt)
                        .toDateString()
                        .split(' ')
                        .filter((_, id) => id !== 0)
                        .map((x, id) => (id === 1 ? `${x},` : x))
                        .join(' ')}
                </Text>
            </Flex>
        </View>
    );
};

export default JobPageJobCards;
