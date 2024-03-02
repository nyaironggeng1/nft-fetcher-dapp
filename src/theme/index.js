import { CssBaseline } from "@mui/material";
import {
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
} from '@mui/material/styles';
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";

export default function ThemeConfig({children}) {
    const themeOptions = {
        palette: {...palette.dark, mode: 'dark'},
        typography,
        breakpoints
    };

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
