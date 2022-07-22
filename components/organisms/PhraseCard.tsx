import UserBar from '../molecules/UserBar'
import LanguageTextLine from '../molecules/LanguageTextLine'
import { Phrase, Comment } from '../../types/types'
import CommentCard from '../molecules/CommentCard'
import CommentFormCard from '../molecules/CommentFormCard'
import WhiteCardCase from '../atoms/WhiteCardCase'
import PhraseCardIconBar from '../molecules/PhraseCardIconBar'
import { useRouter } from 'next/router'

const PhraseCard: React.VFC<{ phrase: Phrase; comments?: Comment[] }> = ({
  phrase,
  comments,
}) => {
  const router = useRouter()
  const countComment = (commentCount: string[]): number => {
    try {
      return commentCount.length
    } catch (error) {
      return 0
    }
  }

  const routeDetailPhrase = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    router.push(`/phrases/${phrase.id}`)
  }

  return (
    <div className="flex flex-col w-full space-y-2" onClick={routeDetailPhrase}>
      <LanguageTextLine text={phrase.text} languageCode={phrase.textLanguage} />

      <LanguageTextLine
        text={phrase.translatedWord}
        languageCode={phrase.translatedWordLanguage}
      />
      <WhiteCardCase>
        <UserBar
          username={phrase.user.username}
          icon={phrase.user.icon}
          updatedAt={phrase.updatedAt}
        />
      </WhiteCardCase>
      <PhraseCardIconBar commentCount={countComment(phrase.comments)} />
      {comments && (
        <>
          <CommentFormCard phraseId={phrase.id} />
          <ul className="w-full space-y-2">
            {comments.map((comment) => (
              <li key={comment.id}>
                <WhiteCardCase>
                  <CommentCard comment={comment} />
                </WhiteCardCase>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default PhraseCard
