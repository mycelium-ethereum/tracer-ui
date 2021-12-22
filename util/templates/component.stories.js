module.exports = (componentName, directoryName) => ({
  content: `// Generated with util/create-component.js
  import React from "react";
  import ${componentName} from "./${componentName}";
  import { ${componentName}Props } from "./${componentName}.types";
  import { ComponentMeta, Story } from "@storybook/react";
  
  export default {
    title: "${directoryName}/${componentName}",
    component: ${componentName},
    argTypes: {
  
    },
  } as ComponentMeta<typeof ${componentName}>;
  
  // Create a master template for mapping args to render the ${componentName} component
  const Template: Story<${componentName}Props> = (args) => <${componentName} {...args}></${componentName}>;
  
  // Reuse that template for creating different stories
  export const Primary = Template.bind({});
  Primary.args = {
    foo: "bar"
  };
`,
  extension: `.stories.tsx`,
});
