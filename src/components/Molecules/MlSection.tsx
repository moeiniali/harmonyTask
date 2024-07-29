import React, { useState } from 'react';
import './molecule.css';
import { AtomImage, AtomText } from '../ExAllCo';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';


type MlSectionTypes = {
  srcCircle?: string
  src?: string
  children?: string
  Element?: string
  dropDownChild?: string
}

const MlSection: React.FC<MlSectionTypes> = ({ children, src, Element, dropDownChild }) => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false)



  const handlerElem = (element: string) => {
    switch (element) {
      case 'right':
        return (<>
          <div onClick={() => setIsDropDown(!isDropDown)} className={`sectionDiv transition-all  w-[368px] h-[100px] md:hover:scale-95 duration-700 flex items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer z-50 `}>
            <div className={`inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] ${isDropDown && 'max-md:bg-[#F2B80C]'} rounded-full border border-[#F2B80C]`}></div>
            <div className='flex  gap-2 items-center md:flex-row-reverse  ' dir='rtl ' >
              <AtomImage src={src} width={40} height={40} className='inner-img ' />
              <AtomText children={children} color='#fff' size="16px" weight='500' />
            </div>
            <div className='line hidden w-[58px]  h-[2px] bg-[#F2B80C] absolute right-[97%] duration-700'></div>
            {isDropDown && (
              <div className={`  w-[2px] h-[58px]  mt-20 ml-2 md:hidden bg-[#F2B80C] absolute  duration-700`}></div>
            )}

          </div>
          {isDropDown && (<>

            <div className='transition-all  w-[368px] h-auto  flex flex-col mt-3 bg-[#1936413d] p-2 duration-700 rounded-lg border border-[#F2B80C]'>
              <div className='w-full h-auto flex justify-end item-start'>
                <AtomText children={dropDownChild} color='#fff ' size="20px" />
              </div>
              <div className='w-full flex justify-start'>
                <AtomImage src='images/transformer 2 1.svg' />
              </div>
            </div>
          </>)}
        </>)
      case 'left':
        return (<>
          <div onClick={() => setIsDropDown(!isDropDown)} className={`max-md:flex-row-reverse sectionDiv w-[368px] h-[100px] flex-row md:hover:scale-95 duration-700 flex  items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer z-50`}>
            <div className='flex flex-row gap-2 items-center max-md:flex-row-reverse ' dir='rtl'>
              <AtomText children={children} color='#fff' size="16px" weight='500' className='text-left' />
              <AtomImage src={src} width={40} height={40} className='inner-img ' />
            </div>
            <div className={`inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] ${isDropDown && 'max-md:bg-[#F2B80C]'} rounded-full border border-[#F2B80C]`}></div>

            <div className='line hidden  w-[60px] h-[2px] bg-[#F2B80C] absolute left-[97%] duration-500'></div>
            {isDropDown && (
              <div className={`w-[2px] h-[58px]  mt-20 mr-[326px] md:hidden bg-[#F2B80C] absolute  duration-700`}></div>
            )}
          </div>

          {isDropDown && (<>

            <div className='transition-all  w-[368px] h-auto  flex flex-col mt-3 bg-[#1936413d] p-2 duration-700 rounded-lg border border-[#F2B80C]'>
              <div className='w-full h-auto flex justify-end item-start'>
                <AtomText children={dropDownChild} color='#fff ' size="20px" />
              </div>
              <div className='w-full flex justify-start'>
                <AtomImage src='images/transformer 2 1.svg' />
              </div>
            </div>
          </>)}


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