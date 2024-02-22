import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { Work_Sans } from "next/font/google";

const roboto = Work_Sans({
    weight: ['300', '400', '500','600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
});

export const mainTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#0F83AB',
        },
        secondary: {
            main: '#AC0A17'
        },
        info: {
            main: '#000000'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 600,
            lg: 1025,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCheckbox: {
            defaultProps: {
                color: "secondary",
            },

        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '40px !important',
                    padding: '0px !important'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '20px !important',
                    backgroundColor: 'white',
                    maxWidth: '1000px',
                    alignSelf: 'center',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#AC0A17 ',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#AC0A17 ',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#AC0A17 ',
                    },
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    transform: 'rotate(270deg) !important',
                    marginRight: '15px',
                    marginTop: '2px',
                },
                iconOpen: {
                    transform: 'rotate(90deg) !important'
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#434343'
                }
            }
        },
        MuiButton: {
            variants:[{
                props:{variant:'contained'},
                style:{
                    borderRadius: '4px !important'
                }
            }],
            styleOverrides: {
                root: {
                    borderRadius: '15px !important',
                    textTransform: "none",
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: '#AC0A17',
                    "&. MuiFormHelperText-contained": {
                        content: '"45"'
                    }
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#AC0A17',
                        },
                        '&:hover fieldset': {
                            borderColor: '#AC0A17',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#AC0A17',
                        },
                    },
                }
            }
        }
    },

}))