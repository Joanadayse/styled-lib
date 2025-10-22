import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CustomSelect } from ".";

const meta: Meta<typeof CustomSelect> = {
  title: "Components/CustomSelect",
  component: CustomSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

// Mock de opções
const options = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
  { label: "Opção 3", value: "3" },
];

// 🔹 Default
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <CustomSelect options={options} value={value} onChange={setValue} />;
  },
};

// 🔹 Selected
export const Selected: Story = {
  render: () => {
    const [value, setValue] = useState("2");
    return <CustomSelect options={options} value={value} onChange={setValue} />;
  },
};

// 🔹 Disabled
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <CustomSelect options={options} value={value} onChange={setValue} disabled />;
  },
};

// 🔹 All States
export const AllStates: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("2");
    const [disabledValue, setDisabledValue] = useState("");

    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-1 font-semibold">Default</p>
          <CustomSelect options={options} value={defaultValue} onChange={setDefaultValue} />
        </div>
        <div>
          <p className="mb-1 font-semibold">Selected</p>
          <CustomSelect options={options} value={selectedValue} onChange={setSelectedValue} />
        </div>
        <div>
          <p className="mb-1 font-semibold">Disabled</p>
          <CustomSelect options={options} value={disabledValue} onChange={setDisabledValue} disabled />
        </div>
      </div>
    );
  },
};
