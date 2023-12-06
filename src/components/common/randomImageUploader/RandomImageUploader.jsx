import React, { useCallback } from 'react'
import { getRandomImageDataUrl } from '../../../utils'
import { PhotoIcon } from '@heroicons/react/24/outline'

const RandomImageUploader = ({width,height,handleRandomImageGeneration}) => {
  const handleBackgroundImage = useCallback(async () => {
    // setLoading(true)
    try {
      const imageUrl = await getRandomImageDataUrl(width, height)
      handleRandomImageGeneration(imageUrl)      
    } catch (error) {
      console.log(error)
    }
  }, [handleRandomImageGeneration, height, width])

  return (
    <div onClick={handleBackgroundImage} >
      <PhotoIcon className='h-6 w-8'/>
    </div>
  )
}

export default RandomImageUploader