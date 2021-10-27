import { Flex, Heading, Text, View } from 'components/index';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';

const DropAndFileUpload = () => {
    //const [file, setFile] = useState('');

    const theme = useTheme();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Flex
            style={{
                cursor: 'pointer'
            }}
            justifyContent="center"
            alignItems="center"
            {...getRootProps()}
            bg="blue.1"
            height="sm"
            borderRadius={'37px'}
            backgroundImage={` url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='37' ry='37' stroke='%23${theme.colors.blue[4].slice(1).toUpperCase()}FF' stroke-width='3' stroke-dasharray='6%2c 40' stroke-dashoffset='88' stroke-linecap='round'/%3e%3c/svg%3e")`}
            borderColor="blue.2">
            <input {...getInputProps()} />
            <View textAlign="center">
                <Heading textAlign="center" level={5} fontWeight="bold">
                    Upload your office thumbnail here!
                </Heading>
                <View mt={3}>
                    {isDragActive ? (
                        <Text>Drop the files here ...</Text>
                    ) : (
                        <Text>Drag 'n' drop some files here, or click to select files</Text>
                    )}
                </View>
            </View>
        </Flex>
    );
};

export default DropAndFileUpload;
