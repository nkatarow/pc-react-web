import React from 'react';
import { Link } from 'react-router-dom';

// Atoms
import Title from '../../components/atoms/title/';
import Button from '../../components/atoms/button/';
import Picture from '../../components/atoms/picture/';

// Molecules
import HalfHalf from '../../components/molecules/_layouts/HalfHalf/';

import image from './_img/not-found.svg';
import './style.css';

const ErrorPage = () => (
  <section className="error-page">
    <HalfHalf>
      <div>
        <Title tag="h2" theme="hero-title">Oops, something went wrong.</Title>
        <p className="medium gray">We couldn’t find the page you’re looking for. Please try again later or review other pages on our site for the information you’re seeking.</p>
        <Link to="/">
          <Button>DATA SOLUTIONS HOME</Button>
        </Link>
      </div>
      <div>
        <Picture src={image} />
      </div>
    </HalfHalf>
  </section>
);

export default ErrorPage;
