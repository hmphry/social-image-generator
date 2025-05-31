import Frame from './Frame'
import { Header1 } from './Typography.jsx'
import Logo from '@/assets/eh-logo.svg?react'

const TitleFrame = ({title, description}) => {
    return (
        <Frame>
                <div className='vg-header flex justify-start items-center gap-4 '>
                    <Logo className="w-20" />
                    <div className='grid grid-cols-1'>
                        <p className='font-display uppercase tracking-wide font-medium'>Emily Humphrey</p>
                        <p className='font-display uppercase tracking-wide text-gray font-medium'>Full Stack Engineer</p>
                    </div>
                </div>
                <div className='vg-content flex flex-col justify-center gap-4'>
                    <Header1>{title}</Header1>
                    <div className='flex flex-col gap-4 pt-4'>
                        {description}
                    </div>
                </div>
        </Frame>
        )
}

export default TitleFrame;