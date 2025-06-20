import * as React from 'react';

import { cn } from '@/lib/utils/index';
export type InputProps = React.ComponentProps<'input'> & { error?: boolean };

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
  return <input type={type} className={cn('border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', error && 'border-destructive focus-visible:ring-destructive', className)} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
