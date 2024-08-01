import React from 'react';
import { Col } from 'antd'
import { OrgHeader, OrgFooter, OrgSlide, OrgVideo, OrgSection, OrgLogin, } from '../ExAllCo'




const TmMainLayout = () => {
 return (
  <div className='w-full h-auto flex justify-center items-center flex-col'>

   <OrgHeader />
   <OrgSlide />
   <OrgVideo />
   <Col className='w-full h-auto  flex flex-col justify-center items-center'>
    <OrgSection />
    <OrgLogin />
   </Col>
   <OrgFooter />


  </div>
 )
}

export default TmMainLayout;