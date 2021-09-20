import { Text, View, Flex, StackVertical, Heading, Button, Image, Badge } from 'components/index';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { Broken } from 'assets/icons/index';

const HomeJobCards = ({ logo, role, tagline, location, jobtype, name, _id, createdAt }) => {
    const theme = useTheme();

    const history = useHistory();

    return (
        <Tilt tiltAxis={'x'} gyroscope={true} tiltMaxAngleY={10}>
            <Flex bg="blue.0" alignItems="baseline" as="fig" p="8" borderRadius={6}>
                <View width={[2.3 / 12]} alignSelf="center">
                    <Image.Thumbnail src={logo} alt="logo_company" thumbheight="40" />
                </View>
                <StackVertical width={[7.7 / 12]} gap={4}>
                    {(new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24) < 9 && (
                        <Badge variant={'success'}>New</Badge>
                    )}
                    <Heading level={4} fontWeight="semibold">
                        {role}
                    </Heading>
                    <Text>{tagline}</Text>
                </StackVertical>
                <StackVertical width={[2 / 12]} gap={4}>
                    <Button
                        variant="secondary.normal"
                        m="0 auto"
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
                    <Text textAlign="center">
                        {jobtype} &middot; {location}
                    </Text>
                </StackVertical>
            </Flex>
        </Tilt>
    );
};

export default HomeJobCards;
