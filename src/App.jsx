import { Provider } from 'react-redux'
import UsersList from './components/UsersList'
import UserForm from './components/UserForm'
import store from './store'

const App = () => (
  <Provider store={store}>
    <UsersList />
    <UserForm />
  </Provider>
)

export default App
