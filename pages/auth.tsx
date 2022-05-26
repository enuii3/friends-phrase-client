import Layout from '../components/templates/Layout'
import AuthCard from '../components/organisms/AuthCard'
import CardCase from '../components/atoms/CardCase'

const AuthPage: React.FC = () => {
  return (
    <Layout title="Login">
      <CardCase>
        <AuthCard />
      </CardCase>
    </Layout>
  )
}

export default AuthPage
