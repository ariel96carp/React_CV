import "../styles/css/styles.css"
import Header from "./sections/Header"
import Main from "./sections/Main"
import Footer from "./sections/Footer"
import { IntlProvider } from "react-intl"
import { connect } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

const App = ({ language }) => {
  return (
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
}

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps, {})(App)
