import React, { useState } from 'react';
import './molecule.css';
import { AtomImage, AtomText } from '../ExAllCo';
type MlSectionTypes = {
 srcCircle?: string
 src?: string
 children?: string
 Element?: string
}

const MlSection: React.FC<MlSectionTypes> = ({ children, src, Element }) => {


 const handlerElem = (element: string) => {
  switch (element) {
   case 'right':
    return (<>
     <div className={`sectionDiv w-[368px] h-[100px] hover:scale-95 duration-700 flex items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer `}>
      <div className='inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] rounded-full border border-[#F2B80C]'></div>
      <div className='flex flex-row gap-2 items-center' dir='rtl'>
       <AtomImage src={src} width={40} height={40} className='inner-img ' />
       <AtomText children={children} color='#fff' size="16px" weight='500' />
      </div>
     </div>
    </>)
   case 'left':
    return (<>
     <div className={`sectionDiv w-[368px] h-[100px] hover:scale-95 duration-700 flex  items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer `}>
      <div className='flex flex-row gap-2 items-center' dir='rtl'>
       <AtomText children={children} color='#fff' size="16px" weight='500' className='text-left' />
       <AtomImage src={src} width={40} height={40} className='inner-img ' />
      </div>
      <div className='inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] rounded-full border border-[#F2B80C]'></div>


     </div>
    </>)

   default:
    break;
  }

 }


 return (
  <>
   {handlerElem(Element || 'right')}
  </>
 )
}

export default MlSection;