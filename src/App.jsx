import './App.scss'
import { CartLoader } from './components/cartHandler'
import { SmallCart } from './components/smallCart'

import {Header} from './containers/header'
import { MainPage } from './containers/mainpage'

function App() {


  return (
    <div className="App">
      <CartLoader/>
      <Header/>
      <SmallCart/>
      <MainPage/>
    </div>
  )
}

export default App
