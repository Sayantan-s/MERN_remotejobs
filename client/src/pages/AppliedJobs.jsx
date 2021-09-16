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
        typeOfCorporation : '',
        info : '',
        size : {
            minSize : 0,
            maxSize : 0
        },
        website : '',
        raised : '',
        address : '',
        culture: {
            youtube: '',
            videoThumbnail: ''
        },
    });

    const [{ email }, handleChange, submitForm, err] = useForm({
        state: {
            email: '',
            name: '',
            password: ''
        },
        validation: {
            name: {
                shouldNotBeEmpty: true,
                len: {
                    min: 3
                }
            },
            email: {
                shouldNotBeEmpty: true,
                contains: '@'
            },
            password: {
                shouldNotBeEmpty: true,
                len: {
                    min: 5,
                    max: 12
                }
            }
        }
    });

    const [formSteps, setSteps] = useState(1);

    const handleSteps = () => {
        if (formSteps >= 3) return;
        setSteps((prevStep) => prevStep + 1);
    };

    console.log(formSteps);

    const Step_1 = () => {
        return (
            <Formik
                initialValues={{
                    name: '',
                    tagline: '',
                    typeOfCorporation : '',
                    info : '',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Invalid email')
                        .required(`Your email should'nt be empty`),
                    password: Yup.string()
                        .min(7, `Password strength too low`)
                        .required(`Password should'nt be empty`)
                })}
                onSubmit={(values) => console.log(values)}
            >
                <View as={Form} width={'m'} autoComplete="new-password">
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
                                name="email"
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
                            name="email"
                            before
                            iconBefore={Email}
                            label="Moto"
                        />
                        <TextField
                            variant="primary.normal"
                            as="textarea"
                            rows="5"
                            placeholder="e.g. Market Square, 1355 Market St #900, San..."
                            name="email"
                            label="Address"
                        />
                    </StackVertical>
                </View>
            </Formik>
        );
    };
    const Step_2 = (
        <>
            <Stack gap={5}>
                <TextField
                    variant="primary.normal"
                    type="number"
                    placeholder="e.g. 2008"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    before
                    danger={err.email}
                    iconBefore={Email}
                    label="Established on"
                    width="100%"
                />
                <DataList
                    variant="primary.normal"
                    type="text"
                    placeholder="e.g. Software"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    before
                    danger={err.email}
                    iconBefore={Email}
                    label="Market"
                    flex="50%"
                    width="100%"
                    data={[
                        { id: 1, value: 'Internet', disabled: false },
                        { id: 2, value: 'Software', disabled: false },
                        { id: 3, value: 'MarketPlace', disabled: false },
                        { id: 4, value: 'Security', disabled: true },
                        { id: 5, value: 'Lodging', disabled: false },
                        { id: 6, value: 'Others', disabled: false }
                    ]}
                />
            </Stack>
            <Stack gap={5}>
                <DataList
                    variant="primary.normal"
                    type="text"
                    placeholder="e.g. 10-50"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    before
                    danger={err.email}
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
                    value={email}
                    onChange={handleChange}
                    before
                    danger={err.email}
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
                value={email}
                onChange={handleChange}
                danger={err.email}
                label="Describe your company"
            />
        </>
    );

    const Step_3 = (
        <>
            <DropAndFileUpload />
            <Text color="text.1" textAlign="center" py={5}>
                OR
            </Text>
            <TextField
                variant="primary.normal"
                type="number"
                placeholder="https://images.unsplash.com/ph......."
                name="email"
                value={email}
                onChange={handleChange}
                before
                danger={err.email}
                iconBefore={Email}
                width="100%"
            />
            <TextField
                variant="primary.normal"
                type="url"
                placeholder="https://www.youtube.com/watch?j..."
                name="email"
                value={email}
                onChange={handleChange}
                before
                danger={err.email}
                iconBefore={Email}
                label="Youtube video url"
                width="100%"
            />
        </>
    );

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
                        {formSteps === 1 ? Step_1 : formSteps === 2 ? Step_2 : Step_3}
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
                    {formSteps === 3 ? 'Register your company' : 'Next'}
                </Button>
            </View>
        </Page>
    );
};

export default Company;
