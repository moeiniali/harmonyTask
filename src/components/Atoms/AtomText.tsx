import React from 'react'

type Props = {
 weight?: string | undefined
 size?: number | string | undefined
 children?: any
 className?: string | undefined,
 color?: string | undefined
 lineHeight?: string | undefined
}

const AtomText = (props: Props) => {
 return (
  <>
   <p dir='rtl' className={props.className}
    style={{
     fontSize: props.size || '14', fontWeight: props.weight || '400', lineHeight: props.lineHeight || '28px',
     color: props.color || 'white',
    }}>
    {props.children}
   </p>
  </>
 )
}

export default AtomText