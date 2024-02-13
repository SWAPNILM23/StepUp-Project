import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import UserRouter from './Routers/UserRouter';
import HomePage from './User/Components/HomePage';

function App() {
  return (
    <div className="App">
      <UserRouter></UserRouter>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
