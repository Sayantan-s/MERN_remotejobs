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
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Broken } from 'assets/icons';
import { AnimatePresence } from 'framer-motion';
import StepA from 'components/page section/companyauth/StepA.component';
import StepB from 'components/page section/companyauth/StepB.component';
import StepC from 'components/page section/companyauth/StepC.component';

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

    const [formSteps, setSteps] = useState(0);

    const handleSteps = ({ action }) => {
        if (action === 'INCREMENT') {
            return formSteps < 2 && setSteps((prevStep) => prevStep + 1);
        }
        return formSteps > 0 && setSteps((prevStep) => prevStep - 1);
    };

    const MultiStepForm = [
        <StepA proceed={setSteps} />,
        <StepB proceed={setSteps} />,
        <StepC proceed={setSteps} />
    ];

    const onSubmit = async (values, handleSubmit, handleReset) => {
        let dataSubmission = {};
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
                flex="50%">
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
                    right="10">
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
                    width="100%">
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
                                    onClick={handleSteps}>
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
                </View>
            </View>
        </Page>
    );
};

export default Company;
