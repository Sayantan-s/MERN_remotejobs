import styled from 'styled-components';
import { View }from 'components';
import { background, compose, layout, system, color, space } from 'styled-system';
import { forwardRef } from 'react';
import css from '@styled-system/css';


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


const StackVertical = styled(View)(
	system({
		gap: {
			property: '&& > * + *',
			scale: 'space',
			transform: (value, scale) => ({ marginTop: scale[value] }),
		},
	})
);

//DIVIDER


const Divider = styled.hr(
	compose(
		layout,
		color,
		space
	)
)

//Image 

const Image = ({ src, alt, ...rest }) => {
	const Img = styled.img(css({
		position: 'absolute',
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		left: 0,
		top: 0
	}))
	
	return(
	<View {...rest} position="relative" overflow="hidden">
		<Img src={src} alt={alt} />
 	</View>
)}


export { Flex, Page, Stack, StackVertical, Divider, Image }