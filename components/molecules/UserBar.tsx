import { formatDate } from '../../utils/formatDate'
import UserIcon from '../atoms/UserIcon'

interface User {
  username: string
  updatedAt: string
}

export const UserBar: React.VFC<User> = ({ username, updatedAt }) => {
  return (
    <div className="w-full flex items-center justify-start bg-white p-2 space-x-2 rounded-md">
      <UserIcon />

      <div className="text-sm">
        <p className="text-gray-900">{username}</p>
        <p date-testid="updatedAt" className="text-gray-600">
          {formatDate(updatedAt)}
        </p>
      </div>
    </div>
  )
}
