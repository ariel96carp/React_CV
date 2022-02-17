import "../styles/css/styles.css"
import Header from "./sections/Header"
import Main from "./sections/Main"
import Footer from "./sections/Footer"
import englishLanguage from "./lang/en-US.json"
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import { connect } from "react-redux"

const App = ({ language }) =>(
  <>
    <Router>
      <IntlProvider locale={language.locale} messages={language.messages}>
          <Header />
          <Main />
          <Footer />
      </IntlProvider>
    </Router>
  </>
)

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps, {})(App)
