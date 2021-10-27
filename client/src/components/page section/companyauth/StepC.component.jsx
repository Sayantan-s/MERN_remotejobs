import React from 'react';
import { StackVertical, TextField, Text, DropAndFileUpload, Button } from 'components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Img from 'assets/icons/Bulk/Img';
import Youtube from 'assets/icons/Bulk/Youtube';

const StepC = () => {
    return (
        <Formik
            initialValues={{
                youtube: '',
                videoThumbnail: ''
            }}
            validationSchema={Yup.object().shape({
                youtube: Yup.string()
                    .matches(
                        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                        'Not a valid youtube url!'
                    )
                    .url('Not a valid url!')
                    .required(`Yotube url cannot be empty!`),
                videoThumbnail: Yup.string().url('Not a valid website url!')
            })}>
            <StackVertical gap={6} as={Form}>
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
                    iconBefore={Img}
                    width="100%"
                    hasIconLabel
                />
                <TextField
                    variant="primary.normal"
                    type="url"
                    placeholder="https://www.youtube.com/watch?j..."
                    name="youtube"
                    before
                    iconBefore={Youtube}
                    label="Youtube video url"
                    width="100%"
                    hasIconLabel
                />
                <Button position="absolute" bottom="7" right="10" lay="xl">
                    Create account
                </Button>
            </StackVertical>
        </Formik>
    );
};

export default StepC;
