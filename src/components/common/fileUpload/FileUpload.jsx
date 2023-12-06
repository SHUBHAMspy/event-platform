import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import React from 'react'

const FileUpload = ({setFile}) => {
  const onUploadChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setFile(e.target.result)
    };
    console.log(e.target.files);
  }

  return (
    <>
    <div class="relative group w-full flex justify-center items-center">
      <input onChange={onUploadChange} accept=".jpg, .jpeg .png, .svg, .webp" className="relative z-10 opacity-0 h-full w-full cursor-pointer" type="file" name="bgfile" id="bgfile"/>
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full flex items-center justify-center">
        <ArrowUpTrayIcon className='h-6 w-8'/>      
      </div>
    </div>
      {/* <input 
        onChange={onUploadChange} 
        type='file' 
        accept='image/png, image/jpeg, image/gif'   
        className="relative z-10 opacity-0 h-full w-full cursor-pointer"
      />
      <ArrowUpTrayIcon className='h-6 w-6'/> */}
    </>
  )
}

export default FileUpload