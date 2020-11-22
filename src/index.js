import React from 'react';
import ReactDOM from "react-dom";
import Tabs from './components/Tabs';
import Map from './components/Map';

ReactDOM.render(<Tabs />, document.getElementById('tab'));
ReactDOM.render(<Map />, document.getElementById('map'));