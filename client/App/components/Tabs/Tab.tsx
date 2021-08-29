import React, { FC } from 'react';

type TabProps = {
  value: number,
  index: number,
}
export const Tab: FC<TabProps> = ({ value, index, children }) =>
  // shr bat zona she did style on html
  (<div style={{ height: '100%', width: '100%', background: '#0082a045' }}
        hidden={value !== index}>
    {children}
  </div>);
