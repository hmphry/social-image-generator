import {useEffect, useId, useRef, useState } from 'react';
import html2canvas from 'html2canvas'
import {useFrame} from '@/data/frameData'
import cn from '@/utils/cn'

import Button from './Button';

const Frame = ({classname, children}) => {
    const ref = useRef(null)
    const id = useId();
    const [pageNumber, setPageNumber] = useState(0);
    const { totalPages, addPage, removePage } = useFrame();

  const downloadImage = async () => {
    const canvas = await html2canvas(ref.current, { backgroundColor: null })
    const dataUrl = canvas.toDataURL('image/png')

    const link = document.createElement('a')
    link.download = `frame-${pageNumber}-of-${totalPages.length}.png`
    link.href = dataUrl
    link.click()
  }

    useEffect(() => {
        setPageNumber(totalPages.length+1)
        addPage(id);
        return () => {
            removePage(id);
        }
    }, [setPageNumber, addPage, removePage, id]);

    useEffect(() => {
        setPageNumber(totalPages.indexOf(id) + 1);
    }, [totalPages, id]);
    
    return (
        <section className="grid grid-cols-1 gap-4 justify-center items-center">
            <div className="flex justify-center">
            <div className="relative z-0 size-[1080px] overflow-hidden bg-white" ref={ref}>
                <div className="vertical-grid">
                    <div className="vg-header h-5 w-full frame-header"></div>
                    <div className="vg-content">
                        <div className={cn("vertical-grid p-4", classname)}>
                            {children}
                        </div>
                    </div>
                    <div className='vg-footer flex justify-between gap-4 p-4'>
                        <p className='font-display uppercase tracking-wide'>HMPHRY.COM</p>
                        <p className='flex gap-1 font-display uppercase tracking-wider'>{pageNumber}/{totalPages.length}</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
                <Button onClick={downloadImage}>Print Frame {pageNumber}</Button>
            </div>
        </section>
        )
}

export default Frame;