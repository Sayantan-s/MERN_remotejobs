import css from '@styled-system/css';
import ArrowRight from 'assets/icons/ArrowRight';
import Email from 'assets/icons/Email';
import {
    Button,
    Flex,
    Heading,
    Link,
    Logo,
    Page,
    View,
    TextField,
    StackVertical,
    Stack,
    Image,
    DataList,
    DropAndFileUpload
} from 'components/index';
import Text from 'components/library/Text.component';
import useToggle from 'hooks/useToggle';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'hooks';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const Company = () => {
    const theme = useTheme();

    const [companyData, setCompanyData] = useState({
        logo: '',
        name: '',
        email: '',
        tagline: '',
        typeOfCorporation: '',
        info: '',
        size: '',
        website: '',
        raised: 0,
        established: 0,
        address: '',
        culture: {
            youtube: '',
            videoThumbnail: ''
        }
    });

    const StepA = ({ handleSubmit, next = true }) => {
        return (
            <Formik
                initialValues={{
                    name: '',
                    raised: '',
                    tagline: '',
                    address: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(2, 'Too Short!')
                        .max(50, 'Too Long!')
                        .required(`Name of the company should'nt be empty!`),
                    raised: Yup.number()
                        .positive()
                        .integer()
                        .min(50 * 1000, 'Disclose networth over 50k'),
                    tagline: Yup.string()
                        .min(40, 'Too Short!')
                        .max(53, 'Too Long!')
                        .required(`Company moto should'nt be empty!`),
                    address: Yup.string().min(2, 'Too Short to be an address!')
                })}
                onSubmit={(values) => console.log(values)}
            >
                <View as={Form} width={'100%'} autoComplete="new-password">
                    <StackVertical gap={6}>
                        <Stack gap={5}>
                            <TextField
                                variant="primary.normal"
                                type="text"
                                placeholder="e.g. Google"
                                name="name"
                                before
                                iconBefore={Email}
                                label="Company Name"
                                width="100%"
                            />
                            <TextField
                                variant="primary.normal"
                                type="number"
                                placeholder="$ 25,000,00..."
                                name="raised"
                                before
                                iconBefore={Email}
                                label="Net Worth."
                                width="100%"
                            />
                        </Stack>
                        <TextField
                            variant="primary.normal"
                            type="text"
                            placeholder="e.g. Building for a...."
                            name="tagline"
                            before
                            iconBefore={Email}
                            label="Company Moto"
                        />
                        <TextField
                            variant="primary.normal"
                            as="textarea"
                            rows="5"
                            placeholder="e.g. Market Square, 1355 Market St #900, San..."
                            name="address"
                            label="Address"
                        />
                    </StackVertical>
                </View>
            </Formik>
        );
    };
    const StepB = ({ handleSubmit, next = true }) => {
        return (
            <Formik
                initialValues={{
                    established: '',
                    typeOfCorporation: '',
                    size: '',
                    website: '',
                    info: ''
                }}
                validationSchema={Yup.object().shape({
                    established: Yup.number()
                        .positive('Invalid Year')
                        .integer('Invalid Year')
                        .min(1920, 'Are you sure? the company exist!'),
                    typeOfCorporation: Yup.mixed()
                        .oneOf(
                            [
                                'Internet',
                                'Software',
                                'MarketPlace',
                                'Security',
                                'Lodging',
                                'Ecommerce'
                            ],
                            'Shoudld be one of the 6!'
                        )
                        .required(`Industry should'nt be empty!`),
                    size: Yup.mixed()
                        .oneOf(
                            ['1-10', '10-50', '50-200', '500-1001', '1001-10000'],
                            'Shoudld be one of the 5!'
                        )
                        .required(`Industry should'nt be empty!`),
                    website: Yup.string()
                        .url('Not a valid website url!')
                        .required(`Company moto should'nt be empty!`),
                    info: Yup.string()
                        .min(140, 'Too Short!')
                        .max(185, 'Too Long!')
                        .required(`Company info is mandatory!`)
                })}
                onSubmit={(values) => console.log(values)}
            >
                <View as={Form} width={'100%'} autoComplete="new-password">
                    <StackVertical gap={6}>
                        <Stack gap={5}>
                            <TextField
                                variant="primary.normal"
                                type="number"
                                placeholder="e.g. 2008"
                                name="email"
                                before
                                iconBefore={Email}
                                label="Established on"
                                width="100%"
                            />
                            <DataList
                                variant="primary.normal"
                                type="text"
                                placeholder="e.g. Software"
                                name="email"
                                before
                                iconBefore={Email}
                                label="Industry"
                                flex="50%"
                                width="100%"
                                data={[
                                    { id: 1, value: 'Internet', disabled: false },
                                    { id: 2, value: 'Software', disabled: false },
                                    { id: 3, value: 'MarketPlace', disabled: false },
                                    { id: 4, value: 'Security', disabled: true },
                                    { id: 5, value: 'Lodging', disabled: false },
                                    { id: 6, value: 'Ecommerce', disabled: false }
                                ]}
                            />
                        </Stack>
                        <Stack gap={5}>
                            <DataList
                                variant="primary.normal"
                                type="text"
                                placeholder="e.g. 10-50"
                                name="email"
                                before
                                iconBefore={Email}
                                label="Employees"
                                width="100%"
                                data={[
                                    { id: 1, value: '1-10', disabled: false },
                                    { id: 2, value: '10-50', disabled: false },
                                    { id: 3, value: '50-200', disabled: false },
                                    { id: 4, value: '500-1001', disabled: true },
                                    { id: 5, value: '1001-10000', disabled: false }
                                ]}
                            />
                            <TextField
                                variant="primary.normal"
                                type="number"
                                placeholder="www.kimbpo.c..."
                                name="email"
                                before
                                iconBefore={Email}
                                label="Website"
                                width="100%"
                            />
                        </Stack>
                        <TextField
                            variant="primary.normal"
                            rows="5"
                            as="textarea"
                            placeholder="e.g. An American company that operates an online mar..."
                            name="email"
                            label="Describe your company"
                        />
                    </StackVertical>
                </View>
            </Formik>
        );
    };

    const StepC = ({ handleSubmit, next = false }) => {
        return (
            <Formik
                initialValues={{
                    youtube: '',
                    videoThumbnail: ''
                }}
                validationSchema={Yup.object().shape({
                    youtube: Yup.string()
                        .matches(/$www.youtube.com/, { excludeEmptyString: true })
                        .url('Not a valid website url!')
                        .required(`Yotube url cannot be empty!`),
                    videoThumbnail: Yup.string()
                        .url('Not a valid website url!')
                        .required(`Company info is mandatory!`)
                })}
                onSubmit={(values) => console.log(values)}
            >
                <View as={Form} width={'100%'} autoComplete="new-password">
                    <StackVertical gap={6}>
                        <DropAndFileUpload />
                        <Text color="text.1" textAlign="center" py={5}>
                            OR
                        </Text>
                        <TextField
                            variant="primary.normal"
                            type="number"
                            placeholder="https://images.unsplash.com/ph......."
                            name="email"
                            before
                            iconBefore={Email}
                            width="100%"
                        />
                        <TextField
                            variant="primary.normal"
                            type="url"
                            placeholder="https://www.youtube.com/watch?j..."
                            name="email"
                            before
                            iconBefore={Email}
                            label="Youtube video url"
                            width="100%"
                        />
                    </StackVertical>
                </View>
            </Formik>
        );
    };

    const MultiStepForm = [<StepA />, <StepB />, <StepC />];

    const [formSteps, setSteps] = useState(0);

    const handleSteps = () => setSteps((prevStep) => prevStep < 2 && prevStep + 1);

    const handleSubmit = () => {};

    return (
        <Page height={'100vh'} maxWidth={['full']} as={Flex}>
            <View
                position="relative"
                background={`linear-gradient(135deg, ${theme.colors.blue[6]}50, ${theme.colors.blue[6]}), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}
                backgroundSize="cover"
                backgroundPosition="center"
                bg={'blue.6'}
                flex="50%"
            >
                <Heading level={1} color="text.0" fontWeight="bold" fontSize="xxl" mt={10} ml={10}>
                    Find the candidates exactly your Company needs.
                </Heading>
                <Link
                    to="/jobs"
                    variant="secondary.normal"
                    lay="xl"
                    borderRadius={10}
                    alignItems="center"
                    position="absolute"
                    bottom="7"
                    right="10"
                >
                    <Text color="blue.6" as="span" mr="3" fontWeight="semibold">
                        Apply for Jobs
                    </Text>
                    <ArrowRight size="2.5rem" fill={theme.colors.blue[6]} />
                </Link>
            </View>
            <View flex="50%">
                <Link to="/" position="absolute" top="7" right="10">
                    <Logo />
                </Link>
                <View maxWidth="l" m="0 auto" mt={13}>
                    <StackVertical gap={6} as="form" onSubmit={(eve) => eve.preventDefault()}>
                        <View m="0 auto" mb={10} width="max-content">
                            <Image.Thumbnail
                                borderRadius="50%"
                                src={'/avatar.svg'}
                                alt="fallback"
                                size="xs"
                                addButton
                            />
                        </View>
                        {MultiStepForm[formSteps]}
                    </StackVertical>
                </View>
                <Button
                    position="absolute"
                    bottom="7"
                    right="10"
                    lay="xl"
                    fontWeight="bold"
                    onClick={handleSteps}
                >
                    {formSteps === 2 ? 'Register your company' : 'Next'}
                </Button>
            </View>
        </Page>
    );
};

export default Company;
