const commonProperties = {
    font : {
        family : 'Euclid Circular A',
        weight : {
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700
        }
    }
}


const themeLight = {
    ...commonProperties,
    color : {
        font : '#000',
        backgroundColor : '#f5f6ff',
        blue: {
            '50': '#f5f6ff', 
            '100': '#ecedff', 
            '200': '#cfd2ff', 
            '300': '#b1b7ff', 
            '400': '#7780ff', 
            '500': '#3d4aff', 
            '600': '#3743e6', 
            '700': '#2e38bf', 
            '800': '#252c99', 
            '900': '#1e247d'
        }
    }
}

const themeDark = {
    ...commonProperties,
    color : {
        font : '#fff',
        backgroundColor : '#000'
    }
}

export { themeLight, themeDark };