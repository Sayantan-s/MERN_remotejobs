import styled from 'styled-components';
import { flexbox, border, space, color, layout, shadow, position, background, system } from 'styled-system';

const View = styled.div(
    {
      boxSizing : 'border-box'
    },
    flexbox,
    border,
    space,
    color, 
    layout, 
    shadow, 
    position,
    background
)

const Flex = styled(View)({
    display: 'flex'
})

const Page = styled(View)(
    {
        minHeight : '100vh'
    }
)
  
export const Text = system(
    {
      is: 'p',
      fontSize: 2,
      color: 'dark-gray',
      fontFamily: 'sansSerif',
    },
    // core
    'space',
    'width',
    'color',
    'fontSize',
    // typography
    'fontFamily',
    'textAlign',
    'lineHeight',
    'fontWeight',
    'letterSpacing',
  );
  Text.displayName = 'Text';
  
  export const Heading = system(
    {
      is: 'h1',
      m: 0,
      fontSize: 6,
      color: 'dark-gray',
      fontFamily: 'sansSerif',
    },
    // core
    'space',
    'width',
    'color',
    'fontSize',
    // typography
    'fontFamily',
    'textAlign',
    'lineHeight',
    'fontWeight',
    'letterSpacing',
  );
  Heading.displayName = 'Heading';
  
  export const Label = system(
    {
      is: 'label',
      fontSize: 1,
      mb: 2,
      align: 'center',
      fontFamily: 'sansSerif',
      color: 'dark-gray',
      fontWeight: 6,
    },
    {
      display: 'flex',
    },
    'alignItems',
    'space',
    'color',
  );
  
  Label.displayName = 'Label';
  
  export const Image = system(
    {
      is: 'img',
    },
    {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
    'space',
    'width',
    'color',
  );
  
Image.displayName = 'Image';