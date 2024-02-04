import React from 'react';
import css from './loading.module.scss';

const Loading = () => {
  return (
    <div className={css['loading']}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
