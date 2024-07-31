import React from 'react'
import { OrgHeader, OrgFooter, OrgSlide, OrgVideo, OrgSection, OrgLogin, OrgFormValidation } from '../ExAllCo'
type Props = {}

const TmMainLayout = (props: Props) => {
 return (
  <div>
   <OrgHeader />
   <OrgSlide />
   <OrgVideo />
   <OrgSection />
   <OrgFormValidation />
   <OrgLogin />
   <OrgFooter />


  </div>
 )
}

export default TmMainLayout