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
    DropAndFileUpload,
    Text
} from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Broken } from 'assets/icons';
import { AnimatePresence } from 'framer-motion';

const Company = () => {
    const theme = useTheme();

    const [companyData, setCompanyData] = useState({
        logo: '',
        name: '',
        email: '',
        tagline: '',
        typeOfCorporation: '',
        info: '',
        size: {
            minSize: 0,
            maxSize: 0
        },
        website: '',
        raised: 0,
        established: 0,
        address: '',
        culture: {
            youtube: '',
            videoThumbnail: ''
        }
    });

    const StepA = () => {
        return (
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
                        hasIconLabel
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
                        hasIconLabel
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
                    hasIconLabel
                />
                <TextField
                    variant="primary.normal"
                    as="textarea"
                    rows="5"
                    placeholder="e.g. Market Square, 1355 Market St #900, San..."
                    name="address"
                    label="Address"
                    hasIconLabel
                />
            </StackVertical>
        );
    };
    const StepB = () => {
        return (
            <StackVertical gap={6}>
                <Stack gap={5}>
                    <TextField
                        variant="primary.normal"
                        type="number"
                        placeholder="e.g. 2008"
                        name="established"
                        before
                        iconBefore={Email}
                        label="Established on"
                        width="100%"
                        hasIconLabel
                    />
                    <TextField
                        variant="primary.normal"
                        type="email"
                        placeholder="e.g. airbnb@co.."
                        name="email"
                        before
                        iconBefore={Email}
                        label="Company Email"
                        hasIconLabel
                        width="100%"
                    />
                </Stack>
                <Stack gap={5}>
                    <DataList
                        variant="primary.normal"
                        type="text"
                        placeholder="e.g. 10-50"
                        name="size"
                        before
                        iconBefore={Email}
                        label="Employees"
                        width="100%"
                        hasIconLabel
                        data={[
                            { id: 1, value: '1-10', disabled: false },
                            { id: 2, value: '10-50', disabled: false },
                            { id: 3, value: '50-200', disabled: false },
                            { id: 4, value: '500-1001', disabled: true },
                            { id: 5, value: '1001-10000', disabled: false }
                        ]}
                    />
                    <DataList
                        variant="primary.normal"
                        type="text"
                        placeholder="e.g. Software"
                        name="typeOfCorporation"
                        before
                        iconBefore={Email}
                        label="Industry"
                        hasIconLabel
                        data={[
                            { id: 1, value: 'Internet', disabled: false },
                            { id: 2, value: 'Software', disabled: false },
                            { id: 3, value: 'MarketPlace', disabled: false },
                            { id: 4, value: 'Security', disabled: true },
                            { id: 5, value: 'Lodging', disabled: false },
                            { id: 6, value: 'Ecommerce', disabled: false }
                        ]}
                    />
                    <TextField
                        variant="primary.normal"
                        type="url"
                        placeholder="www.kimbpo.c..."
                        name="website"
                        before
                        iconBefore={Email}
                        label="Website"
                        hasIconLabel
                    />
                </Stack>
                <TextField
                    variant="primary.normal"
                    rows="5"
                    as="textarea"
                    placeholder="e.g. An American company that operates an online mar..."
                    name="info"
                    label="Describe your company"
                    hasIconLabel
                />
            </StackVertical>
        );
    };

    const StepC = () => {
        return (
            <StackVertical gap={6}>
                <DropAndFileUpload />
                <Text color="text.1" textAlign="center" py={5}>
                    OR
                </Text>
                <TextField
                    variant="primary.normal"
                    type="url"
                    placeholder="https://images.unsplash.com/ph......."
                    name="videoThumbnail"
                    before
                    iconBefore={Email}
                    width="100%"
                    hasIconLabel
                />
                <TextField
                    variant="primary.normal"
                    type="url"
                    placeholder="https://www.youtube.com/watch?j..."
                    name="youtube"
                    before
                    iconBefore={Email}
                    label="Youtube video url"
                    width="100%"
                    hasIconLabel
                />
            </StackVertical>
        );
    };

    const MultiStepForm = [<StepA />, <StepB />, <StepC />];

    const [formSteps, setSteps] = useState(0);

    const handleSteps = ({ action }) => {
        if (action === 'INCREMENT') {
            return formSteps < 2 && setSteps((prevStep) => prevStep + 1);
        }
        return formSteps > 0 && setSteps((prevStep) => prevStep - 1);
    };

    const onSubmit = async (values, handleSubmit, handleReset) => {
        let dataSubmission = {};
        //console.log(handleSubmit, handleReset)
        handleSteps({ action: 'INCREMENT' });
        if (formSteps === 2) {
            for (let [key, value] of Object.entries(values)) {
                if (key === 'size') {
                    const [min, max] = value.split('-');
                    dataSubmission = {
                        ...dataSubmission,
                        size: { minSize: +min, maxSize: +max }
                    };
                } else if (key === 'youtube' || key === 'videoThumbnail') {
                    dataSubmission = {
                        ...dataSubmission,
                        culture: {
                            [key]: values[key]
                        }
                    };
                } else {
                    dataSubmission = {
                        ...dataSubmission,
                        [key]: value
                    };
                }
            }
        }
        console.log(dataSubmission);
    };

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
            <View flex="50%" position="relative">
                <Flex
                    px="10"
                    position="absolute"
                    top="7"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Flex position="relative" width="100%">
                        <AnimatePresence>
                            {formSteps !== 0 && (
                                <Button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    p="0"
                                    variant="secondary.normal"
                                    size="8rem"
                                    borderRadius={'50%'}
                                    position="absolute"
                                    left="0"
                                    onClick={handleSteps}
                                >
                                    <Broken.ArrowLeft
                                        size="2.5rem"
                                        stroke={theme.colors.blue[6]}
                                        strokeWidth={2}
                                    />
                                </Button>
                            )}
                        </AnimatePresence>
                        <Link to="/" position="absolute" right="0">
                            <Logo />
                        </Link>
                    </Flex>
                </Flex>
                <View maxWidth="xl" m="0 auto" mt={13}>
                    <Formik
                        initialValues={{
                            logo: '',
                            name: '',
                            raised: '',
                            tagline: '',
                            address: '',
                            established: '',
                            typeOfCorporation: '',
                            size: '',
                            website: '',
                            info: '',
                            email: '',
                            youtube: '',
                            videoThumbnail: ''
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
                            address: Yup.string().min(2, 'Too Short to be an address!'),
                            email: Yup.string()
                                .email('Not a valid email!')
                                .required('You cannot leave the email empty!'),
                            youtube: Yup.string()
                                .matches(
                                    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                                    'Not a valid youtube url!'
                                )
                                .url('Not a valid url!')
                                .required(`Yotube url cannot be empty!`),
                            videoThumbnail: Yup.string().url('Not a valid website url!'),
                            established: Yup.number()
                                .positive('Invalid Year')
                                .integer('Invalid Year')
                                .min(1920, 'Are you sure? the company exist!')
                                .max(new Date().getFullYear(), `Yeah! No time-machines`)
                                .required('Add when you started!'),
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
                                .required(`Please provide company webite!`),
                            info: Yup.string()
                                .min(140, 'Too Short!')
                                .max(185, 'Too Long!')
                                .required(`Company info is mandatory!`)
                        })}
                    >
                        {(props) => {
                            console.log(props);

                            const { values, handleSubmit, handleReset } = props;

                            return (
                                <>
                                    <Form>
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
                                    </Form>
                                    <Button
                                        position="absolute"
                                        bottom="7"
                                        right="10"
                                        lay="xl"
                                        onClick={() => onSubmit(values, handleSubmit, handleReset)}
                                    >
                                        {formSteps === 2 ? 'Register your company' : 'Next'}
                                    </Button>
                                </>
                            );
                        }}
                    </Formik>
                </View>
            </View>
        </Page>
    );
};

export default Company;
