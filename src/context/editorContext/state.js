import { PICKER_TYPE } from "../../constants/ColorConstants"

const initialEditorState = {
  text: 'You are invited',
  selectedText: '',
  pickerType: PICKER_TYPE.BACKGROUND,
  textColor: '#000000',
  backgroundType: '',
  backgroundColor: 'rgb(203 213 225)',
  backgroundImage: '',
  href: '',
  fontSize: 40,
  fontFamily: 'arial',
  width: 400,
  height: 400,
}

export default initialEditorState