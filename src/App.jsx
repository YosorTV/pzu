import { Header, Main, Footer } from "@/components"
import logo from '@/assets/pzu-logo.svg';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
function App() {
  return (
    <>
      <GlobalStyles />
      <CssBaseline  />
      <Header logo={logo} title="PZU Emeryt +" copy="Pierwszy w Polsce emerytalny fundusz aktywnego zarabiania" />
      <Main />
      <Footer />
    </>
  )
}

export default App
