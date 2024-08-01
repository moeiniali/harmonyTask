import React, { useRef } from 'react'
import { AtomImage, AtomText, AtomButton } from '../ExAllCo'
type Props = {}

const OrgHeader = (props: Props) => {

 const scrollToFooter = () => {
  window.scrollTo({
   top: 2600,
   behavior: "smooth"
  })
 };

 return (
  <div className='w-full max-h-[100px] flex flex-row border-b py-1 px-2 justify-around items-center border-b-[#FFD62F] max-md:justify-between'>


   <AtomButton onClick={scrollToFooter} bgColor='#F50148' children="شروع ترید" radius='20px' color="#fff" padding="10px 16px" />



   <div className='flex flex-row gap-4 items-center '>
    <AtomText size='16px' weight="700" color='#fff' children="بیدارز پرو" />
    <AtomImage src='/images/12.svg' width={120} height={60} />
   </div>
  </div>
 )
}

export default OrgHeader