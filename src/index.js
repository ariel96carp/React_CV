import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from "react-redux"
import { persistor } from './components/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import store from "./components/redux/store"

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);


