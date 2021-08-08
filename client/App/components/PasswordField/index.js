import { IconButton, InputAdornment } from '@material-ui/core';
import { Lock, Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import FormInput from '../FormInput';

export default ({ variant = 'outlined', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormInput
      variant={variant}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
        endAdornment: (
          <IconButton>
            <InputAdornment position="end" onClick={togglePassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          </IconButton>
        ),
      }}
      onCopy={e => {
        e.preventDefault();
      }}
      onPaste={e => {
        e.preventDefault();
      }}
      {...props}
    />
  );
};
