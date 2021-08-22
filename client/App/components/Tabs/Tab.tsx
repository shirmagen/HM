import React, { FC } from 'react';

type Props = {
  value: number,
  index: number,
}
export const Tab: FC<Props> = ({ value, index, children }) =>
  // shr bat zona she did style on html
  (<div style={{ height: '100%', width: '100%', background: '#0082a045' }}
        hidden={value !== index}>
    {children}
  </div>);
