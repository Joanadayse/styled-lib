import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input', // Caminho que aparecerá no Storybook
  component: Input,
  tags: ['autodocs'], // para gerar documentação automática
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 🔹 Story padrão
export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
    value: '',
    onChange: () => {},
  },
};

// 🔹 Story com tipo number
export const NumberInput: Story = {
  args: {
    placeholder: 'Digite um número...',
    type: 'number',
    value: 0,
    onChange: () => {},
  },
};

// 🔹 Story com valor inicial
export const WithValue: Story = {
  args: {
    placeholder: 'Com valor inicial',
    value: 'Texto inicial',
    onChange: () => {},
  },
};
