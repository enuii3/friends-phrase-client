import { Comment } from '../../types/types'
import UserIcon from '../atoms/UserIcon'
import { formatDate } from '../../utils/formatDate'
import LanguageTextLine from './LanguageTextLine'
import UserBar from './UserBar'

const CommentCard: React.VFC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="w-full bg-white rounded-md p-2">
      <UserBar username={comment.username} updatedAt={comment.updatedAt} />
      <LanguageTextLine
        bgColor="bg-gray-300"
        text={comment.text}
        languageCode={comment.textLanguage}
      />
    </div>
  )
}

export default CommentCard
