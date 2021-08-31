
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {
  return <DL.Wrapper>
    <Header />
    <DL.NavContent>
      <NavBar />
      { props.children }

    </DL.NavContent>
  </DL.Wrapper>
}

export default DefaultLayout