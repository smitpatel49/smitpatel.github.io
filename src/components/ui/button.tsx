
import React from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'secondary'|'outline'|'ghost', size?: 'default'|'icon' }
export function Button({ className='', variant='default', size='default', ...props }: Props){
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-400/60';
  const variants: Record<string,string> = {
    default: 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:brightness-105',
    secondary: 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white',
    outline: 'border border-neutral-300 dark:border-neutral-700',
    ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
  }
  const sizes: Record<string,string> = { default: '', icon: 'w-12 h-12 p-0 rounded-full' }
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
