import React from 'react'

type Props = {
 weight?: string | undefined
 size?: number | string | undefined
 children?: any
 className?: string | undefined,
 color?: string | undefined
}

const AtomText = (props: Props) => {
 return (
  <>
   <p className={props.className}
    style={{ fontSize: props.size || '14', fontWeight: props.weight || '400', lineHeight: '28px', color: props.color || 'white' }}>
    {props.children}
   </p>
  </>
 )
}

export default AtomText