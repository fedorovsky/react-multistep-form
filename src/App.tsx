import * as React from 'react';
import UserList from 'components/UserList';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from 'components/routes/Home';
import Users from 'components/routes/Users';
import NoMatch from 'components/routes/NoMatch';

const App: React.FC = () => (
  <div>
    <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="alt" />
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
      >
        Users
      </NavLink>
      <NavLink to="/nothing-here">Nothing</NavLink>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
    <UserList />
  </div>
);

export default App;
