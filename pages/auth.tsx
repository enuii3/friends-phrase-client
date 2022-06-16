import Layout from '../components/templates/Layout'
import AuthCard from '../components/organisms/AuthCard'
import PhraseCardCase from '../components/atoms/PhraseCardCase'

const AuthPage: React.FC = () => {
  return (
    <Layout title="Login">
      <PhraseCardCase>
        <AuthCard />
      </PhraseCardCase>
    </Layout>
  )
}

export default AuthPage
