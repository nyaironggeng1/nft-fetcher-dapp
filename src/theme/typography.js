function pxToRem(value) {
    return `${value / 16}rem`;
}
    
function responsiveFontSizes({ sm, md, lg, xl }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:992px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1440px)": {
            fontSize: pxToRem(lg),
        },
        "@media (min-width:1920px)": {
            fontSize: pxToRem(xl),
        },
    };
}

const typography = {
    
    fontFamily: 'Roboto',
    // fontWeightRegular: 400,
    // fontWeightMedium: 600,
    // fontWeightBold: 700,
    h1: {
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 28, md: 32, lg: 36, xl: 40 }),
    },
    h2: {
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 24, md: 27, lg: 30, xl: 32 }),
    },
    h3: {
        fontSize: pxToRem(28),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 26, xl: 28 }),
    },
    h4: {
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 18, md: 20, lg: 22, xl: 24 }),
    },
    h5: {
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 16, md: 17, lg: 18, xl: 20 }),
    },
    h6: {
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 14, md: 16, lg: 17, xl: 18 }),
    },
    subtitle1: {
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 16, md: 17, lg: 18, xl: 20 })
    },
    subtitle2: {
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 14, md: 12, lg: 13, xl: 18 })
    },
    body1: {
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ sm: 12, md: 13, lg: 14, xl: 16 })
    },
    body2: {
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 10, md: 11, lg: 12, xl: 14 })
    },
    caption: {
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 10, md: 11, lg: 12, xl: 14 })
    },
    overline: {
        fontSize: pxToRem(12),
        ...responsiveFontSizes({ sm: 6, md: 8, lg: 9, xl: 10 })
    },
    button: {
        fontSize: pxToRem(14),
        textTransform: "capitalize",
    },
};

export default typography;
    