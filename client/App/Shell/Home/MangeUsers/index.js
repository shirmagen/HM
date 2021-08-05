import React, { useEffect, useState } from 'react';
import { Column } from 'mui-flex-layout';
import useUserApi from '../../../hooks/api/user.hook';
import UserCard from './UserCard';
import styled from 'styled-components';
import UserHeadlines from './UserHeadlines';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import SearchNavBar from './SearchNavBar';
import { useAlert } from '../../../Providers/AlertProvider';
import NewUserModal from './NewUserModal';

const ApolloUsersTable = styled(Column)`
  background-color: aliceblue;
  justify-self: center;
  align-self: center;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-items: center;
  align-items: center;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }
`;

const MangeUserPage = styled(Column)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AddButton = styled(Fab)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgb(102, 127, 255);
  color: white;
`;

export default () => {
  const { getAll, deleteUser, insertUser } = useUserApi();
  const { open, severities } = useAlert();
  const [users, SetUsers] = useState([]);
  const [viewUsersList, setViewUsersList] = useState([]);
  const [openAddUser, setOpenAddUser] = useState(false);

  useEffect(() => {
    (async () => {
      const usersFetched = await getAll();
      SetUsers(usersFetched);
    })();
  }, []);

  useEffect(() => {
    setViewUsersList(users.map((user) => ({ ...user })));
  }, [users]);

  const deleteUserById = async (id) => {
    SetUsers(users.filter((user) => user._id != id));
    try {
      await deleteUser(id);
      open('משתמש נמחק בהצלחה!', severities.success);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      open(message, severities.error);
    }
  };

  const updateUserInList = (userToUpdate) => {
    const newList = users.map((user) => (user._id === userToUpdate._id ? userToUpdate : user));
    SetUsers(newList);
  };

  const toggleAddUserModal = () => {
    setOpenAddUser(!openAddUser);
  };

  const addUser = async (newUserDetails) => {
    try {
      const newUser = await insertUser(newUserDetails);
      SetUsers([...users, newUser]);
      open('משתמש נוסף בהצלחה!', severities.success);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      open(message, severities.error);
    }
  };

  const renderUsers = () =>
    viewUsersList.map((user) => (
      <UserCard
        key={user._id}
        user={user}
        deleteUser={deleteUserById}
        updateList={updateUserInList}
      />
    ));

  return (
    <MangeUserPage>
      <Column width={'80%'} height={'80%'}>
        <SearchNavBar users={users} setViewUsersList={setViewUsersList} />
        <UserHeadlines />
        <ApolloUsersTable width={'100%'} height={'100%'}>
          {renderUsers()}
        </ApolloUsersTable>
      </Column>
      <AddButton onClick={toggleAddUserModal}>
        <Add />
      </AddButton>
      {openAddUser && (
        <NewUserModal open={openAddUser} handleClose={toggleAddUserModal} addUser={addUser} />
      )}
    </MangeUserPage>
  );
};
