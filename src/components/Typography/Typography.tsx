import { cn } from '@/lib/utils'

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'label' | 'helper'
  children: React.ReactNode
  className?: string
}

const variantMap = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  caption: 'text-sm text-gray-500',
  label: 'text-sm font-medium',
  helper: 'text-sm text-gray-400'
}

export const Typography = ({ as = 'p', variant, children, className }: TypographyProps) => {
  const Component = as
  return <Component className={cn(variantMap[variant], className)}>{children}</Component>
}
