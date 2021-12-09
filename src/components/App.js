import "../styles/css/styles.css"
import Header from "./sections/Header"
import Main from "./sections/Main"
import Footer from "./sections/Footer"
import { HashRouter as Router } from "react-router-dom"

const App = () =>(
  <>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </>
)

export default App;
