import Layout from '../components/templates/Layout'
import LoginCard from '../components/organisms/LoginCard'
import CardCase from '../components/atoms/CardCase'

const AuthPage: React.FC = () => {
  return (
    <Layout title="Login">
      <CardCase>
        <LoginCard />
      </CardCase>
    </Layout>
  )
}

export default AuthPage
