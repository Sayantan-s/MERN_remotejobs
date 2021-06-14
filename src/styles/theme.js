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
        backgroundColor : '#fff',
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