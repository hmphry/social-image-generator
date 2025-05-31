import cn from '@/utils/cn'

export const Header1 = ({ children, className }) => <h1 className={cn('text-6xl font-bold w-5/6', className)}>{children}</h1>
export const Header2 = ({ children, className }) => <h1 className={cn('text-5xl font-bold', className)}>{children}</h1>
export const Header3 = ({ children, className }) => <h1 className={cn('text-4xl font-bold', className)}>{children}</h1>
export const Header4 = ({ children, className }) => <h1 className={cn('text-3xl font-bold', className)}>{children}</h1>
export const Header5 = ({ children, className }) => <h1 className={cn('text-lg font-bold', className)}>{children}</h1>
export const Eyebrow = ({ children, className }) => <p className={cn('text-sm uppercase tracking-wider text-gray-400', className)}>{children}</p>
export const Paragraph = ({ children, className }) => <p className={cn('text-lg max-w-4/5', className)}>{children}</p>