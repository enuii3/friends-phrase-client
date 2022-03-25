import Head from 'next/head'
import Header from './Header'

interface TITLE {
  title: string
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
    </div>
  )
}

export default Layout
