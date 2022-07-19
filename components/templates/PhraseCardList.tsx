import { Phrases } from '../../types/types'
import PhraseCard from '../../components/organisms/PhraseCard'
import PhraseCardCase from '../../components/atoms/PhraseCardCase'

const PhraseCardList: React.VFC<Phrases> = ({ phrases }) => {
  return (
    <ul className="w-full">
      {phrases &&
        phrases.map((phrase) => (
          <li key={phrase.id}>
            <PhraseCardCase hover={true}>
              <PhraseCard phrase={phrase} />
            </PhraseCardCase>
          </li>
        ))}
    </ul>
  )
}
export default PhraseCardList
