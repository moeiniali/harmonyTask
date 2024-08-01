import React, { useState } from 'react'
import { AtomText, MlSection, AtomImage } from '../ExAllCo';

// Define section data
const sections = [
 { id: '1', content: "تنوع بالای ارز", src: '/images/Group 12939.svg' },
 { id: '2', content: '"پشتیبانی از Limit, Stop Limit و Market"', src: '/images/Group 12926.svg' },
 { id: '3', content: 'پشتیبانی 24 ساعته', src: '/images/Group 12930.svg' },
 { id: '4', content: 'اولین پلتفرم P2P و ترید در یک اکانت', src: '/images/Group 12906.png' },
 { id: '5', content: "امنیت بالا", src: 'images/Group 12927.svg' },
 { id: '6', content: "زیر ساخت قوی و سرعت بالا", src: 'images/Group 12900.svg' },
];



type Props = {}


const OrgSection: React.FC<Props> = (props: Props) => {
 // State to keep track of the active section
 const [activeSection, setActiveSection] = useState<string | null>('1');

 // Handler for clicking on a section
 const handlerClicked = (id: string) => {
  setActiveSection(id);
 }



 return (


  <div className='sm:w-9/12 w-full  h-auto m-auto flex flex-col justify-center items-center sm:px-8 px-2  pt-[40px] relative gap-12 top-40'>
   {/* Main title */}
   <AtomText children="چرا باید در بیدارزپرو معامله کنین؟" color='#F2B80C' size="32px" weight='500' lineHeight='50px' className='text-center ' />
   <div className='w-full h-auto m-auto flex  max-lg:flex-wrap justify-center overflow-x-hidden items-center gap-10 max-lg:gap-2'>


    <div className='w-full lg:w-auto flex flex-col gap-2'>
     {/* First column of sections */}
     {sections.slice(0, 3).map((section) => (
      <div key={section.id} className='flex flex-col gap-2'>
       <MlSection
        id={section.id}
        onClick={() => handlerClicked(section.id)}
        onMouseEnter={() => handlerClicked(section.id)}
        Element="left"
        children={section.content}
        src={section.src}
       />
       {/* Display section content in mobile view */}
       {activeSection === section.id && (
        <div className='w-full lg:hidden h-[415px] flex flex-col justify-between bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
         <AtomText children={section.content} color='#fff' size="20px" className='text-right' />
         <AtomImage src='images/transformer 2 1.svg' width={150} height={220} />
        </div>
       )}
      </div>
     ))}
    </div>
    {/* Display section content in desktop view */}
    <div className='hidden lg:flex lg:flex-col lg:items-center'>
     {activeSection && (
      <div className='w-72 h-[415px] flex flex-col justify-between bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
       <AtomText children={sections.find(section => section.id === activeSection)?.content || ''} color='#fff' size="20px" className='text-right' />
       <AtomImage src='images/transformer 2 1.svg' width={150} height={220} />
      </div>
     )}
    </div>
    {/* Second column of sections */}
    <div className='w-full lg:w-auto flex flex-col gap-2'>
     {sections.slice(3).map((section) => (
      <div key={section.id} className='flex flex-col gap-2'>
       <MlSection
        id={section.id}
        onClick={() => handlerClicked(section.id)}
        onMouseEnter={() => handlerClicked(section.id)}
        Element="right"
        children={section.content}
        src={section.src}
       />
       {/* Display section content in mobile view */}
       {activeSection === section.id && (
        <div className='max-w-full lg:hidden h-[415px] flex flex-col justify-between bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
         <AtomText children={section.content} color='#fff' size="20px" className='text-right' />
         <AtomImage src='images/transformer 2 1.svg' width={150} height={220} />
        </div>
       )}
      </div>
     ))}
    </div>
   </div>
  </div>




 )
}

export default OrgSection