import { ThemeProvider } from "../src/theme";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
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
