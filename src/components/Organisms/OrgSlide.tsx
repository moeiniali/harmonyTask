import React from 'react';
import './Organism.css'
import { AtomText, AtomButton, AtomImage } from '../ExAllCo'
type Props = {}

const OrgSlide = (props: Props) => {

 
 const scrollToFooter = () => {
  window.scrollTo({
   top: 2800,
   behavior: "smooth"
  })
 };
 return (
  <div className='backSlideImg w-full h-auto m-auto flex flex-col justify-center items-start pt-[40px] relative gap-12 '>

   <div dir='rtl' className='max-w-[526px] h-auto m-auto flex flex-col items-center gap-6 leading-5'>

    <AtomText children="فصل درو از راه رسید" color='#F2B80C' size="32px" weight='500' />


    <p className='text-[#fff] w-auto relative inline-block  text-2xl font-normal leading-10 text-center  animate-pulse'> پلتفرم <span className='text-[#F2B80C] rounded-md pb-1  px-1 text-2xl font-medium bg-[#1e2109]'>بیدارز(Pro)</span>رونمایی شد
     <br />
     در این پلتفرم معامله کن و تا سقف <span className='text-[#F50148]  bg-[#151515] text-balance rounded-md pb-1 px-1 text-center'>100 ریپل</span> جایزه ببر
    </p>
   </div>

   <div className='max-w-[720px] h-auto m-auto flex flex-col items-center justify-center  gap-5'>
    <AtomButton onClick={scrollToFooter} bgColor='#F50148' width='240px' children="شروع ترید" radius='20px' color="#fff" padding="10px 16px" />
    <AtomImage  src='/images/Group 12950.svg' width="100%" height="100%" className='animate-pulse'/>

   </div>


  </div>
 )
}

export default OrgSlide