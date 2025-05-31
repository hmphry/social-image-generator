import Frame from './Frame.jsx'
import { Header2, Paragraph } from '@/components/Typography.jsx'
import Logo from '@/assets/eh-logo.svg?react'

const TitleFrame = ({title, children}) => {
    return (
        <Frame>
                <div className='vg-content flex flex-col justify-center gap-4'>
                    <Header2>{title}</Header2>
                    {children}
                    <div className="flex flex-start gap-4 items-center">
                        <div><Logo className="w-28" /></div>
                        <ul>
                            <li><Paragraph className="font-display uppercase text-md tracking-wide max-w-full">hmphry.com</Paragraph></li>
                            <li><Paragraph className="font-display uppercase text-md tracking-wide max-w-full">linkedin.com/in/heyhmphry</Paragraph></li>
                            <li><Paragraph className="font-display uppercase text-md tracking-wide max-w-full">instagram.com/heyhmphry</Paragraph></li>
                        </ul>
                    </div>
                </div>
        </Frame>
        )
}

export default TitleFrame;