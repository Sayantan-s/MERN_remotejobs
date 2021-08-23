import css from "@styled-system/css"
import { View, Flex } from "components"
import styled from "styled-components"

export const Picture = ({ src, alt, ...rest }) => {
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

export const Thumbnail = ({ src, alt, thumbwidth, thumbheight, ...rest }) => {
    return (
		<Flex alignItems="center" justifyContent="center" {...rest}>
			<img src={src} alt={alt} width={thumbwidth || 'auto'} height={thumbheight || 'auto'}/>
		</Flex>
	 )
}
