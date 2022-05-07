import CardCase from '../atoms/CardCase'
import { UserBar } from './UserBar'
import { PhraseTextLine } from './PhraseTextLine'
import { Phrase } from '../../types/types'

const PhraseCard: React.VFC<{ phrase: Phrase }> = ({ phrase }) => {
  return (
    <CardCase hover={true}>
      <div className="flex flex-col w-full space-y-2">
        <PhraseTextLine text={phrase.text} languageCode={phrase.textLanguage} />

        <PhraseTextLine
          text={phrase.translatedWord}
          languageCode={phrase.translatedWordLanguage}
        />

        <UserBar username={phrase.username} updatedAt={phrase.updatedAt} />
      </div>
    </CardCase>
  )
}

export default PhraseCard
