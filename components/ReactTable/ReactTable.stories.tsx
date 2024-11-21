/* eslint-disable storybook/story-exports */
/* eslint-disable storybook/default-exports */
import React from 'react';
import { Meta, StoryObj } from "@storybook/react";

import ReactTable, { type ReactTableProps } from "./ReactTable";

const meta: Meta<typeof ReactTable> = {
  title: "Design System/Molecules/ReactTable",
  component: ReactTable,
  argTypes: {
    data: [{}]
  },
};
const tableData = [
  { id: 1, name: "Alice", age: 24, score: 90 },
  { id: 2, name: "Bob", age: 27, score: 85 },
  { id: 3, name: "Charlie", age: 22, score: 92 },
  { id: 4, name: "Diana", age: 30, score: 88 },
  { id: 5, name: "Eve", age: 28, score: 75 },
  { id: 5, name: "Eve", age: 28, score: 75 },
];
export default meta;
type Story = StoryObj<typeof ReactTable>;

export const Primary: Story = {
  args: {
    data: tableData
  },
};
