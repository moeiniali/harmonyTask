import React from 'react'
import { AtomImage, AtomText } from '../ExAllCo'
import { Link } from "react-router-dom";




type Props = {}

const OrgFooter = (props: Props) => {
 return (
  <div className='w-full h-[100px] bg-[#010F14] flex flex-row max-md:flex-col-reverse max-md:h-auto max-md:gap-4
   py-2 bottom-0 mt-40 px-2 justify-around items-center  max-md:justify-between'>




   <p className='text-white text-sm font-normal'>designed by <span className='text-white font-medium text-base'>HARMONY</span></p>


   <div className='flex gap-3 flex-row  items-center border border-[#FFD62F] rounded-full px-3 max-md:absolute max-md:mb-64' >
    <Link to="https://www.google.com ">
     <AtomImage src='/images/Frame 5.png' width={40} height={40} />
    </Link>
    <Link to="https://www.telegram.com">
     <AtomImage src='/images/Frame 6.png' width={40} height={40} />
    </Link>
    <Link to="https://www.whatsapp.com ">
     <AtomImage src='/images/Frame 7.png' width={40} height={40} />
    </Link>
    <AtomText children="بقیه رو هم خبر کن" size="14px" weight='400' />
   </div>

   <div className='w-full flex flex-row items-center justify-center md:hidden gap-2'>
    <Link to="https://www.instagram.com ">
     <AtomImage src='/images/icon (1).png' width={21} height={28} />
    </Link>
    <Link to="https://www.linkedin.com ">
     <AtomImage src='/images/icon (2).png' width={21} height={28} />
    </Link>
   </div>

   <div className='flex flex-row max-md:flex-col-reverse gap-4 items-center '>
    <AtomText size='24px' weight="700" color='#fff' children="بیدارز پرو" />
    <AtomImage src='/images/12.svg' width={120} height={60} />
   </div>
  </div>
 )
}

export default OrgFooter