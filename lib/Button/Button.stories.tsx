import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    type: "default",
    children: "Button",
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    type: "primary",
    children: "Button",
    ghost: true,
  },
};
