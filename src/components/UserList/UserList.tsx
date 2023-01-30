import * as React from 'react';
import { userListSelector, fetchUserList } from 'store/slices/usersSlice';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { getSecond } from 'store/integration/second';
import { Wrapper } from './UserList.styled';

const UserList: React.FC = () => {
  const userList = useAppSelector(userListSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(fetchUserList());
  const handleSecond = () => dispatch(getSecond());

  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>

      <button type="button" onClick={handleSecond}>
        HANDLE SECOND
      </button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserList;
