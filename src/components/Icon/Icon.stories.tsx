import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./index"; // importa todos os ícones exportados

const meta: Meta = {
  title: "Icons/All",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Coleção completa de ícones da biblioteca.

### 💡 Uso

~~~tsx
import { List, User, Home } from "@joana23a/styled-lib";

<List width={48} height={48} fill="red" />
~~~
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

// Cria dinamicamente uma grid com todos os ícones
export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "24px",
        textAlign: "center",
      }}
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name}>
          <Icon width={48} height={48}  />
          <p style={{ fontSize: "14px", marginTop: "8px" }}>{name}</p>
        </div>
      ))}
    </div>
  ),
};
