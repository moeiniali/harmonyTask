import React from 'react'
import { AtomText, AtomImage } from '../ExAllCo'

type Props = {}

const OrgVideo = (props: Props) => {
 return (
  <div className=' w-full h-auto  m-auto flex flex-col justify-center items-center pt-[40px] relative gap-12 '>
   <div className='backVideoImg absolute ' ></div>
   <AtomText children="دیگه وقتشه ابزارت رو ارتقا بدی" color='#F2B80C' size="32px" weight='500' />
   <AtomText children="یه دقیقه این ویدیو رو ببین" color='#fff' size="32px" weight='500' />
   <div className='max-w-[540px] h-auto z-50 '>
    <AtomImage src='/images/Vector1.svg' width="100%" height="100%" />
    <video width="540" height="240" controls>
     <source src='/videos/1.mp4' type='video/mp4' />
    </video>
    <AtomImage src='/images/Vector.svg' width="100%" height="100%" />

   </div>
   <div className='bgVideoImgBase absolute top-[70%]' ></div>
   <AtomImage src='/images/Asset 6 1.svg' width="600px" height="140px" className='absolute top-[92%] ' />

  </div>
 )
}

export default OrgVideo