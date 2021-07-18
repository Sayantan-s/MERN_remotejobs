import styled from 'styled-components';
import { View }from 'components';
import { system } from 'styled-system';
import { forwardRef } from 'react';


// FLEX
const Flex = styled(View)({
    display: 'flex'
})



//PAGE

const Page = forwardRef(({  cuttSpace = 0 , ...rest }) => <View minHeight={`calc(100vh - ${cuttSpace}px)`} {...rest} />)

Page.defaultProps = {
    width : [10/12],
    m : '0 auto'
}

//STACK

const Stack = styled(View)(
	system({
		gap: {
			property: '&& > * + *',
			scale: 'space',
			transform: (value, scale) => ({ marginLeft: scale[value] }),
		},
	})
);

Stack.defaultProps = {
    display: 'flex'
}

export { Flex, Page, Stack }