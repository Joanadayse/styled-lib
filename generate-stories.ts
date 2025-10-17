import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = path.resolve(__dirname, 'src/components');

const generateStory = (componentName: string) => {
  return `import { ${componentName} } from './${componentName}';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    children: '${componentName}',
  },
};
`;
};

fs.readdirSync(COMPONENTS_DIR).forEach((folder) => {
  const componentPath = path.join(COMPONENTS_DIR, folder, `${folder}.tsx`);
  const storyPath = path.join(COMPONENTS_DIR, folder, `${folder}.stories.tsx`);

  if (fs.existsSync(componentPath) && !fs.existsSync(storyPath)) {
    const storyContent = generateStory(folder);
    fs.writeFileSync(storyPath, storyContent);
    console.log(`✅ Story created for ${folder}`);
  }
});