import "../styles/css/styles.css"
import Header from "./sections/Header"
import Main from "./sections/Main"
import Footer from "./sections/Footer"
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import englishLanguage from "./lang/en-US.json"
import spanishLanguage from "./lang/es-AR.json"

const App = () =>(
  <>
    <Router>
      <IntlProvider locale="en-US" messages={englishLanguage}>
          <Header />
          <Main />
          <Footer />
      </IntlProvider>
    </Router>
  </>
)

export default App;
