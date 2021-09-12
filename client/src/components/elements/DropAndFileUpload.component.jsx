import { Flex, Heading, Text, View } from 'components/index'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

const DropAndFileUpload = () => {

        const [ file, setFile ] = useState('');

        const onDrop = useCallback(acceptedFiles => {
            console.log(acceptedFiles)
            // Do something with the files
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
        return (
        <Flex style={{
            cursor: "pointer"
        }} justifyContent="center" alignItems="center" {...getRootProps()} bg="blue.1" height="sm" borderRadius={8} borderStyle="dashed" borderColor="blue.2">
          <input {...getInputProps()} />
        <View textAlign="center">
            <Heading textAlign="center" level={5} fontWeight="bold">
                Upload your office thumbnail here!
            </Heading>
            <View mt={3}>
                {
                    isDragActive ?
                    <Text>Drop the files here ...</Text> :
                    <Text>Drag 'n' drop some files here, or click to select files</Text>
                }
            </View>
        </View>
        </Flex>
      )
}

export default DropAndFileUpload
