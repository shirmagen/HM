import React, { useState } from 'react';
import { Row } from 'mui-flex-layout';
import { Typography, Box, IconButton } from '@material-ui/core';
import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import EditUserModal from './EditUserModal';
import useUserApi from '../../../../hooks/api/user.hook';
import { useAlert } from '../../../../Providers/AlertProvider';

const adminText = 'מנהל';
const guestText = 'אורח';

const ApolloUserCard = styled(Row)`
  background-color: whitesmoke;
  justify-content: space-around !important;
  align-items: center !important;
  padding: 2px 0;
  border-bottom: 2px rgb(239, 243, 241) solid;
`;

const CardTypography = styled(Typography)`
  font-family: Segoe UI, Tahome, Geneva, Verdana, sans-Serif;
  width: 10%;
`;

const Email = styled(CardTypography)`
  color: rgb(56, 136, 216);
`;

const Badge = styled(Box)`
  width: 10%;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
`;

const AdminTag = styled(Badge)`
  border: 1px solid red;
  background-color: rgb(255, 182, 147);
`;

const GuestTag = styled(Badge)`
  border: 1px solid green;
  background-color: rgb(204, 245, 224);
`;

export default ({
  user: {
    _id,
    name: { first, last },
    username,
    email,
    admin,
  },
  deleteUser,
  updateList,
}) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const toggleOpenUpdateModal = () => {
    setOpenUpdateModal(!openUpdateModal);
  };
  const { updateUser } = useUserApi();
  const { open, severities } = useAlert();

  const update = async ({ email: newEmail, name: newName }) => {
    try {
      const updatedUser = await updateUser(_id, { email: newEmail, name: newName });
      updateList(updatedUser);
      open('משתמש עודכן בהצלחה!', severities.success);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      open(message, severities.error);
    }
  };

  return (
    <>
      <ApolloUserCard width={'100%'} height={'10%'}>
        <CardTypography>{first}</CardTypography>
        <CardTypography>{last}</CardTypography>
        <CardTypography>{username}</CardTypography>
        <Email>{email}</Email>
        {admin == true ? (
          <AdminTag>
            <CardTypography>{adminText}</CardTypography>
          </AdminTag>
        ) : (
          <GuestTag>
            <CardTypography>{guestText}</CardTypography>
          </GuestTag>
        )}
        <IconButton
          onClick={() => {
            deleteUser(_id);
          }}
        >
          <DeleteOutlined />
        </IconButton>
        <IconButton onClick={toggleOpenUpdateModal}>
          <EditOutlined />
        </IconButton>
      </ApolloUserCard>
      {openUpdateModal && (
        <EditUserModal
          open={openUpdateModal}
          handleClose={toggleOpenUpdateModal}
          userDetails={{ firstName: first, lastName: last, email }}
          updateUser={update}
        />
      )}
    </>
  );
};
