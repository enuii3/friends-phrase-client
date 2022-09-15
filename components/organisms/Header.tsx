import Link from 'next/link'
import AuthenIcon from '../../components/atoms/AuthenIcon'
import CreatePhraseIcon from '../atoms/CreatePhraseIcon'

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-center items-center bg-pink-500">
        <div className="my-2 md:my-4 flex items-center w-11/12 sm:w-8/12 lg:w-6/12 2xl:w-4/12">
          <Link href="/">
            <a className="text-xl sm:text-2xl text-white hover:text-white">
              FriendsPhrase
            </a>
          </Link>
          <div className="w-full flex justify-end items-center space-x-4 md:space-x-6 lg:space-x-8">
            <CreatePhraseIcon />
            <AuthenIcon />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
