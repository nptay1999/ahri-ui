import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { EColor } from '../constants/enum'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type TStory = StoryObj<typeof Button>

export const Red: TStory = {
  args: {
    children: 'Button',
    color: EColor.RED,
  },
}

export const Blue: TStory = {
  args: {
    children: 'Button',
    color: EColor.BLUE,
  },
}

export const Dashed: TStory = {
  args: {
    type: 'dashed',
    children: 'Button',
  },
}

export const Link: TStory = {
  args: {
    type: 'link',
    children: 'Button',
  },
}

export const Text: TStory = {
  args: {
    type: 'text',
    children: 'Button',
  },
}

export const Ghost: TStory = {
  args: {
    type: 'primary',
    children: 'Button',
    ghost: true,
  },
}
