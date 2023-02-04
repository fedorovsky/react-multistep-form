import * as React from 'react';
import UserList from 'components/UserList';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from 'components/routes/Home';
import Users from 'components/routes/Users';
import NoMatch from 'components/routes/NoMatch';
import { MultistepForm } from './app/multistep-form';
import FormSwitcher from './components/FormSwitcher';
import FormInfo from './components/FormInfo';

const App: React.FC = () => (
  <div>
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
    <FormInfo />
    <FormSwitcher />
    <MultistepForm />
  </div>
);

export default App;
