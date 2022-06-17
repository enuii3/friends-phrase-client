import Layout from '../components/templates/Layout'
import { GetStaticProps } from 'next'
import { getAllPhrasesData } from '../lib/fetch'
import { Phrases } from '../types/types'
import PhraseCard from '../components/organisms/PhraseCard'
import PhraseCardCase from '../components/atoms/PhraseCardCase'
import Link from 'next/link'

const MainPage: React.VFC<Phrases> = ({ phrases }) => {
  return (
    <Layout title="FriendsPhrase">
      <ul className="w-full">
        {phrases &&
          phrases.map((phrase) => (
            <li key={phrase.id}>
              <Link href={`/phrases/${phrase.id}`}>
                <a>
                  <PhraseCardCase hover={true}>
                    <PhraseCard phrase={phrase} />
                  </PhraseCardCase>
                </a>
              </Link>
            </li>
          ))}
      </ul>
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
