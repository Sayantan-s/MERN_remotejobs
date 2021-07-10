

export const Box = system(
    // core
    'space',
    'width',
    'color',
    'fontSize',
    // borders
    'borders',
    'borderColor',
    'borderRadius',
    // typography
    'textAlign',
    // layout
    'display',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
    // flexbox
    'alignItems',
    'alignContent',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
    // position
    'position',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left',
  );
  Box.displayName = 'Box';
  
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