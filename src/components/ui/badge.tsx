
import React from 'react'
export function Badge({ children, variant='secondary', className='' }:{ children: React.ReactNode; variant?: 'secondary'|'outline'; className?: string }){
  const styles = variant === 'outline' ? 'border border-neutral-300 dark:border-neutral-700' : 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white';
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${styles} ${className}`}>{children}</span>
}
