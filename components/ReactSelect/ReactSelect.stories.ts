import { Meta, StoryObj } from "@storybook/react";

import ReactSelect, { type ReactSelectProps } from "./ReactSelect";

const meta: Meta<ReactSelectProps> = {
  title: "Design System/Molecules/ReactSelect",
  component: ReactSelect,
  argTypes: {
    url_api: {
      control: 'text', // Define o controle para editar no Storybook
      description: "URL da API para buscar os dados do select",
    },
  },
};

export default meta;

export const Primary: StoryObj<ReactSelectProps> = {
  args: {
    url_api: "http://localhost:3001/pais"
  },
};
