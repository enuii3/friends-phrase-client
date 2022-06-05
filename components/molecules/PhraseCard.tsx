import UserBar from './UserBar'
import LanguageTextLine from './LanguageTextLine'
import { Phrase, Comment } from '../../types/types'
import CommentCard from './CommentCard'

const PhraseCard: React.VFC<{ phrase: Phrase; comments?: Comment[] }> = ({
  phrase,
  comments,
}) => {
  return (
    <div className="flex flex-col w-full space-y-2">
      <LanguageTextLine text={phrase.text} languageCode={phrase.textLanguage} />

      <LanguageTextLine
        text={phrase.translatedWord}
        languageCode={phrase.translatedWordLanguage}
      />

      <UserBar username={phrase.username} updatedAt={phrase.updatedAt} />
      <ul className="w-full space-y-2">
        {comments &&
          comments.map((comment) => (
            <li key={comment.id}>
              <CommentCard comment={comment} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PhraseCard
