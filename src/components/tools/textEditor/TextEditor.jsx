import React, { useContext } from 'react'
import { setFontFamily, setText } from '../../../context/editorContext/actions'
import { EditorContext } from '../../../context/editorContext/EditorContext'
import Dropdown from '../../common/dropDown/Dropdown'
import { SwatchIcon } from '@heroicons/react/24/outline'

const TextEditor = () => {
  const {state,dispatch} = useContext(EditorContext)
  console.log(state);
  const fontSizeList = [20, 30, 40, 50, 60, 70, 80, 90, 100]
  const fontFamilyList = [
    
    'Arial',
    'Lato',
    'Roboto',
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
    setText(dispatch,value)
  }

  const handleFontFamily = (value) => {
    setFontFamily(dispatch,value)
  }
  return (
    <div className='flex flex-col items-center bg-slate-100 p-2 rounded-xl mt-10'>
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
      <div className='h-8 w-8 rounded-full border-2 border-zinc-700 flex items-center justify-center'>
        <div className='h-6 w-6 p-1 rounded-full' style={{backgroundColor: state.textColor}} ></div>
      </div>
    </div>
      

    
    <div className='flex items-center justify-between w-full h-full'>
      <div className='flex gap-2 items-center'>
        <ion-icon name="text-outline" ></ion-icon>
        <span>Typeface</span>
      </div>
      <div>
        <Dropdown options={fontFamilyList}/>
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
        <Dropdown options={fontSizeList}/>
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