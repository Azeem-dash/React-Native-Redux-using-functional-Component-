import React from 'react'
import { View, Text } from 'react-native'
import store from './store'
import { Provider } from 'react-redux'

import Home from './component/Home'

export default function App() {
  return (
   <Provider store={store}>
    <Home/>
    </Provider>
  )
}
