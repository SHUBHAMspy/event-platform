import React, { useContext, useState } from 'react'
import { setFontFamily, setFontSize, setText, setTextColor } from '../../../context/editorContext/actions'
import { EditorContext } from '../../../context/editorContext/EditorContext'
import Dropdown from '../../common/dropDown/Dropdown'
import { SwatchIcon } from '@heroicons/react/24/outline'
import ColorPicker from '../colorPicker/ColorPicker'
import { set } from 'date-fns'

const TextEditor = () => {
  const {state,dispatch} = useContext(EditorContext)
  const [showPicker, setShowPicker] = useState(false)
  console.log(state);
  const fontSizeList = [20, 30, 40, 50, 60]
  const fontFamilyList = [
    
    'Arial',
    'Lato',
    'Roboto',
    'Poppins',
    'SANJUGotgam',
    'Song Myung',
    'Gowun Dodum',
    'Nanum Gothic Coding',
    'Nanum Pen Script',
    'Noto Serif KR',
    'Nanum Myeongjo',
    'Noto Sans KR',
    'Yeon Sung',
    'Do Hyeon',
    'Monaco',
    'Lobster',
    'Times New Roman',
    'Impact',
    'Helvetica',
    'Courier',
  ]

  const handleFontSize = (value) => {
    setFontSize(dispatch,value)
  }

  const handleFontFamily = (value) => {
    setFontFamily(dispatch,value)
  }
  const handleClose = () => {
    setShowPicker(false)
  }

  const handleChange = ({hex}) => {
    setTextColor(dispatch,hex)
  }

  return (
    <div className='flex flex-col items-center bg-slate-100 p-2 rounded-xl mt-8'>
    {/* <PickerIcon
      pickerType={PICKER_TYPE.TEXT}
      hexColor={state.textColor}
      pickerHandler={({ hex }) => actions.setTextColor(hex)}
    /> */}
    <div className='flex items-center justify-between w-full h-full'>
      <div className='flex gap-2 items-center'>
        <SwatchIcon className='w-6 h-6'/>
        <span>Color</span>
      </div>
      <div className='h-8 w-8 rounded-full border-2 relative border-zinc-700 flex items-center justify-center cursor-pointer'>
        <div className='h-6 w-6 p-1 rounded-full'onClick={() => setShowPicker(true)} style={{backgroundColor: state.textColor}} ></div>
        {showPicker && (
          <div className='absolute z-50 -left-32'>
            <div className='fixed top-0 left-0 bottom-0 right-0 ' onClick={() => handleClose()} />
            <ColorPicker
              color={state.backgroundColor}
              onChangeComplete={handleChange}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>
      

    
    <div className='flex items-center justify-between w-full h-full'>
      <div className='flex gap-2 items-center'>
        <ion-icon name="text-outline" ></ion-icon>
        <span>Typeface</span>
      </div>
      <div>
        <Dropdown options={fontFamilyList} onSelect={handleFontFamily}/>
        {/* <Select
          style={{ width: 80 }}
          placeholder='font size'
          defaultValue={state.fontSize}
          optionFilterProp='children'
          onChange={handleFontSize}>
          {fontSizeList.map((size) => (
            <Option key={size} value={size}>
              {size}
            </Option>
          ))}
        </Select> */}
      </div>
    </div>
    <div className='flex items-center justify-between w-full h-full'>
      <div className='flex gap-2 items-center'>
        <ion-icon name="speedometer-outline"></ion-icon>
        <span>Size</span>
      </div>
      <div>
        <Dropdown options={fontSizeList} onSelect={handleFontSize}/>
        {/* <Select
          style={{ width: 80 }}
          placeholder='font size'
          defaultValue={state.fontSize}
          optionFilterProp='children'
          onChange={handleFontSize}>
          {fontSizeList.map((size) => (
            <Option key={size} value={size}>
              {size}
            </Option>
          ))}
        </Select> */}
      </div>
    </div>
  </div>
  )
}

export default TextEditor