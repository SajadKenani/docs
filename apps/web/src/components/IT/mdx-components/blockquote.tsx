import { cn } from '@/lib/utils'

export const blockquote = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <blockquote
    className={cn('mt-6 pl-6 italic', className)}
    {...props}
  />
)
