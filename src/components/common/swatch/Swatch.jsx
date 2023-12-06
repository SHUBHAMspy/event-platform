import React from 'react'
import { Swatch } from 'react-color/lib/components/common'

const SwatchComponent = ({hover,color,onClick, onSwatchHover, edge}) => {
  const hoverSwatch = {
    opacity: '0.5',
    boxShadow: `inset 0 0 0 4px ${color}`,
    transition: `opacity 150ms ease 0s`,
  }
  return (
    <>
      <Swatch
        color={color}
        onClick={onClick}
        style={{
          width: '24px',
          height: '24px',
          borderBottomRightRadius: `${edge === 'bottomRight' ? '12px' : 0}`,
          borderBottomLeftRadius: `${edge === 'bottomLeft' ? '12px' : 0}`,
          transition: `box-shadow 100ms ease 0s`,
        }}
        onHover={onSwatchHover}
        focusStyle={hoverSwatch}
      />
    </>
  )
}

export default SwatchComponent