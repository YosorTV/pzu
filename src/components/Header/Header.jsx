import React from 'react';
import { Figure } from './styled';

export const Header = ({ title, copy, logo }) => {
  return (
    <header>
      <Figure>
        {logo && <img src={logo} alt='pzu-logo' className='logo' />}
        <figcaption className='copy'>
          <h1 className='copy-title'>{title}</h1>
          <p className='copy-text'>{copy}</p>
        </figcaption>
      </Figure>
    </header>
  )};

