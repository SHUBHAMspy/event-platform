import React, { useContext, useState } from 'react'
import TextBox from '../common/textBox/TextBox'
import { EditorContext } from '../../context/editorContext/EditorContext'
import { setText } from '../../context/editorContext/actions'

const Preview = () => {
  const {state:{height,text,fontSize,fontFamily,textColor,background,backgroundColor,backgroundImage,startColor,endColor,direction},dispatch} = useContext(EditorContext)
  const [contents, setContents] = useState('')
  const textList = ['You are invited']

  const handleKeyUp = (event) => {
    const editableDiv = event.target
    setText(dispatch,editableDiv.textContent.trim())
  }

  const textBoxList = textList.map((item, idx) => (
    <TextBox
      key={idx}
      text={item}
    />
  ))

  console.log(backgroundImage);
  return (
    <div className='wrapper'>
      <div
        id='editor'
        className='flex flex-col items-center justify-center rounded-xl'
        contentEditable='true'
        spellCheck={false}
        onKeyUp={handleKeyUp}
        suppressContentEditableWarning={true}
        style={{
          background : backgroundColor ? backgroundColor : `linear-gradient(${direction}, ${startColor}, ${endColor})`,
          height: `${height}px`,
          backgroundColor: (
            startColor && endColor 
            ? ''
            : backgroundImage
            ? ''
            : backgroundColor
          ),
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: textColor,
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
        }}>
        {textBoxList}
      </div>
    </div>
  )
}

export default Preview