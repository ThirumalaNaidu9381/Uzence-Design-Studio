import { Typography } from './Typography'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Headings: Story = {
  render: () => (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
    </>
  )
}

export const Paragraph: Story = {
  render: () => (
    <>
      <Typography variant="p">This is a paragraph</Typography>
      <Typography variant="caption">This is a caption</Typography>
    </>
  )
}
