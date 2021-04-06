import React from 'react';
import { Row } from 'mui-flex-layout';
import styled from 'styled-components';
import { Button, Card, TextField } from '@material-ui/core';

export default () => {
  // in the future there will be type and name
  const parameters = [1, 2, 3];
  const results = [1, 2, 3];

  return (
    <>
      <Row width={'100%'} style={{ justifyContent: 'space-around' }}>
        {parameters.map((x) => (
          <Card style={{ padding: '8px', height: '50px', width: '70px', margin: '10px' }}>
            <TextField
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ background: 'white' }}
              onKeyPress={(event) => {
                if (event.key == 'Enter') {
                  console.log('hi');
                  // put the login here
                }
              }}
            >
              blah1
            </TextField>
          </Card>
        ))}
        <span> {'< ----'} </span>
        {results.map((x) => (
          <Card style={{ padding: '8px', height: '50px', width: '70px', margin: '10px' }}>
            <TextField
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ background: 'white' }}
            >
              blah1
            </TextField>
          </Card>
        ))}
      </Row>
      <Button
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          borderRadius: '20px',
          maxWidth: '40px',
          minWidth: '40px',
          height: '40px',
        }}
        variant="contained"
      >
        +
      </Button>
    </>
  );
};
