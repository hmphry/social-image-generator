import cn from '@/utils/cn'

export const Header1 = ({ children, className }) => <h1 className={cn('text-6xl font-bold max-w-4/5', className)}>{children}</h1>
export const Header2 = ({ children, className }) => <h2 className={cn('text-4xl font-bold max-w-4/5', className)}>{children}</h2>
export const Header3 = ({ children, className }) => <h3 className={cn('text-2xl font-bold max-w-4/5', className)}>{children}</h3>
export const Eyebrow = ({ children, className }) => <p className={cn('text-lg font-bold', className)}>{children}</p>
export const Paragraph = ({ children, className }) => <p className={cn('text-lg', className)}>{children}</p>