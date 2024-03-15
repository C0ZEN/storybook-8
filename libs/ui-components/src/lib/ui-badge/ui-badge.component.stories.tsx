import { UiBadge } from './ui-badge.component';
import { uiGetPrimeReactContextDecorator } from '../../../.storybook/ui-get-prime-react-context-decorator';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UiBadge> = {
  title: 'Badge',
  component: UiBadge,
  decorators: [uiGetPrimeReactContextDecorator()],
};

type Story = StoryObj<typeof UiBadge>;

export default meta;

export const Dot: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Badge as a dot.',
      },
    },
  },
};