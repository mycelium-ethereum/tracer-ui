export interface TracerTheme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    error: string;
  };
}

export const lightTheme: TracerTheme = {
  isDark: false,
  colors: {
    primary: "#3535DC",
    secondary: "#ff9800",
    error: "#f44336",
  },
};

export const darkTheme: TracerTheme = {
  isDark: true,
  colors: {
    primary: "purple",
    secondary: "yellow",
    error: "red",
  },
};
