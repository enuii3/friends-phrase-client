import LanguageIcon from '../atoms/LanguageIcon'
import { LanguageCode } from '../../types/types'

type TextLanguageCode = {
  text: string
  languageCode: LanguageCode
  bgColor?: 'bg-gray-300'
}

const LanguageTextLine: React.VFC<TextLanguageCode> = ({
  text,
  languageCode,
  bgColor = null,
}) => {
  const defaultStyle = 'w-full flex justify-start items-center space-x-2'
  const activeStyle = `${defaultStyle} bg-gray-300 rounded-md p-1 md:p-2`
  const style = bgColor ? activeStyle : defaultStyle
  return (
    <div className={style}>
      <LanguageIcon languageCode={languageCode} />
      <p className="w-5/6 sm:w-11/12 break-words">{text}</p>
    </div>
  )
}

export default LanguageTextLine
