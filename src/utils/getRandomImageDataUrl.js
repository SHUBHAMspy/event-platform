import { getRandomNumber } from "./getRandomNumber"


export const getRandomImageDataUrl = async(width, height) => {
  try {
    const response =  await fetch(`https://picsum.photos/seed/${getRandomNumber(1084)}/${width}/${height}`,)
    const blob = await response.blob()
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    })
    
  } catch (error) {
    console.error(error)
      throw error
  }
}
  