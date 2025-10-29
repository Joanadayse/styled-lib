import type { Meta, StoryObj } from '@storybook/react';

const Typography = () => (
  <div className="flex flex-col gap-6 p-6">
    <div>
      <h1 className="text-4xl font-bold">Título 1 (text-4xl / font-bold)</h1>
    </div>
    <div>
      <h2 className="text-3xl font-semibold">Título 2 (text-3xl / font-semibold)</h2>
    </div>
    <div>
      <h3 className="text-2xl font-semibold">Título 3 (text-2xl / font-semibold)</h3>
    </div>
    <div>
      <p className="text-base">Parágrafo padrão (text-base)</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Texto auxiliar (text-sm / text-gray-600)</p>
    </div>
  </div>
);

const meta: Meta<typeof Typography> = {
  title: 'Design System/Tipografia',
  component: Typography,
};

export default meta;
export const Default: StoryObj<typeof Typography> = {};
