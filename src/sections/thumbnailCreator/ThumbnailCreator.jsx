import React from 'react'
import ThemeSelection from '../../components/themeSelection/ThemeSelection'
import TextEditor from '../../components/tools/textEditor/TextEditor'
import Preview from '../../components/preview/Preview'

const ThumbnailCreator = () => {
  return (
    <section>
      <div className='rounded-xl w-full h-80 p-4 bg-slate-100'>
        <Preview/>
      </div>
      <div >
        <ThemeSelection/>
      </div>
      <TextEditor/>      
    </section>
  )
}

export default ThumbnailCreator