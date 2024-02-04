import React from 'react'
import css from './landing.module.scss';
import landingBgPng from 'assets/files/landing-bg.webp';

const Landing = () => {
  return (
    <main className={css['main']}>
      <img src={landingBgPng} />
    </main>
  )
}

export default Landing