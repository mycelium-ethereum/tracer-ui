import { ThemeProvider } from "../src/theme";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { lightTheme, darkTheme } from "../src/theme";
import "./global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: darkTheme.colors.cell.active,
      appContentBg: darkTheme.colors.cell.background,
      barBg: darkTheme.colors.cell.background,
    },
    light: {
      ...themes.normal,
      appBg: lightTheme.colors.cell.active,
      appContentBg: lightTheme.colors.cell.background,
      barBg: lightTheme.colors.cell.background,
    },
  },
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
