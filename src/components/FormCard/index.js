import React from 'react';
import Button from '@material-ui/core/Button';
import { Row } from 'mui-flex-layout';
import { Box, Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';

const BackgroundImageBox = styled(Box)`
  display: flex;
  flex: 1;
  margin: 70px 0;
  height: 70%;
  width: 70%;
`;
const FormBox = styled(Box)`
  display: flex;
  flex: 1;
  margin: 100px;
`;

const SumbmitButton = styled(Button)`
  margin: 50px 0;
`;
const FormCard = styled(Card)`
  max-width: 80%;
  max-height: 80%;
  display: flex;
  align-items: center;
  margin-top: 60px;
`;
const FormCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

export default ({ onSubmit, children }) => {
  return (
    <Row width={'100%'} height={'100%'} justifyContent="center" style={{ background: 'lightgrey' }}>
      <FormCard>
        <FormCardContent>
          <FormBox>
            <form onSubmit={onSubmit}>
              {children}
              <SumbmitButton color="primary" variant="contained" fullWidth type="submit">
                Submit
              </SumbmitButton>
            </form>
          </FormBox>
          <BackgroundImageBox>
            <img src={'../../../../assets/1.jpg'} />
          </BackgroundImageBox>
        </FormCardContent>
      </FormCard>
    </Row>
  );
};
