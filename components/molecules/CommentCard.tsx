import { Comment } from '../../types/types'
import LanguageTextLine from './LanguageTextLine'
import UserBar from './UserBar'

const CommentCard: React.VFC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="space-y-2">
      <UserBar
        username={comment.user.username}
        icon={comment.user.icon}
        updatedAt={comment.updatedAt}
      />
      <LanguageTextLine
        bgColor="bg-gray-100"
        text={comment.text}
        languageCode={comment.textLanguage}
      />
    </div>
  )
}

export default CommentCard
