import { formatDate } from '../../utils/formatDate'
import UserIcon from '../atoms/UserIcon'
import { User } from '../../types/types'

const UserBar: React.VFC<User> = ({ username, icon, updatedAt }) => {
  return (
    <div className="w-full flex h-15 items-center justify-start space-x-2">
      <UserIcon icon={icon} iconSize={40} />
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
