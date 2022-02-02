import { create } from "@storybook/theming";
import { lightTheme } from "../src/theme";

export default create({
    base: "light",
    brandTitle: "Tracer DAO",
    brandUrl: "https://tracer.finance",
    brandImage: "/tracer_logo.png",

    colorPrimary: lightTheme.colors.action.active,
    colorSecondary: lightTheme.colors.action.reverse,

    appBg: lightTheme.colors.cell.primary,
    appContentBg: lightTheme.colors.cell.background,
    appBorderColor: lightTheme.colors.cell.stroke,

    barSelectedColor: lightTheme.colors.action.active,
    barBg: lightTheme.colors.cell.primary,
});
