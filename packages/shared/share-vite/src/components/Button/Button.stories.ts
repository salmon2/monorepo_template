// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import  Button  from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {};
