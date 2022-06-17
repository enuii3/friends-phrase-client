import { formatDate } from '../../utils/formatDate'
import UserIcon from '../atoms/UserIcon'

interface User {
  username: string
  updatedAt?: string
}

const UserBar: React.VFC<User> = ({ username, updatedAt }) => {
  return (
    <div className="w-full flex items-center justify-start space-x-2">
      <UserIcon />

      <div className="text-sm">
        <p className="text-gray-900">{username}</p>
        {updatedAt && (
          <p date-testid="updatedAt" className="text-gray-600">
            {formatDate(updatedAt)}
          </p>
        )}
      </div>
    </div>
  )
}

export default UserBar
