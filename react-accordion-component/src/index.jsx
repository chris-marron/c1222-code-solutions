import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const lang = [
  { key: 1, title: 'Hypertext markup Language', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate, eaque, explicabo amet molestias nam sed aspernatur consequatur architecto in esse nostrum! Ducimus tempore atque officia inventore! Laborum, commodi maxime?' },

  { key: 2, title: 'JavaScript', info: 'ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate, eaque, explicabo amet molestias nam sed aspernatur consequatur architecto in esse nostrum! Ducimus tempore atque officia inventore! Laborum, commodi maxime?' },

  { key: 3, title: 'Cascading Style Sheets', info: 'dolor sit amet consectetur adipisicing elit. Dicta cupiditate, eaque, explicabo amet molestias nam sed aspernatur consequatur architecto in esse nostrum! Ducimus tempore atque officia inventore! Laborum, commodi maxime?' }];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion data={lang}/>);
