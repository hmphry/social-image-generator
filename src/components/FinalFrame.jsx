import Frame from './Frame.jsx'
import { Header2, Paragraph } from '@/components/Typography.jsx'
import Logo from '@/assets/eh-logo.svg?react'

// icons
import { FaGlobe, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TitleFrame = ({title, children}) => {
    return (
        <Frame>
                <div className='vg-content flex flex-col justify-center gap-4'>
                    <Header2>{title}</Header2>
                    {children}
                    <Paragraph>-Emily Humphrey</Paragraph>
                    <div className="flex flex-start gap-4 items-center pt-6">
                        <div><Logo className="w-30" /></div>
                        <ul className='grid grid-cols-1 gap-1'>
                            <li className='flex gap-2 items-center'><FaGlobe className="w-3" /><Paragraph className="font-display uppercase text-sm tracking-wide max-w-full">hmphry.com</Paragraph></li>
                            <li className='flex gap-2 items-center'><FaGithub className="w-3" /><Paragraph className="font-display uppercase text-sm tracking-wide max-w-full">github.com/hmphry</Paragraph></li>
                            <li className='flex gap-2 items-center'><FaLinkedinIn className="w-3" /><Paragraph className="font-display uppercase text-sm tracking-wide max-w-full">linkedin.com/in/heyhmphry</Paragraph></li>
                            <li className='flex gap-2 items-center'><FaInstagram className="w-3" /><Paragraph className="font-display uppercase text-sm tracking-wide max-w-full">instagram.com/heyhmphry</Paragraph></li>
                        </ul>
                    </div>
                </div>
        </Frame>
        )
}

export default TitleFrame;