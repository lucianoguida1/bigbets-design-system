/* eslint-disable storybook/story-exports */
/* eslint-disable storybook/default-exports */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { type DropdownProps } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Molecules/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    list: [
      { id: '1', nome: 'Opção 1' },
      { id: '2', nome: 'Opção 2' },
      { id: '3', nome: 'Opção 3' },
    ],
    onChange: (id: string) => console.log('Selecionado:', id),
  },
};

export const Common: Story = {
  args: {
    list: [
      { id: '1', nome: 'Durward Reynolds' },
      { id: '2', nome: 'Kenton Towne' },
      { id: '3', nome: 'Therese Wunsch' },
      { id: '4', nome: 'Benedict Kessler' },
      { id: '5', nome: 'Katelyn Rohan' },
    ],
    onChange: (id: string) => console.log('Selecionado:', id),
  },
};
