// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@kinam/share";

const meta: Meta<typeof Button> = {
  title: "DT/common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {};
