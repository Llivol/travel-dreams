import React from 'react';

const TitleBlock = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>The places you dream of</h1>
      <h2>Let&apos;s live new adventures</h2>
      <input type="text" placeholder="Search trips" style={{ marginTop: '10px', padding: '10px', width: '50%', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>
  );
};

export default TitleBlock;
