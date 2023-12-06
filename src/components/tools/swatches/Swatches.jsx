import React from 'react'
import Swatch from '../../common/swatch/Swatch'


export const Swatches = ({ colors, onClick, onSwatchHover }) => {
  const styles = {
    swatches: {
      marginTop: '5px',
      display: 'flex',
      flexDirecection: 'row',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      marginBottom: '5px',
    },
  }

  return (
    <div className='mt-1 mb-1 flex flex-wrap justify-center'>
      {colors.map((color, idx) => {
        let edge = ''
        if (idx === 8) {
          edge = 'bottomLeft'
        } else if (idx === 15) {
          edge = 'bottomRight'
        }
        return (
          <Swatch
            key={color}
            color={color}
            onClick={onClick}
            onSwatchHover={onSwatchHover}
            edge={edge}
          />
        )
      })}
    </div>
  )
}

export default Swatches