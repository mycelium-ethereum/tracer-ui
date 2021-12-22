export interface TracerTheme {
  isDark: boolean;
  colors: {
    branding: {
      primary: string;
      secondary: string;
      text: string;
    };
    action: {
      active: string;
      inactive: string;
      hover: string;
      text: string;
    };
    cell: {
      background: string;
      active: string;
      inactive: string;
      highlight: string;
    };
    text: {
      active: string;
      inactive: string;
      highlight: string;
    };
  };
}

export const lightTheme: TracerTheme = {
  isDark: false,
  colors: {
    cell: {
      background: "#F9FAFB",
      active: "#FFFFFF",
      inactive: "#FFFFFF",
      highlight: "#F3F4F6",
    },
    text: {
      active: "#384051",
      inactive: "#9DA2AF",
      highlight: "#53A6F6",
    },
    action: {
      active: "#1500BF",
      inactive: "#8281E0",
      hover: "#7467E7",
      text: "#FFFFFF",
    },
    branding: {
      primary: "#100095",
      secondary: "#08007B",
      text: "#FFFFFF",
    },
  },
};

export const darkTheme: TracerTheme = {
  isDark: true,
  colors: {
    cell: {
      active: "#121828",
      background: "#1C2336",
      inactive: "#1D2634",
      highlight: "#384051",
    },
    text: {
      active: "#FAFAFA",
      inactive: "#D1D5DB",
      highlight: "#4DA3F6",
    },
    action: {
      active: "#3C0ADE",
      inactive: "#261A83",
      hover: "#2F18A7",
      text: "#FFFFFF",
    },
    branding: {
      primary: "#161554",
      secondary: "#080C14",
      text: "#FFFFFF",
    },
  },
};
