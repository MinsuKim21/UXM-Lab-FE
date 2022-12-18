import React from 'react';

const Main = (props) => {
  return (
    <main className='main'>
      <div className='main-container'>{props.children}</div>
    </main>
  );
};

export default Main;
