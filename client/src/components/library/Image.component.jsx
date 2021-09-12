import css from '@styled-system/css';
import { View, Flex } from 'components';
import { Text } from 'components/index';
import styled from 'styled-components';

export const Picture = ({ src, alt, ...rest }) => {
    const Img = styled.img(
        css({
            position: 'absolute',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0
        })
    );

    return (
        <View {...rest} position="relative" overflow="hidden">
            <Img src={src} alt={alt} />
        </View>
    );
};

export const Thumbnail = ({ src, alt, thumbwidth, thumbheight, addButton, ...rest }) => {
    return (
        <Flex {...rest} {...(addButton && { position: 'relative' })}>
            {addButton && (
                <Flex
                    position="absolute"
                    bg="blue.5"
                    size="2.5rem"
                    bottom="3"
                    right="3"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    boxShadow="0px 15px 20px #3743e640"
                >
                    <Text as="span" color="blue.0" fontSize="2.5rem">
                        +
                    </Text>
                </Flex>
            )}
            <img src={src} alt={alt} width={thumbwidth || 'auto'} height={thumbheight || 'auto'} />
        </Flex>
    );
};
