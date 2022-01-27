import * as React from "react";
import { lightTheme, darkTheme, TracerTheme } from "./themes";
import {
    ThemeProvider as StyledComponentsThemeProvider,
    ThemeContext,
    createGlobalStyle,
} from "styled-components";
import "./global.css";

interface ThemeProviderProps {
    isDark?: boolean;
}

// TODO update these with device config widths this is the bootstrap container
// https://github.com/twbs/bootstrap/blob/main/dist/css/bootstrap.css#L638-L662
const GlobalStyle = createGlobalStyle`
    .container {
      width: 100%;
      padding-right: 0.75rem;
      padding-left: 0.75rem;
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 576px) {
      .container {
        max-width: 540px;
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 720px;
      }
    }
    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
    }
    @media (min-width: 1200px) {
      .container {
        max-width: 1140px;
      }
    }
    @media (min-width: 1400px) {
      .container {
        max-width: 1320px;
      }
    }
`;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    isDark,
    children,
}) => {
    const theme = isDark ? darkTheme : lightTheme;
    return (
        <StyledComponentsThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledComponentsThemeProvider>
    );
};

export const useTheme = () => React.useContext<TracerTheme>(ThemeContext);
