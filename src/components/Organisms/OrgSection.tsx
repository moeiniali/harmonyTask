import React from 'react'
import { AtomText, MlSection, AtomImage } from '../ExAllCo';
type Props = {}


const OrgSection = (props: Props) => {
 return (
  <div className=' w-full h-auto  m-auto flex flex-col justify-center items-center pt-[40px] relative gap-12 top-40 '>


   <AtomText children="چرا باید در بیدارزپرو معامله کنین؟ " color='#F2B80C' size="32px" weight='500' />

   <div className=' w-full h-auto m-auto  flex flex-wrap max-lg:flex-col  justify-center overflow-x-hidden items-center gap-10 max-md:gap-2 '>
    <div className='sectionBgImg absolute ' ></div>

    <div className='flex flex-col gap-2'>
     <MlSection Element="left" dropDownChild="تنوع بالای ارز" children="تنوع بالای ارز" src='/images/Group 12939.svg' />
     <MlSection Element="left" dropDownChild="پشتیبانی از Limit, Stop Limit و Market" children="پشتیبانی از Limit, Stop Limit و Market" src='/images/Group 12926.svg' />
     <MlSection Element="left" dropDownChild='پشتیبانی 24 ساعته' children='پشتیبانی 24 ساعته' src='/images/Group 12930.svg' />
    </div>

    <div className='w-72 h-[415px] max-lg:hidden flex justify-between items-center max-sm:hidden bg-[#1936413d] p-2 rounded-lg border border-[#F2B80C]'>
     <div className='w-full h-full z-50 flex justify-between items-start flex-col    text-right '>
      <AtomText children="بیدارز از اوایل سال 97 بعنوان اولین پلتفرم P2P مبادلات ارز دیجیتال وارد بازار شد و از آن زمان تاکنون بدون وقفه به کاربران خدمت رسانی کرده است." color='#fff ' size="20px" />
      <AtomImage src='images/transformer 2 1.svg' />
     </div>
    </div> 


    <div className='flex flex-col gap-2'>
     <MlSection Element="right" dropDownChild=' اولین پلتفرم  P2P و ترید در یک اکانت' children='اولین پلتفرم P2P  و ترید در یک اکانت' src='/images/Group 12906.png' />
     <MlSection Element="right" dropDownChild="امنیت بالا" children="امنیت بالا" src="images/Group 12927.svg" />
     <MlSection Element="right" dropDownChild="زیر ساخت قوی و سرعت بالا" children="زیر ساخت قوی و سرعت بالا" src="images/Group 12900.svg" />
    </div>


   </div>

  </div >
 )
}

export default OrgSection