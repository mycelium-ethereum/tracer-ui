export interface TracerTheme {
    isDark: boolean;
    colors: {
        cell: {
            background: string;
            primary: string;
            secondary: string;
            gradient: string;
            stroke: string;
            overlay: string;
            hover: string;
            "highlight-stroke": string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            inactive: string;
            footnote: string;
            highlight: string;
        };
        action: {
            active: string;
            inactive: string;
            stroke: string;
            gradient: string;
            hover: string;
            text: string;
        };
        highlight: {
            primary: string;
        };
        alert: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
        danger: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
        success: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
    };
    fontFamily: {
        body: string;
        heading: string;
    };
    animationSpeed: {
        default: string;
    };
}

export const darkTheme: TracerTheme = {
    isDark: true,
    colors: {
        cell: {
            background: "#000A00",
            primary: "rgba(0, 9, 0, 0.2)",
            secondary: "#000A00",
            gradient:
                "linear-gradient(180deg, rgba(5, 67, 1, 0.2) 0%, rgba(5, 67, 1, 0) 65.01%)",
            stroke: "#003000",
            hover: "#03100E",
            overlay: "rgba(255, 255, 255, 0.2)",
            "highlight-stroke": "#098200",
        },
        action: {
            active: "#098200",
            inactive: "", // I (doylio) added this
            hover: "#003000", // I (doylio) added this
            stroke: "#003000",
            text: "#FFFFFF",
            gradient:
                "linear-gradient(267.64deg, rgba(0, 48, 0, 0.5) -84.72%, rgba(0, 48, 0, 0) 144.55%)",
        },
        highlight: {
            primary: "#583BD4",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#8B968C",
            tertiary: "#004E00",
            inactive: "#093806",
            footnote: "#D6DFE6",
            highlight: "#098200",
        },
        alert: {
            hover: "#FF700B",
            active: "#FF931E",
            text: "#FF931E",
            cell: "#FFF1E2",
        },
        danger: {
            hover: "#FF2A21",
            active: "#FF5621",
            text: "#FF5621",
            cell: "#FFE0D7",
        },
        success: {
            hover: "#4FC423",
            active: "#4FE021",
            text: "#4FE021",
            cell: "#EDFFE8",
        },
    },
    fontFamily: {
        heading: "'Inter', sans-serif",
        body: "'Source Sans Pro', sans-serif",
    },
    animationSpeed: {
        default: "0.3",
    },
};

// TODO: Add light theme
export const lightTheme: TracerTheme = {
    ...darkTheme,
    isDark: false,
};
