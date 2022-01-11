export interface TracerTheme {
    isDark: boolean;
    colors: {
        cell: {
            background: string;
            primary: string;
            secondary: string;
            tertiary: string;
            stroke: string;
        };
        focus: {
            active: string;
            inactive: string;
            text: string;
            hover: string;
            reverse: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            footnote: string;
            highlight: string;
        };
        action: {
            active: string;
            inactive: string;
            hover: string;
            text: string;
            reverse: string;
        };
        alert: {
            hover: string;
            active: string;
            text: string;
        };
        danger: {
            hover: string;
            active: string;
            text: string;
        };
        success: {
            hover: string;
            active: string;
            text: string;
        };
    };
}

export const lightTheme: TracerTheme = {
    isDark: false,
    colors: {
        cell: {
            background: "#F9FAFA",
            primary: "#FFFFFF",
            secondary: "#F9FAFA",
            tertiary: "#E7ECF0",
            stroke: "#7D8795",
        },
        action: {
            active: "#1C64F2",
            inactive: "#C8DCFA",
            hover: "#3535DC",
            text: "#FFFFFF",
            reverse: "#B0CFFE",
        },
        focus: {
            active: "#D6DFE6",
            inactive: "#F1F6FA",
            text: "#192130",
            hover: "#C7D0D7",
            reverse: "#E2E8ED",
        },
        text: {
            primary: "#192130",
            secondary: "#4B5563",
            tertiary: "#7D8795",
            footnote: "#D6DFE6",
            highlight: "#1C64F2",
        },

        alert: {
            hover: "#FF700B",
            active: "#FF931E",
            text: "#FF931E",
        },
        danger: {
            hover: "#FF2A21",
            active: "#FF5621",
            text: "#FF5621",
        },
        success: {
            hover: "#4FC423",
            active: "#4FE021",
            text: "#4FE021",
        },
    },
};

// TODO: Add dark theme
export const darkTheme: TracerTheme = lightTheme;
