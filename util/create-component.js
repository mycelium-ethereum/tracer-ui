require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentTypes = {
  'atom': 'atoms',
  'molecule': 'molecules',
  'organism': 'organisms'
}

const type = process.argv[2];
const componentName = process.argv[3];

if (!componentTypes[type]) {
  console.error("Please supply a valid component type (atom | molecule | organism)".red);
  process.exit(1);
}

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log(`Creating ${type} component with name: ${componentName}`);

const componentDirectory = `./src/${componentTypes[type]}/${componentName}`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if (fs.existsSync(componentDirectory)) {
  console.error(`${capitalizeFirstLetter(type)} component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

console.log(
  `Successfully created ${type} component under: ` + componentDirectory.green
);
