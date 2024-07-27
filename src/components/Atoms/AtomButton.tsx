import React from 'react'

type buttonType = {
 children?: any
 width?: string | undefined
 height?: string | undefined
 bgColor?: string | undefined
 radius?: string | undefined
 padding?: string | undefined
 color?: string | undefined
 fontSize?: string | undefined
 fontWeight?: string | undefined
}

const AtomButton: React.FC<buttonType> = ({ children, width, padding, height, color,
 fontSize, fontWeight, bgColor, radius }) => {
 return (
  <>
   <button className='hover:scale-95 duration-700'
    style={{
     fontSize: fontSize || '14px', fontWeight: fontWeight || '500',
     width: width, height: height, padding: padding, color: color,
     backgroundColor: bgColor, borderRadius: radius
    }}>{children}</button>
  </ >
 )
}

export default AtomButton