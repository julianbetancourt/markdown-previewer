import React from 'react';

const Output = ({text}) => {
  return (
    <div className="output" dangerouslySetInnerHTML={text}>

    </div>
  );
}

export default Output;
