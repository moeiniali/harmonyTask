import React from 'react'
import { OrgHeader, OrgFooter, OrgSlide, OrgVideo, OrgSection, OrgFormValidation } from '../ExAllCo'
type Props = {}

const TmMainLayout = (props: Props) => {
 return (
  <div>
   <OrgHeader />
   <OrgSlide />
   <OrgVideo />
   <OrgSection />
   <OrgFormValidation />
   <OrgFooter />


  </div>
 )
}

export default TmMainLayout