import React from 'react'

export default function AngelIcon({ width = '', className = '', angelClassName = '' }) {
    return (
        <svg width={width} className={className} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={angelClassName} d="M7.15006 10.4655L0.350059 3.45297C-0.119941 2.96828 -0.119941 2.18453 0.350059 1.705L1.48006 0.539686C1.95006 0.0549985 2.71006 0.0549985 3.17506 0.539686L7.99506 5.51031L12.8151 0.539686C13.2851 0.0549985 14.0451 0.0549985 14.5101 0.539686L15.6401 1.705C16.1101 2.18969 16.1101 2.97344 15.6401 3.45297L8.84006 10.4655C8.38006 10.9502 7.62006 10.9502 7.15006 10.4655V10.4655Z" fill="#808080"/>
        </svg>
    )
}
