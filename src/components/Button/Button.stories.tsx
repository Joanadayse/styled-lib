import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

// 📘 Configuração principal
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tag", "action"],
      description: "Define o estilo visual do botão.",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o botão quando ativo.",
    },
    width: {
      control: { type: "number" },
      description: "Define a largura personalizada (em pixels).",
    },
    height: {
      control: { type: "number" },
      description: "Define a altura personalizada (em pixels).",
    },
    onClick: { action: "clicked" },
    children: {
      control: "text",
      description: "Texto ou conteúdo interno do botão.",
    },
  },
  args: {
    children: "Clique Aqui",
    variant: "primary",
    disabled: false,
    width: 120,
    height: 40,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 🟣 Variações de Exemplo
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primário",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secundário",
  },
};

export const Tag: Story = {
  args: {
    variant: "tag",
    children: "Etiqueta",
    width: 80,
    height: 28,
  },
};

export const Action: Story = {
  args: {
    variant: "action",
    children: "+",
    width: 32,
    height: 32,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Desativado",
    disabled: true,
  },
};
