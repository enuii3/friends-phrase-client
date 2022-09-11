import LanguageIcon from '../atoms/LanguageIcon'
import { TextLanguageCode } from '../../types/types'

const LanguageTextLine: React.VFC<TextLanguageCode> = ({
  text,
  languageCode,
  bgColor = null,
}) => {
  const defaultStyle = 'w-full flex justify-center items-center space-x-2'
  const activeStyle = `${defaultStyle} bg-gray-200 rounded-md p-1`
  const style = bgColor ? activeStyle : defaultStyle
  return (
    <div className={style}>
      <LanguageIcon languageCode={languageCode} />
      <p className="w-5/6 sm:w-11/12 break-words">{text}</p>
    </div>
  )
}

export default LanguageTextLine
