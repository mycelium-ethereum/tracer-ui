require("colors");
const fs = require("fs");
const templates = require("./templates");

const directoryName = process.argv[2];
let componentName = process.argv[3];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

// Capitalize the first letter of the component name
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/${directoryName}/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) =>
  template(componentName, directoryName)
);

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

// Add index.ts to the component directory
fs.writeFileSync(
  `${componentDirectory}/index.ts`,
  `// Generated with util/create-component.js
export { ${componentName}Props } from "./${componentName}.types";
export { default as ${componentName} } from "./${componentName}";
`
);

// Update the index.ts of the parent directory
fs.appendFileSync(
  `./src/${directoryName}/index.ts`,
  `export * from "./${componentName}";\n`
);

console.log(
  "Successfully created component under: " + componentDirectory.green
);
