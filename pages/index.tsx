import Layout from '../components/templates/Layout'
import { GetStaticProps } from 'next'
import { getAllPhrasesData } from '../lib/fetch'
import { Phrases } from '../types/types'
import PhraseCardList from '../components/templates/PhraseCardList'

const MainPage: React.VFC<Phrases> = ({ phrases }) => {
  return (
    <Layout title="FriendsPhrase">
      <PhraseCardList phrases={phrases} />
    </Layout>
  )
}
export default MainPage

export const getStaticProps: GetStaticProps = async () => {
  const phrases = await getAllPhrasesData()
  return {
    props: { phrases },
    revalidate: 1,
  }
}
