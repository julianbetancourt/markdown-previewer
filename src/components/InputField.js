import React from 'react';

const InputField = ({value, onChange}) => {
  return (
    <div className="input-field">
      <textarea value={value} name="" id="" cols="30" onChange={onChange}></textarea>
    </div>
  );
}

export default InputField;
