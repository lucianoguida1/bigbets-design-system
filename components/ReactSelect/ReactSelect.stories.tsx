/* eslint-disable storybook/story-exports */
/* eslint-disable storybook/default-exports */
import React from 'react';
import { Meta, StoryObj } from "@storybook/react";

import ReactSelect, { type ReactSelectProps } from "./ReactSelect";

const meta: Meta<typeof ReactSelect> = {
  title: "Design System/Molecules/ReactSelect",
  component: ReactSelect,
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    url_api: {
      control: 'text', // Define o controle para editar no Storybook
      description: "URL da API para buscar os dados do select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReactSelect>;

export const Primary: Story = {
  args: {
    url_api: "http://localhost:3001/pais",
  },
};

export const Common: Story = {
  args: {
    url_api: "http://localhost:3001/pais",
  },
};
