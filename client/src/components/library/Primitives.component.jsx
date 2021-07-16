import styled from 'styled-components';
import { View, Button }from 'components';
import { Link as Anchor } from 'react-router-dom';


const Flex = styled(View)({
    display: 'flex'
})

const Page = styled(View)(
    {
        minHeight : '100vh'
    }
)

const Link = ({ ...rest  }) => <Button as={Anchor} {...rest} />

Link.defaultProps = {
    variant : "secondary.normal"
}

export { Flex, Page, Link }