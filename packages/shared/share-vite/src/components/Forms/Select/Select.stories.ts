// Select.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import  Select  from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {};
