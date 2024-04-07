// TallyFormEmbed.js

import React from 'react';



const TallyFormEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      
      {
      <iframe
        data-tally-src="https://tally.so/r/mJ6jQr"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Career form"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      ></iframe>

}
    </div>
  );
};

export default TallyFormEmbed;
