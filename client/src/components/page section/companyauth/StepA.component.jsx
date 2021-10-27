import React from 'react';
import { StackVertical, Stack, TextField, Button } from 'components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CompanyName from 'assets/icons/Bulk/CompanyName';
import Networth from 'assets/icons/Bulk/Networth';
import CompanyMoto from 'assets/icons/Bulk/CompanyMoto';

const StepA = ({ proceed }) => {
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
            onSubmit={(values) => {
                console.log(values);
                proceed((prevState) => prevState + 1);
            }}>
            <StackVertical gap={6} as={Form}>
                <Stack gap={5}>
                    <TextField
                        variant="primary.normal"
                        type="text"
                        placeholder="e.g. Google"
                        name="name"
                        before
                        iconBefore={CompanyName}
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
                        iconBefore={Networth}
                        label="Net Worth"
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
                    iconBefore={CompanyMoto}
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
                <Button position="absolute" bottom="7" right="10" lay="xl">
                    Next
                </Button>
            </StackVertical>
        </Formik>
    );
};

export default StepA;
