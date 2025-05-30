import {useState, useEffect, useId } from 'react';
import {useFrame} from '@/data/frameData'
import cn from '@/utils/cn'

const Frame = ({classname, children}) => {
    const id = useId();
    const [pageNumber, setPageNumber] = useState(0);
    const { totalPages, addPage, removePage } = useFrame();

    useEffect(() => {
        setPageNumber(totalPages.length+1)
        addPage(id);
        return () => removePage(id);
    }, [setPageNumber, addPage, removePage, id]);



    useEffect(() => {
        setPageNumber(totalPages.indexOf(id) + 1);
    }, [totalPages, id]);
    
    return (
        <div className="relative z-0 size-[1080px] bg-white">
            <div className="vertical-grid">
                <div className="vg-header h-5 w-full bg-gradient-to-r from-pink to-blue"></div>
                <div className="vg-content">
                    <div className={cn("vertical-grid p-4", classname)}>
                        {children}
                    </div>
                </div>
                <div className='vg-footer flex justify-between gap-4 p-4'>
                    <p className='font-display uppercase tracking-wide'>HMPHRY.COM</p>
                    <p className='flex items-center gap-1 font-display uppercase tracking-wider'>{pageNumber}<span className='text-xs'>of</span>{totalPages.length}</p>
                </div>
            </div>
        </div>
        )
}

export default Frame;