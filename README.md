# Tracer UI Component Library

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Generate
There is a handy script that can be used to generate components instead of copying and pasting existing components.
These templates can be changed under ./util/templates.

To use the template simply run
```
npm run generate <(atom | molecule | organism)> <ComponentName>
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. I've hosted this library at: https://www.harveydelaney.com/react-component-library

### Generating New Components

Follow [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)


## Publishing

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```
