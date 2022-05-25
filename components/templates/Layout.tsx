import React from 'react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import {
  resetErrorMessage,
  selectErrorMessage,
} from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { XIcon } from '@heroicons/react/outline'

interface StaticProps {
  children: React.ReactNode
  title: string
}

const Layout: React.VFC<StaticProps> = ({ children, title = 'Nextjs' }) => {
  const errorMessage = useAppSelector(selectErrorMessage)
  const dispatch = useAppDispatch()

  return (
    <div className="w-screen min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {errorMessage && (
        <div className="w-full flex justify-center text-red-600 mt-5">
          {errorMessage}
          <XIcon
            className="h-6 w-6"
            aria-hidden="true"
            onClick={() => dispatch(resetErrorMessage())}
          />
        </div>
      )}
      <main className="flex justify-center my-4 h-full w-full">
        <div className="w-11/12 sm:w-8/12 lg:w-6/12 2xl:w-4/12">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
