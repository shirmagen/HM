import React from 'react';
import { Row } from 'mui-flex-layout';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const headlines = ['שם פרטי', 'שם משפחה', 'שם משתמש', 'מייל', 'תפקיד', 'פעולות'];

const ApolloUserHeadlinesRow = styled(Row)`
  align-items: center !important;
  margin: 2px !important;
  justify-self: flex-start;
  align-self: center;
  background-color: rgb(238, 240, 244);
  justify-content: space-between;
  border-radius: 3px;
`;

const Headline = styled(Typography)`
  font-size: 20px;
  width: 15%;
  text-align: start;
`;

export default () => {
  const renderHeadlines = () => headlines.map((headline) => <Headline>{headline}</Headline>);

  return (
    <ApolloUserHeadlinesRow width={'100%'} height={'10%'}>
      {renderHeadlines()}
    </ApolloUserHeadlinesRow>
  );
};
