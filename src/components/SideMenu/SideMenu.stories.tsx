import type { Meta, StoryObj } from '@storybook/react';

import SideMenu from './SideMenu';

const meta = {
  title: 'Menu/SideMenu',
  component: SideMenu
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideMenuDefault: Story = {};
