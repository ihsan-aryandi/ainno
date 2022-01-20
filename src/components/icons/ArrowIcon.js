import React from 'react';

export default function ArrowIcon({ className = '', width = '1rem', height = '1rem', onClick }) {
  return (
    <svg className={className} width={width} height={height} onClick={onClick} viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg">
        <path style={{ fill: 'inherit' }}  d="M7.00008 0H9.00008V12L14.5001 6.5L15.9201 7.92L8.00008 15.84L0.0800781 7.92L1.50008 6.5L7.00008 12V0Z"/>
    </svg>    
  );
}
