import styled from 'styled-components';
import { View }from 'components';
import { system } from 'styled-system';


// FLEX
const Flex = styled(View)({
    display: 'flex'
})



//PAGE

const Page = styled(View)(
    {
        minHeight : '100vh'
    }
)

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