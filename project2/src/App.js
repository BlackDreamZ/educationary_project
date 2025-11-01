import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
  NavLink,
  useSearchParams,
  Link,
  Navigate,
  useNavigate
} from 'react-router';

function User(){
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3001/user')
  })
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/old/123'>Old</Link> |
          <Link to='/new/456'>New</Link> |
        </nav>
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
