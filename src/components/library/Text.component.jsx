import styled from 'styled-components';
import { color, layout, space, typography, variant } from 'styled-system'

const variants = {
    body: {
		fontFamily: 'body',
		fontSize: 'base',
		fontWeight: 'regular',
		lineHeight: 'body',
		color: 'text.0',
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
		color: 'error',
	}
}

const Text = styled.p(
    {
        margin: 0
    },
    variant({ variants }),
    color,
    typography,
    space,
    layout
)

Text.defaultProps = {
    variant : 'body'
}

export default Text;