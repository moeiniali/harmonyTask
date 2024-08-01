import React, { MouseEventHandler, useEffect, useState } from 'react';
import './molecule.css';
import { AtomImage, AtomText } from '../ExAllCo';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';


type MlSectionTypes = {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
  srcCircle?: string
  src?: string
  children?: string
  Element?: string
  dropDownChild?: string
  id?: string
  showChildValue?: boolean
}

// Component definition
const MlSection: React.FC<MlSectionTypes> = ({ children, src, Element, showChildValue, dropDownChild, id, onClick, onMouseEnter }) => {


  // Function to handle rendering based on the element type
  const handlerElem = (element: string) => {



    switch (element) {
      case 'right':
        return (<>
          {/* Main div for 'right' element */}
          <div id={id} onMouseEnter={onMouseEnter} onClick={onClick} className={`sectionDiv transition-all gap-2 w-full h-[100px] lg:hover:scale-95 duration-700 flex items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer z-50 `}>
            <div className={`inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] ${showChildValue && 'max-md:bg-[#F2B80C]'} rounded-full border border-[#F2B80C]`}></div>
            <div  className='flex flex-row gap-2 items-center max-lg:flex-row-reverse  ' dir='rtl ' >
              <AtomImage src={src} width={40} height={40} className='inner-img ' />
              <AtomText children={children} color='#fff' size="16px" weight='500' />
            </div>
            <div className='line hidden w-[58px]  h-[2px] bg-[#F2B80C] absolute right-[97%] duration-700'></div>
            {showChildValue && (
              <div className={`  w-[2px] h-[58px]  mt-20 ml-2 md:hidden bg-[#F2B80C] absolute  duration-700`}></div>
            )}

          </div>
          {/* Conditional rendering for showing child value */}
          {showChildValue && (
            <div className='w-full lg:hidden  h-[415px]  flex flex-col justify-between  bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
              <AtomText children="contdfsdfsdfsdfsdfent" color='#fff ' size="20px" className='text-right' />
              <AtomImage src='images/transformer 2 1.svg' width={150} height={220} />
            </div>
          )}

        </>)
      case 'left':
        return (<>
          {/* Main div for 'left' element */}
          <div id={id} onMouseEnter={onMouseEnter} onClick={onClick} className={`max-lg:flex-row-reverse gap-2 sectionDiv w-full h-[100px] flex-row md:hover:scale-95 duration-700 flex  items-center justify-between px-4 rounded-md  bg-[#090801] cursor-pointer z-50`}>
            <div className='flex flex-row gap-2 items-center max-lg:flex-row-reverse  ' dir='rtl'>
              <AtomText children={children} color='#fff' size="16px" weight='500' className='text-left' />
              <AtomImage src={src} width={40} height={40} className='inner-img ' />
            </div>
            <div className={`inner-div w-[18px] h-[18px] hover:bg-[#F2B80C] ${showChildValue && 'max-md:bg-[#F2B80C]'} rounded-full border border-[#F2B80C]`}></div>

            <div className='line hidden  w-[60px] h-[2px] bg-[#F2B80C] absolute left-[97%] duration-500'></div>
            {showChildValue && (
              <div className={`w-[2px] h-[58px]  mt-20 mr-[326px] md:hidden bg-[#F2B80C] absolute  duration-700`}></div>
            )}
          </div>
          {/* Conditional rendering for showing child value */}
          {showChildValue && (
            <div className='w-full lg:hidden  h-[415px]  flex flex-col justify-between  bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
              <AtomText children="-----------------------------" color='#fff ' size="20px" className='text-right' />
              <AtomImage src='images/transformer 2 1.svg' width={150} height={220} />
            </div>
          )}

        </>)

      default:
        break;
    }

  }

  // Render the element based on the provided type (default to 'right')
  return (
    <>
      {handlerElem(Element || 'right')}
    </>
  )
}

export default MlSection;