import { LanguageIcon } from '../atoms/LanguageIcon'
import { LanguageCode } from '../../types/types'

type TextLanguageCode = {
  text: string
  languageCode: LanguageCode
}

export const PhraseTextLine: React.VFC<TextLanguageCode> = ({
  text,
  languageCode,
}) => {
  return (
    <div className="w-full flex justify-start items-center space-x-2">
      <LanguageIcon languageCode={languageCode} />
      <p className="w-5/6 sm:w-11/12 break-words">{text}</p>
    </div>
  )
}
