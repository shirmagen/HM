import React, { useState } from 'react';
import Map from '../components/Map';
import VerticalToolBar from '../components/VerticalToolBar';
import CreateButton from '../components/CreateNew';
import ApolloAppBar from '../components/AppBar';
import { Row } from 'mui-flex-layout';
import Modal from '../components/Modal';

export default () => {
  const [openedModal, setOpenedModal] = useState(false);

  const openModal = () => {
    console.log('open');
    setOpenedModal(true);
  };

  const closeModal = () => {
    console.log('close');
    setOpenedModal(false);
  };
  return (
    <Row width={'100%'} height={'100%'}>
      <ApolloAppBar />
      <Map />
      <VerticalToolBar />
      <CreateButton onClick={() => openModal()}/>
      <Modal show={openedModal} modalClosed={closeModal}>
        <h1>Hey (Your name here)!</h1>
      </Modal>
    </Row>
  );
};
