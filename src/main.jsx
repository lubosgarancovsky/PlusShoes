import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {Provider} from 'react-redux'
import {store} from './redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemRoute } from './routes/itemRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/PlusShoes' element={<App />}/>
          <Route exact path='/PlusShoes/Item' element={<ItemRoute />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
