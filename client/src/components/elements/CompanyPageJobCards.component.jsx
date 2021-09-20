import React from 'react';
import {
    Text,
    View,
    Flex,
    StackVertical,
    Heading,
    Button,
    Image,
    Badge,
    Stack
} from 'components/index';
import { useHistory } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { Broken } from 'assets/icons/index';
import Utilities from 'utils/Utilties';

const RoleOverview = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const CompanyPageJobCards = ({ logo, role, location, jobtype, name, _id, salary, createdAt }) => {
    const theme = useTheme();

    const history = useHistory();

    return (
        <Tilt tiltAxis={'x'} gyroscope={true} tiltMaxAngleY={10}>
            <Flex bg="blue.0" alignItems="center" as="fig" p="8" borderRadius={6}>
                <View flex={0.1}>
                    <Image.Thumbnail
                        bg="white"
                        width="max-content"
                        p={4}
                        borderRadius={8}
                        border={2}
                        borderColor={'white'}
                        src={logo}
                        alt="logo_company"
                        thumbheight="45"
                        thumbwidth="45"
                    />
                </View>
                <StackVertical flex={1} gap={4}>
                    <Flex width="100%" justifyContent="space-between" position="relative">
                        <Heading level={4} fontWeight="semibold">
                            {role}
                        </Heading>
                        <Button
                            variant="secondary.normal"
                            position="absolute"
                            right="0"
                            onClick={() => history.push(`/jobs/${name}_${_id}`)}
                            width="max-content"
                        >
                            {'Apply'.toUpperCase()}
                            <Broken.ArrowRight
                                size="2rem"
                                stroke={theme.colors.blue[6]}
                                strokeWidth="2"
                            />
                        </Button>
                    </Flex>
                    <Stack pt={2} alignItems="center">
                        <Badge fontWeight="semibold" variant="blue" bgLevel={1}>
                            {jobtype}
                        </Badge>{' '}
                        &nbsp; &#183; &nbsp; {location} &nbsp; &#183; &nbsp;
                        <Badge fontWeight="semibold" variant="text">
                            ${Utilities.salaryMeter(salary.min)}k-$
                            {Utilities.salaryMeter(salary.max)}k
                        </Badge>
                    </Stack>
                </StackVertical>
            </Flex>
        </Tilt>
    );
};

export default CompanyPageJobCards;
