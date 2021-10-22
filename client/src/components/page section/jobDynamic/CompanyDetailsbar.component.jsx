import { Broken } from 'assets/icons/index';
import { Flex, Heading, Link, StackVertical, Text, View } from 'components/index';
import React from 'react';
import { useTheme } from 'styled-components';
import Utilities from 'utils/Utilties';

const CompanyDetailsbar = ({ data }) => {
    return (
        <View>
            <Heading level={3}>Company Details</Heading>
            <StackVertical mt={7} gap={7}>
                <Detail
                    icon={Broken.Industry}
                    header={'Industry Type'}
                    name={data?.typeOfCorporation}
                />
                <Detail icon={Broken.Calender} header={'Established'} name={data?.established} />
                <Detail
                    icon={Broken.Website}
                    header={'Website'}
                    name={
                        <Link as="a" href={data?.website}>
                            {data?.website}
                        </Link>
                    }
                />
                <Detail
                    icon={Broken.Raised}
                    header={'Raised'}
                    name={'$' + Utilities.moneyConverter(data?.raised.toString())}
                />
                <Detail
                    icon={Broken.CompanySize}
                    header={'Company Size'}
                    name={`${data?.size.minSize} - ${data?.size.maxSize}`}
                />
            </StackVertical>
        </View>
    );
};

export default CompanyDetailsbar;

const Detail = ({ icon: Icon, header, name }) => {
    const theme = useTheme();

    return (
        <Flex alignItems="center">
            <Flex
                width="5.5rem"
                height="5.5rem"
                bg="text.0"
                alignItems="center"
                justifyContent="center"
                borderRadius={7}
            >
                <Icon size="3rem" stroke={theme.colors.text[3]} strokeWidth={1.7} />
            </Flex>
            <View ml={5}>
                <Heading level={4}>{header}</Heading>
                <Text as="span" lineHeight={0} mt={2} color="text.1">
                    {name}
                </Text>
            </View>
        </Flex>
    );
};
