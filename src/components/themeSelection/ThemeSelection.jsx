import React, { useContext, useRef, useState } from 'react'
import GradientGenerator from '../gradientGenerator/GradientGenerator'
import { EyeDropperIcon, PaintBrushIcon} from '@heroicons/react/24/outline'
import ColorPicker from '../tools/colorPicker/ColorPicker'
import { EditorContext } from '../../context/editorContext/EditorContext'
import { setBackGrounColor, setBackGroundImage} from '../../context/editorContext/actions'
import FileUpload from '../common/fileUpload/FileUpload'
import RandomImageUploader from '../common/randomImageUploader/RandomImageUploader'

const ThemeSelection = () => {
  const {state,dispatch} = useContext(EditorContext)
  const [showPicker, setShowPicker] = useState(false)
  const [gradientPicker, setGradientPicker] = useState(false)
  const gradientRef = useRef()
  
  const handleClose = () => {
    setShowPicker(false)
  }

  const handleChange = ({hex}) => {
    setBackGrounColor(dispatch,hex)
  }

  const handleFileUpload = (file) => {
    setBackGroundImage(dispatch,file)
  }

  const handleRandomImageGeneration = (imgUrl) => {
    setBackGroundImage(dispatch,imgUrl)
  }

  return (
    <div className='mt-4'>
    <span>Theme</span>
      <div className='flex items-center justify-between sm:gap-10'>
        <div className='flex flex-col items-center'>
          <div 
            className='h-10 w-12 p-2  rounded-lg relative' 
            style={{backgroundColor: state.backgroundColor}}           
          >
            <EyeDropperIcon className='h-6 w-8' onClick={() => setShowPicker(true)}/>
            {showPicker && (
              <div className='absolute z-50 -left-20'>
                <div className='fixed top-0 left-0 bottom-0 right-0' onClick={handleClose} />
                <ColorPicker
                  color={state.backgroundColor}
                  onChangeComplete={handleChange}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <span className='text-sm' >BgColor</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg bg-slate-200 p-2'>
            <RandomImageUploader 
              width={state.width} 
              height={state.height} 
              handleRandomImageGeneration={handleRandomImageGeneration} />
          </div>
          <span className='text-sm'>BgImage</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg relative bg-slate-200 p-2' onClick={() => setGradientPicker(true)}>
            <PaintBrushIcon className='h-6 w-8'/>
            {
              gradientPicker
              ? <GradientGenerator ref={gradientRef} setGradientPicker={setGradientPicker}/>
              :null
            }             
          </div>
          <span className='text-sm'>Gradient</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg bg-slate-200 p-2'>
            <FileUpload setFile={handleFileUpload}/>
          </div>
          <span className='text-sm'>Upload</span>
        </div>
        
      </div>
    </div>
  )
}

export default ThemeSelection