# Tracer UI Component Library

## Overview

This codebase exists as the component library for the Tracer ecosystem. All components in this library are built based on Atomic Design principles, and published as an npm package.

### [Contribution Guide](./docs/Contributing.md)

## Getting Started

### Installation

To use this package in a React app, install the npm package:

```
npm install @tracer-protocol/tracer-ui
```

Or with yarn:

```
yarn add @tracer-protocol/tracer-ui
```

### Tracer Theme
#### Setup

All of these components are built with the [styled-components](https://styled-components.com/) library, and use a global theme, which needs to be added to your app.  At the top level of your React app, add the theme provider.

```
import { ThemeProvider } from "@tracer-protocol/tracer-ui";

const MyApp = () => {
    return (
        <ThemeProvider>
            // The rest of your app
        </ThemeProvider>
    )
}

```

If you are using styled components, this will also give you access to the Tracer theme to use in your components.

```
const MyStyledComponent = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props)  => props.theme.fontFamily.heading};
`;
```

#### TypeScript

To get TypeScript to recognize the Tracer theme, add the module to your type declaration file:
```
// global.d.ts
import "styled-components";
import { TracerTheme } from "@tracer-protocol/tracer-ui";

declare module "styled-components" {
    export interface DefaultTheme extends TracerTheme {}
}
```

