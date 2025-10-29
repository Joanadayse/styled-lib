import type { Meta, StoryObj } from '@storybook/react';

const colors = [
  { name: 'primary', className: 'bg-blue-600' },
  { name: 'secondary', className: 'bg-sky-400' },
  { name: 'success', className: 'bg-green-500' },
  { name: 'warning', className: 'bg-yellow-400' },
  { name: 'danger', className: 'bg-red-500' },
  { name: 'neutral', className: 'bg-gray-200' },
];

const ColorPalette = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {colors.map((color) => (
      <div
        key={color.name}
        className="flex flex-col items-center gap-2 text-center"
      >
        <div className={`w-20 h-20 rounded-lg shadow ${color.className}`} />
        <span className="font-medium">{color.name}</span>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Cores',
  component: ColorPalette,
};

export default meta;
export const Default: StoryObj<typeof ColorPalette> = {};
