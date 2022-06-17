import Link from 'next/link'
import { useEffect, Fragment } from 'react'
import { selectLoginUser } from '../../features/user/userSlice'
import { Menu, Transition } from '@headlessui/react'
import Cookie from 'universal-cookie'
import { fetchAsyncGetLoginUser } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/store'

const cookie = new Cookie()

const AuthenIcon: React.VFC = () => {
  const dispatch = useAppDispatch()
  const loginUserName = useAppSelector(selectLoginUser)

  useEffect(() => {
    const getLoginUser = async () => {
      await dispatch(
        fetchAsyncGetLoginUser({ access: cookie.get('accesstoken') })
      )
    }

    if (cookie.get('accesstoken')) {
      getLoginUser()
    }
  }, [dispatch])

  const logOut = () => {
    cookie.remove('accesstoken')
    window.location.href = '/'
  }

  return (
    <>
      {loginUserName ? (
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center text-white hover:text-gray-500">
              {loginUserName}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* My Pageは後日実装 */}
                <Menu.Item>
                  <button
                    className={
                      'text-gray-700 block w-full text-center px-4 py-2 text-sm'
                    }
                  >
                    My Page
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className={
                      'text-gray-700 block w-full text-center px-4 py-2 text-sm'
                    }
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <Link href="/auth" passHref>
          <svg
            data-testid="auth-icon"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      )}
    </>
  )
}

export default AuthenIcon
