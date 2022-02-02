# New Component Guide

This document contains information related to creating a new component for the library.

## Figma

Any new components should be designed in Figma first by the Tracer design team to ensure there is visual consistency

## Atomic Design

We follow [atomic design principles](https://bradfrost.com/blog/post/atomic-web-design/) in this component library, based on the following structure:

**Atoms** are the simplest components, built from basic HTML elements
**Molecules** are built from one or more *atoms*
**Organisms** are built from *atoms* and *molecules*

## Generating New Components

Each component type can be generated with a yarn command:

```
yarn generate-atom [componentName]
yarn generate-molecule [componentName]
yarn generate-organism [componentName]
```

These commands will generate the following files in the directory that corresponds to their position in the component hierarchy.

- `index.ts` A top level export
- `[ComponentName].stories.tsx` The storybook configuration file
- `[ComponentName].tsx` The component source code
- `[ComponentName].types.ts` The component typedef file

## Defining Component Props

A component's props in the `.types.ts` file acts as its API and should be carefully considered. All states of the component should be reachable just by changing the props. Components need to be opinionated, but flexible.  If they are too rigid, they will not be used.  If they are too flexible, they will not provide visual consistency.  Consider the likely uses of this component, and build an API around that.

## Styling Components

[Styled Components](https://styled-components.com/) is used for component styling. Globally relevant style items (colors, fonts, etc) are defined in the styled components [global theme](./src/theme/themes.tsx). Reference the global theme variables as much as possible in styling your components.

## Connecting to Storybook

See the [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction) for information on how to configure the `.stories.ts` file.

# Other Resources

- [Contributing](./Contributing.md)
- [Build Testing](./Build-Testing.md)