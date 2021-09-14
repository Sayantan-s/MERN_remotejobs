import SolidJob from 'assets/icons/solid/SolidJob';
import SolidLocation from 'assets/icons/solid/SolidLocation';
import {
    Page,
    Image,
    View,
    Text,
    Heading,
    Flex,
    Stack,
    StackVertical,
    Button,
    Link,
    CheckboxGroup
} from 'components/index';
import CompanyDetailsbar from 'components/page section/jobDynamic/CompanyDetailsbar.component';
import SimilarJobs from 'components/page section/jobDynamic/SimilarJobs.component';
import SkillExpectation from 'components/page section/jobDynamic/SkillExpectation.component';
import { AlertContext } from 'context/ToastContext';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import http from 'utils/http';

const Job = () => {
    const { id } = useParams();

    const theme = useTheme();

    const history = useHistory();

    const { dispatchToast } = useContext(AlertContext);

    const [jobData, setData] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const { data, status } = await http.get(`/jobs/${id}`);
                if (status === 200) setData(data.data);
            } catch (err) {
                console.log(err.response);
            }
        })()

    }, []);

    const { company, roleInfo, companyInfo, similarJobs, _id } = jobData;

    const mainResponsibilities = roleInfo?.mainResponsibilities?.map((responsibility) => ({
        name: responsibility,
        value: responsibility
    }));

    const skillsReq = roleInfo?.skillsReq?.map((info) => ({
        name: info,
        value: info
    }));

    const [countXp, setXp] = useState({
        checkedValues: [],
        length: []
    });

    useEffect(() => {
        setXp((prevState) => ({
            ...prevState,
            length: skillsReq?.length + mainResponsibilities?.length
        }));
    }, [jobData]);

    const applyTojobHandler = () => {
        if (Math.ceil((countXp.checkedValues.length / countXp.length) * 100) < roleInfo?.skillXP) {
            return dispatchToast({
                variant: 'danger',
                text: "You don't fullfill the eligibilty criteria!",
                hasIcon: true
            });
        }
        return history.push('/' + company?.name + '/' + roleInfo?.role + '/' + 'test');
    };

    return (
        <Page maxHeight={'100vh'}>
            <View
                position="relative"
                px={10}
                py={13}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius={8}
                backgroundImage={`URL(${companyInfo?.culture.videoThumbnail})`}
            >
                <Image.Thumbnail
                    src={company?.thumbnail}
                    alt={company?.name}
                    thumbwidth={80}
                    thumbheight={80}
                    bg="white"
                    width="max-content"
                    p={4}
                    position="absolute"
                    bottom={-40}
                    borderRadius={8}
                    border={2}
                    borderColor={'white'}
                    boxShadow={`0px 15px 20px ${theme.colors.blue[2]}40`}
                />
            </View>
            <View my={12} px={10}>
                <Link fontSize="m" to={`/company/${company?.name}_${_id}`} p="0" color="text.1">
                    {company?.name}
                </Link>
                <Heading level={2} mt={4} maxWidth="xl">
                    {roleInfo?.role}
                </Heading>
                <Flex justifyContent="space-between" alignItems="flex-end">
                    <Stack mt={6} gap={6} alignItems="center">
                        <Flex
                            alignItems="center"
                            bg={`${theme.colors.text[0]}85`}
                            px={4}
                            py={2}
                            borderRadius={6}
                        >
                            <SolidJob size={'2rem'} fill={theme.colors.text[2]} />
                            <Text
                                as="span"
                                color="text.2"
                                fontWeight="semibold"
                                lineHeight={1}
                                ml={4}
                            >
                                {' '}
                                {roleInfo?.jobtype}{' '}
                            </Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            bg={`${theme.colors.text[0]}85`}
                            px={4}
                            py={2}
                            borderRadius={6}
                        >
                            <SolidLocation size={'2rem'} fill={theme.colors.text[2]} />
                            <Text
                                as="span"
                                color="text.2"
                                fontWeight="semibold"
                                lineHeight={1}
                                ml={4}
                            >
                                {' '}
                                {roleInfo?.location}{' '}
                            </Text>
                        </Flex>
                        <Flex alignItems="center" bg={`blue.1`} px={4} py={2} borderRadius={6}>
                            <Text as="span" color={'blue.6'} fontWeight="semibold" lineHeight={1}>
                                {' '}
                                {roleInfo?.dept}{' '}
                            </Text>
                        </Flex>
                    </Stack>
                    <Button lay="xl" onClick={applyTojobHandler}>
                        Apply Now
                    </Button>
                </Flex>
                <Flex mt={10} justifyContent="space-between">
                    <View flex="0.6">
                        <View>
                            <Heading level={3}>Working at {company?.name}</Heading>
                            <Text mt={7}>{roleInfo?.roleOverview}</Text>
                        </View>
                        <View mt={10}>
                            <Heading level={3}>What will you do as a {roleInfo?.role}?</Heading>
                            <View mt={7}>
                                <CheckboxGroup
                                    checkedBg={theme.colors.success[3]}
                                    uncheckedBg={theme.colors.success[0]}
                                    color={theme.colors.white}
                                    isOption
                                    size="2.3rem"
                                    gap={6}
                                    data={mainResponsibilities}
                                    setCheckedValue={setXp}
                                />
                            </View>
                        </View>
                        <View mt={10}>
                            <Heading level={3}>Requirements</Heading>
                            <View mt={7}>
                                <CheckboxGroup
                                    checkedBg={theme.colors.success[3]}
                                    uncheckedBg={theme.colors.success[0]}
                                    color={theme.colors.white}
                                    isOption
                                    size="2.3rem"
                                    gap={6}
                                    data={skillsReq}
                                    setCheckedValue={setXp}
                                />
                            </View>
                        </View>
                    </View>
                    <StackVertical flex="0.3" gap={8} position="sticky">
                        <CompanyDetailsbar data={companyInfo} />
                        <SkillExpectation
                            requiredXP={roleInfo?.skillXP}
                            company={companyInfo?.name}
                            userSkillXp={countXp}
                        />
                        <SimilarJobs data={similarJobs} />
                    </StackVertical>
                </Flex>
            </View>
        </Page>
    );
};

export default Job;
