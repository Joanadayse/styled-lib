import type { Meta, StoryObj } from "@storybook/react";
import { useState,type ChangeEvent } from "react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    rows: { control: "number" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// 🔹 Story padrão
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        placeholder={args.placeholder || "Digite algo..."}
      />
    );
  },
  args: {
    rows: 4,
  },
};

// 🔹 Com valor inicial
export const WithInitialValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("Texto inicial de exemplo.");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        placeholder={args.placeholder || "Digite algo..."}
      />
    );
  },
  args: {
    rows: 4,
  },
};

// 🔹 Com várias linhas
export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        placeholder={args.placeholder || "Área de texto grande..."}
      />
    );
  },
  args: {
    rows: 8,
  },
};
