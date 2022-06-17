import { Comment } from '../../types/types'
import LanguageTextLine from './LanguageTextLine'
import UserBar from './UserBar'

const CommentCard: React.VFC<{ comment: Comment }> = ({ comment }) => {
  return (
    <>
      <UserBar username={comment.username} updatedAt={comment.updatedAt} />
      <LanguageTextLine
        bgColor="bg-gray-100"
        text={comment.text}
        languageCode={comment.textLanguage}
      />
    </>
  )
}

export default CommentCard
