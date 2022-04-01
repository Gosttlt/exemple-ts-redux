import React from 'react'
import {Provider} from 'react-redux'

import Container from './components/common/Container'
import UserList from './components/UserList'
import {store} from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <UserList />
      </Container>
    </Provider>
  )
}

export default App
