const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [
        "@storybook/addon-essentials",
        "storybook-dark-mode"
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader"],
            include: path.resolve(__dirname, "../"),
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]],
            },
        });
        config.resolve.extensions.push(".ts", ".tsx");

        // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;  

        config.module.rules.push({
          test: /\.svg$/,
          enforce: 'pre',
          loader: require.resolve('@svgr/webpack'),
        });

        return config;
    },
    staticDirs: ["../src/assets"],
};
