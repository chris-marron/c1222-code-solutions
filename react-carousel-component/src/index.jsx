import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';
const data = [
  { key: 1, photo: 'https://pbs.twimg.com/media/FmZRrx7akAIAl__?format=jpg&name=large' },
  { key: 2, photo: 'https://pbs.twimg.com/media/FoiB6W0aIAM6bOP?format=jpg&name=large' },
  { key: 3, photo: 'https://pbs.twimg.com/media/FmwtDyxacAAl-FN?format=jpg&name=large' },
  { key: 4, photo: 'https://pbs.twimg.com/media/FmP_WeAacAECtTZ?format=jpg&name=large' },
  { key: 5, photo: 'https://pbs.twimg.com/media/FmP_W7AaUAgzOqU?format=jpg&name=large' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel data={data}/>);
