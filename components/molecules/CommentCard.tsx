import { Comment } from '../../types/types'
import UserIcon from '../atoms/UserIcon'
import { formatDate } from '../../utils/formatDate'
import LanguageTextLine from './LanguageTextLine'

const CommentCard: React.VFC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="w-full bg-white rounded-md p-2">
      <div className="flex items-center justify-start space-x-2 ">
        <UserIcon />

        <div className="text-sm">
          <p className="text-gray-900 font-black">{comment.username}</p>
          <p date-testid="updatedAt" className="text-gray-600">
            {formatDate(comment.updatedAt)}
          </p>
        </div>
      </div>
      <LanguageTextLine
        bgColor="bg-gray-300"
        text={comment.text}
        languageCode={comment.textLanguage}
      />
    </div>
  )
}

export default CommentCard
