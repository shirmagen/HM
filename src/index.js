import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import Tab from './Tab';
import Map from './Map';

ReactDOM.render(<Tab />, document.getElementById('tab'));
ReactDOM.render(<Map />, document.getElementById('map'));