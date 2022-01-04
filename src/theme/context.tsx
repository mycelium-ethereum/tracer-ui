import * as React from "react";
import { lightTheme, darkTheme, TracerTheme } from "./themes";
import {
    ThemeProvider as StyledComponentsThemeProvider,
    ThemeContext,
} from "styled-components";

interface ThemeProviderProps {
    isDark?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    isDark,
    children,
}) => {
    const theme = isDark ? darkTheme : lightTheme;
    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    );
};

export const useTheme = () => React.useContext<TracerTheme>(ThemeContext);
