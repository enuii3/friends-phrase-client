import Image from 'next/image'
import { LanguageCode } from '../../types/types'

export const LanguageIcon: React.VFC<{ languageCode: LanguageCode }> = ({
  languageCode,
}) => {
  return (
    <div className="flex justify-center items-center w-1/6 sm:w-1/12">
      <Image
        src={`/${languageCode}.svg`}
        alt={languageCode}
        width={35}
        height={25}
      />
    </div>
  )
}
