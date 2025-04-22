import { TextInput } from './TextInput'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
}

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  render: () => {
    const [args, updateArgs] = useArgs()
    return (
      <TextInput
        id="username"
        label="Username"
        value={args.value || ''}
        onChange={(val) => updateArgs({ value: val })}
      />
    )
  },
  args: {
    value: ''
  }
}

export const WithError: Story = {
  args: {
    id: 'email',
    label: 'Email',
    value: '',
    placeholder: 'you@example.com',
    error: 'Invalid email'
  },
  render: (args) => <TextInput {...args} onChange={() => {}} />
}
