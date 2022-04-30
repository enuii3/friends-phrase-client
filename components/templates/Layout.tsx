import React from 'react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface ChildrenTitle {
  children: React.ReactNode
  title: string
}

const Layout: React.VFC<ChildrenTitle> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="w-screen min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex justify-center my-4 h-full w-full">
        <div className="w-11/12 sm:w-8/12 lg:w-6/12 2xl:w-4/12">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
