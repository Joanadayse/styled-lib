import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AlertModal } from ".";
import {  TrashAlert, CheckAlert } from "../Icon";

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal",
  component: AlertModal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    confirmText: { control: "text" },
    cancelText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

/* ------------------------- 🔹 Função base para render ------------------------- */
const Template = (args: any) => {
  const [open, setOpen] = useState(true);

  if (!open) return <button onClick={() => setOpen(true)}>Abrir Modal</button>;

  return (
    <AlertModal
      {...args}
      onConfirm={() => setOpen(false)}
      onCancel={() => args.cancelText ? setOpen(false) : undefined}
    />
  );
};

/* ----------------------------- ✅ Exemplos de uso ----------------------------- */


// ⚠️ Modal de confirmação (2 botões)
export const ConfirmDelete: Story = {
  render: Template,
  args: {
    title: "Deseja Deletar?",
    message: "Essa ação não poderá ser desfeita.",
    confirmText: "Voltar",  // primary
    cancelText: "Deletar",  // secondary
    icon: <TrashAlert width={100} height={100} fill="#EFB400" />,
  },
};
// 🎉 Modal de informação (apenas 1 botão)

export const InfoModal: Story = {
  render: Template,
  args: {
    title: "Reserva feita!",
    message: "A sua reserva escolhida foi reservada no sistema com sucesso.",
    confirmText: "Voltar", // botão único, fica primary
    cancelText: undefined,
    icon: <CheckAlert width={100} height={100} fill="#0FB56C" />,
  },
};



