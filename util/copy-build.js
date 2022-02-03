require("colors");
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const outputDirectory = process.argv[2];

if (!outputDirectory) {
    console.error("Please supply a valid output directory".red);
    process.exit(1);
}

const moduleToReplace = path.resolve(
    `${outputDirectory}/node_modules/@tracer-protocol/tracer-ui`,
);

if (!fs.existsSync(moduleToReplace)) {
    console.error(`${moduleToReplace} not found.`.red);
    process.exit(1);
}

const targetBuildDir = path.join(moduleToReplace, "build");
const sourceBuildDir = path.join(__dirname, "../build");

fs.rmSync(targetBuildDir, { recursive: true });
fse.copySync(sourceBuildDir, targetBuildDir);

console.log("Copied build to " + targetBuildDir.green);
