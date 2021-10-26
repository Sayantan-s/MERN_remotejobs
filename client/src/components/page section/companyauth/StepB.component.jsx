import React from 'react';
import { StackVertical, Stack, TextField, DataList, Button } from 'components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Email from 'assets/icons/Bulk/Email';
import Calender from 'assets/icons/Bulk/Calender'
import Employee from 'assets/icons/Bulk/Employee';
import Industry from 'assets/icons/Bulk/Industry';
import Website from 'assets/icons/Bulk/Website'

const StepB = () => {
    return (
        <Formik
            initialValues={{
                established: '',
                typeOfCorporation: '',
                size: '',
                website: '',
                info: '',
                email: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Not a valid email!')
                    .required('You cannot leave the email empty!'),
                established: Yup.number()
                    .positive('Invalid Year')
                    .integer('Invalid Year')
                    .min(1920, 'Are you sure? the company exist!')
                    .max(new Date().getFullYear(), `Yeah! No time-machines`)
                    .required('Add when you started!'),
                typeOfCorporation: Yup.mixed()
                    .oneOf(
                        ['Internet', 'Software', 'MarketPlace', 'Security', 'Lodging', 'Ecommerce'],
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
            })}>
            <StackVertical gap={6} as={Form}>
                <Stack gap={5}>
                    <TextField
                        variant="primary.normal"
                        type="number"
                        placeholder="e.g. 2008"
                        name="established"
                        before
                        iconBefore={Calender}
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
                        iconBefore={Employee}
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
                        iconBefore={Industry}
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
                        iconBefore={Website}
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
                <Button position="absolute" bottom="7" right="10" lay="xl">
                    Next
                </Button>
            </StackVertical>
        </Formik>
    );
};

export default StepB;
