import { Toast } from './Toast'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
}

export default meta

type Story = StoryObj<typeof Toast>

export const SuccessToast: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    return visible ? <Toast type="success" message="Action was successful" onClose={() => setVisible(false)} /> : null
  }
}
