import React from 'react';
import {
  CheckBox,
  DeveloperBoard,
  Extension,
  LockOpen,
  LockOpenOutlined,
  MenuBook,
  MusicNote,
  Pages,
  PersonPin,
  PieChart,
  Shuffle,
} from '@material-ui/icons';

export const footerBarOptions = [
  {
    url: '/song',
    Icon: MusicNote,
    message: 'שיר',
  },
  {
    url: '/free-song',
    Icon: LockOpen,
    message: 'שחרר שיר',
  },
  {
    url: '/accords',
    Icon: PieChart,
    message: 'אקורדים',
  },
  {
    url: '/album',
    Icon: Shuffle,
    message: 'אלבום',
  },
  {
    url: '/free-album',
    Icon: LockOpenOutlined,
    message: 'שחרר אלבום',
  },
  {
    url: '/creator',
    Icon: Pages,
    message: 'יוצר',
  },
  {
    url: '/composer',
    Icon: PersonPin,
    message: 'מלחין',
  },
  {
    url: '/singer',
    Icon: MenuBook,
    message: 'זמר',
  },
  {
    url: '/publish-date',
    Icon: Extension,
    message: 'תאריך יציאה',
  },
  {
    url: '/weekly-place',
    Icon: DeveloperBoard,
    message: 'חישוב ראשוני',
  },
  {
    url: '/annual-place',
    Icon: CheckBox,
    message: 'חישוב סופי',
  },
];
