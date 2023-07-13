import React from 'react';
import CompHome from '../components/compHome';

const Home = () => {
  const data = 'Hello, World!';

  return (
    <div>
      <h1>My Page </h1>
      <CompHome data={data} />
    </div>
  );
};

export default Home;