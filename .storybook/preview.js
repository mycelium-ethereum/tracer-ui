import { ThemeProvider } from "../src/theme";
import { useDarkMode } from "storybook-dark-mode";
import "./global.css";

const customViewports = {
  desktop: {
    name: 'MacBook',
    styles: {
      width: '1336px',
      height: '768px',
    },
  },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    viewport: { viewports: customViewports },
};

export const decorators = [
    (Story) => {
        const isDark = useDarkMode();
        return (
            <ThemeProvider isDark={isDark}>
                <Story />
            </ThemeProvider>
        );
    },
];
