import React from 'react';

export default function Input({ label, type = 'text' }) {
  const containerClass = '';
  return (
    <div className={containerClass}>
      {
        label && <label htmlFor=''>{label}</label>
      }
      <input type={type} />
    </div>
  );
}
