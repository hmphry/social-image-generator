import Frame from './Frame.jsx'
import { Header2, Paragraph } from '@/components/Typography.jsx'
import Logo from '@/assets/new-logo.svg?react'

// icons
import { FaGlobe, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TitleFrame = ({title, children}) => {
    return (
        <Frame>
                <div className='vg-content flex flex-col justify-center gap-4'>
                    <Header2>{title}</Header2>
                    {children}
                    <Paragraph>-Emily Humphrey</Paragraph>
                    <div className="flex justify-between gap-4 pt-6  select-none">
                        <ul className='grid grid-cols-1 gap-1 pb-4'>
                            <li className='flex gap-2'>
                                <div className="pt-[.6rem]">
                                    <FaGlobe className="w-6 fill-green" />
                                </div>
                                <Paragraph className="text-bronze uppercase text-sm font-semibold tracking-wide max-w-full">hmphry.com</Paragraph>
                            </li>
                            <li className='flex gap-2'>
                                <div className="pt-[.6rem]">
                                    <FaGithub className="w-6 fill-green" />
                                </div>
                                <Paragraph className="text-bronze uppercase text-sm font-semibold tracking-wide max-w-full">github.com/hmphry</Paragraph>
                            </li>
                            <li className='flex gap-2'>
                                <div className="pt-[.6rem]">
                                    <FaLinkedinIn className="w-6 fill-green" />
                                </div>
                                <Paragraph className="text-bronze uppercase text-sm font-semibold tracking-wide max-w-full">linkedin.com/in/heyhmphry</Paragraph>
                            </li>
                            <li className='flex gap-2'>
                                <div className="pt-[.6rem]">
                                    <FaInstagram className="w-6 fill-green" />
                                </div>
                                <Paragraph className="text-bronze uppercase text-sm font-semibold tracking-wide max-w-full">instagram.com/heyhmphry</Paragraph>
                            </li>
                        </ul>
                    </div>
                </div>
        </Frame>
        )
}

export default TitleFrame;