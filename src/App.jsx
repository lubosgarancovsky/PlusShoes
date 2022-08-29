import './App.scss'
import { SmallCart } from './components/smallCart'

import {Header} from './containers/header'
import { MainPage } from './containers/mainpage'

function App() {


  return (
    <div className="App">
      <Header/>
      <SmallCart/>
      <MainPage/>
    </div>
  )
}

export default App
