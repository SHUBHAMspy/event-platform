import React, { forwardRef, useContext, useRef, useState } from 'react'
import ColorPicker from '../tools/colorPicker/ColorPicker';
import { EditorContext } from '../../context/editorContext/EditorContext';
import { setBackGrounColor, setDirection, setEndColor, setStartColor } from '../../context/editorContext/actions';
import OutsideClick from '../../hooks/OutsideClick';

const GradientGenerator = forwardRef(({setGradientPicker},ref) => {
  // const [startColor, setStartColor] = useState('#ff0000');
  // const [endColor, setEndColor] = useState('#00ff00');
  // const [direction, setDirection] = useState('to right');
  const [showStartPicker, setShowStartPicker] = useState(false)
  const [showEndPicker, setShowEndPicker] = useState(false)
  const {state,dispatch} = useContext(EditorContext)


  OutsideClick(ref,setGradientPicker)
 console.log(state);
  const handleStartColorChange = (e) => {
    setStartColor(e.target.value);
  };

  const handleEndColorChange = (e) => {
    setEndColor(e.target.value);
  };

  const handleDirectionChange = (e) => {
    setDirection(dispatch,e.target.value)
    // setDirectin(e.target.value);
  };

  const handleStartChange = ({hex}) => {
    setStartColor(dispatch,hex)
    setBackGrounColor(dispatch,'')
  }
  const handleEndChange = ({hex}) => {
    setEndColor(dispatch,hex)
    setBackGrounColor(dispatch,'')
  }

  const handleClose = (type) => {
    switch (type) {
      case 'start':
        setShowStartPicker(false)
        return
      case 'end':
        setShowEndPicker(false)
        return    
      default:
        return;
    }
  }

  const gradientStyle = {
    // background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      {/* <div style={gradientStyle}>
        <h1>Your Gradient Background</h1>
      </div> */}
      <div ref={ref} className='absolute -left-16 flex flex-col gap-6 bg-white rounded-xl p-2 z-50 w-48 h-40'>
          <label className='text-sm flex items-center gap-10'>
            Start Color:
            <div className='h-8 w-8 rounded-full border-2 relative border-zinc-700 flex items-center justify-center cursor-pointer'>
              <div className='h-6 w-6 p-1 rounded-full'onClick={() => setShowStartPicker(true)} style={{backgroundColor: state.startColor}} ></div>
              {showStartPicker && (
                <div className='absolute z-50 -left-20'>
                  <div className='fixed top-0 left-0 bottom-0 right-0' onClick={() => handleClose('start')} />
                  <ColorPicker
                    color={state.startColor}
                    onChangeComplete={handleStartChange}
                    onChange={handleStartChange}
                  />
                </div>
              )}

            </div>
          </label>
          <label className='text-sm flex items-center gap-10'>
            End Color:
            <div className='h-8 w-8 ml-1 rounded-full border-2 relative border-zinc-700 flex items-center justify-center cursor-pointer'>
            <div className='h-6 w-6 p-1 rounded-full'onClick={() => setShowEndPicker(true)} style={{backgroundColor: state.endColor}} ></div>
        
            {showEndPicker && (
              <div className='absolute z-50 -left-20'>
                <div className='fixed top-0 left-0 bottom-0 right-0' onClick={() => handleClose('end')} />
                <ColorPicker
                  color={state.endColor}
                  onChangeComplete={handleEndChange}
                  onChange={handleEndChange}
                />
              </div>
            )}
      </div>

            {/* <input className='rounded-full h-8 w-8' type="color" value={endColor} onChange={handleEndColorChange} /> */}
          </label>     
        <label>
          Direction:
          <select value={ state.direction} onChange={handleDirectionChange}>
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to top">To Top</option>
            <option value="to bottom">To Bottom</option>
          </select>
        </label>
      </div>
    </>
  );

})

export default GradientGenerator