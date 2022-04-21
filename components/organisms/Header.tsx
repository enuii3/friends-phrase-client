import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-pink-500 w-screen flex items-center pl-2 h-12 sm:pl-3 sm:h-14">
        <Link href="/">
          <a
            data-testid="logo-nav"
            className="text-white hover:text-white px-3 py-2 rounded"
          >
            FriendsPhrase
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
