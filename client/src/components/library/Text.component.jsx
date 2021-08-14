import styled from 'styled-components';
import { color, layout, space, typography, variant, position } from 'styled-system'

const variants = {
    body: {
		fontFamily: 'body',
		fontSize: 'base',
		fontWeight: 'regular',
		lineHeight: 'body',
		color: 'text.2',
	},
	disclaimer: {
		fontFamily: 'body',
		fontSize: 's',
		fontWeight: 'normal',
		lineHeight: 'body',
		color: 'secondary',
	},
	error: {
		fontFamily: 'body',
		fontSize: 'm',
		fontWeight: 'normal',
		lineHeight: 'body',
		color: 'danger.4',
	}
}

const Text = styled.p(
    {
        margin: 0,
		lineHeight: 1.5
    },
    variant({ variants }),
    color,
    typography,
    space,
    layout,
	position
)

Text.defaultProps = {
    variant : 'body'
}

export default Text;